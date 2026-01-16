import axios, { AxiosError } from 'axios';
import type {
	AxiosInstance,
	AxiosResponse,
	InternalAxiosRequestConfig
} from 'axios';
import {
	clearAuthTokens,
	getAuthTokens,
	logAuthError,
	storeAuthTokens
} from './authUtils';

// ------------------------------
// Single-flight refresh handling
// ------------------------------
interface PendingRequest {
	resolve: (tokens: { accessToken: string; refreshToken: string }) => void;
	reject: (error: Error) => void;
}

interface RefreshTokens {
	accessToken: string;
	refreshToken: string;
}

/**
 * Creates a configured axios client instance with authentication interceptors
 * @param apiBaseUrl - The base URL for the API (e.g., 'http://localhost:3000')
 * @returns Configured axios instance with request/response interceptors
 */
export const createAxiosClient = (apiBaseUrl: string): AxiosInstance => {
	// Validate API base URL
	if (!apiBaseUrl) {
		throw new Error('API base URL is required to create axios client');
	}

	// Create axios instance
	const axiosClient = axios.create({
		baseURL: apiBaseUrl,
		headers: {
			'Content-Type': 'application/json'
		}
	});

	// Single-flight refresh handling (per instance)
	let isRefreshing = false;
	let refreshPromise: Promise<AxiosResponse<RefreshTokens>> | null = null;
	let pendingQueue: PendingRequest[] = [];

	const flushQueue = (error: Error | null, tokens?: RefreshTokens): void => {
		pendingQueue.forEach(({ resolve, reject }) => {
			if (error) {
				reject(error);
			} else if (tokens) {
				resolve(tokens);
			}
		});
		pendingQueue = [];
	};

	// Request interceptor - add auth token to every request
	axiosClient.interceptors.request.use(
		(config: InternalAxiosRequestConfig) => {
			// Get token from centralized auth utility
			const { accessToken } = getAuthTokens();
			if (accessToken && config.headers) {
				config.headers.Authorization = `Bearer ${accessToken}`;
			}
			return config;
		},
		(error: AxiosError) => Promise.reject(error)
	);

	// Response interceptor - handle token refresh on 401
	axiosClient.interceptors.response.use(
		response => response,
		async (error: AxiosError) => {
			const originalRequest =
				error.config as InternalAxiosRequestConfig & {
					_retry?: boolean;
				};
			const status = error.response?.status;
			const url = originalRequest?.url || '';

			// Do not attempt refresh on the refresh endpoint itself to avoid loops
			const isRefreshEndpoint = url.includes('/auth/refresh');

			// Only handle 401s for non-auth endpoints and only once per original request
			if (status !== 401 || originalRequest._retry || isRefreshEndpoint) {
				return Promise.reject(error);
			}

			originalRequest._retry = true;

			const { refreshToken } = getAuthTokens();
			if (!refreshToken) {
				// No refresh token; ensure clean logout
				const authError = new Error(
					'No refresh token available for token refresh'
				);
				logAuthError(authError, 'AxiosClient - Token Refresh');
				clearAuthTokens();
				if (typeof window !== 'undefined') {
					window.location.href = '/login';
				}
				return Promise.reject(error);
			}

			// If a refresh is already in progress, wait for it and then retry
			if (isRefreshing && refreshPromise) {
				return new Promise<RefreshTokens>((resolve, reject) => {
					pendingQueue.push({ resolve, reject });
				})
					.then(tokens => {
						const {
							accessToken: newAccessToken,
							refreshToken: rotatedRefreshToken
						} = tokens;
						if (originalRequest.headers) {
							originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
						}

						// Special case: if retrying logout, ensure body uses the rotated refresh token
						if (url.includes('/auth/logout')) {
							try {
								if (typeof originalRequest.data === 'string') {
									const parsed = JSON.parse(
										originalRequest.data || '{}'
									);
									parsed.refresh_token = rotatedRefreshToken;
									originalRequest.data =
										JSON.stringify(parsed);
								} else if (
									originalRequest.data &&
									typeof originalRequest.data === 'object'
								) {
									originalRequest.data.refresh_token =
										rotatedRefreshToken;
								} else {
									originalRequest.data = JSON.stringify({
										refresh_token: rotatedRefreshToken
									});
								}
							} catch (_) {
								originalRequest.data = JSON.stringify({
									refresh_token: rotatedRefreshToken
								});
							}
						}
						return axiosClient(originalRequest);
					})
					.catch(queueErr => Promise.reject(queueErr));
			}

			// Start a new refresh request
			isRefreshing = true;
			refreshPromise = axios.post<RefreshTokens>(
				`${apiBaseUrl}/auth/refresh`,
				{
					refresh_token: refreshToken
				}
			);

			try {
				const response = await refreshPromise;
				const { accessToken, refreshToken: newRefreshToken } =
					response.data;

				// Persist new tokens using centralized utility
				storeAuthTokens(accessToken, newRefreshToken, null);

				// Resolve all queued requests with both tokens
				flushQueue(null, {
					accessToken,
					refreshToken: newRefreshToken
				});

				// Retry the original request with the new token
				if (originalRequest.headers) {
					originalRequest.headers.Authorization = `Bearer ${accessToken}`;
				}
				if (url.includes('/auth/logout')) {
					// Ensure logout payload uses the rotated refresh token
					try {
						if (typeof originalRequest.data === 'string') {
							const parsed = JSON.parse(
								originalRequest.data || '{}'
							);
							parsed.refresh_token = newRefreshToken;
							originalRequest.data = JSON.stringify(parsed);
						} else if (
							originalRequest.data &&
							typeof originalRequest.data === 'object'
						) {
							originalRequest.data.refresh_token =
								newRefreshToken;
						} else {
							originalRequest.data = JSON.stringify({
								refresh_token: newRefreshToken
							});
						}
					} catch (_) {
						originalRequest.data = JSON.stringify({
							refresh_token: newRefreshToken
						});
					}
				}
				return axiosClient(originalRequest);
			} catch (refreshError) {
				// Reject all queued requests and cleanup
				logAuthError(
					refreshError as Error,
					'AxiosClient - Token Refresh Failed'
				);
				flushQueue(refreshError as Error);

				clearAuthTokens();

				if (typeof window !== 'undefined') {
					window.location.href = '/login';
				}

				return Promise.reject(refreshError);
			} finally {
				isRefreshing = false;
				refreshPromise = null;
			}
		}
	);

	return axiosClient;
};
