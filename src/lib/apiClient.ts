import axios, { AxiosError } from 'axios';
import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

// Extend the AxiosRequestConfig to include _retry property
interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
	_retry?: boolean;
}

// Global flag to control token refresh behavior
let isRefreshEnabled = false;

// Functions to enable/disable token refresh
export const enableTokenRefresh = () => {
	isRefreshEnabled = true;
};

export const disableTokenRefresh = () => {
	isRefreshEnabled = false;
};

// Create a separate axios instance for refresh calls to prevent interceptor loops
const refreshClient = axios.create();

// Main API client with interceptors
const apiClient = axios.create({
	baseURL:
		(import.meta as any).env?.VITE_API_BASE_URL || 'http://localhost:3000',
	headers: {
		'X-API-Key': (import.meta as any).env?.VITE_API_KEY || '',
		'Content-Type': 'application/json'
	}
});

// Request interceptor to automatically attach Bearer token
apiClient.interceptors.request.use(
	config => {
		const accessToken = localStorage.getItem('lumoraAccessToken');
		if (accessToken) {
			config.headers.Authorization = `Bearer ${accessToken}`;
		}
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

// Response interceptor to handle token refresh
apiClient.interceptors.response.use(
	(response: AxiosResponse) => {
		return response;
	},
	async (error: AxiosError) => {
		const originalRequest = error.config as CustomAxiosRequestConfig;

		// Check if this is a 401 error, refresh is enabled, and we haven't already tried to refresh
		if (
			error.response?.status === 401 &&
			isRefreshEnabled &&
			originalRequest &&
			!originalRequest._retry
		) {
			originalRequest._retry = true;

			try {
				const refreshToken = localStorage.getItem('lumoraRefreshToken');

				if (!refreshToken) {
					throw new Error('No refresh token available');
				}

				// Use the separate refresh client to avoid interceptor loops
				const refreshResponse = await refreshClient.post(
					`${(import.meta as any).env?.VITE_API_BASE_URL || 'http://localhost:3000'}/auth/refresh`,
					{ refresh_token: refreshToken },
					{
						headers: {
							'X-API-Key':
								(import.meta as any).env?.VITE_API_KEY || '',
							'Content-Type': 'application/json'
						}
					}
				);

				if (
					refreshResponse.data.success &&
					refreshResponse.data.accessToken
				) {
					// Store the new access token
					localStorage.setItem(
						'lumoraAccessToken',
						refreshResponse.data.accessToken
					);

					// Store the new refresh token if provided (token rotation)
					if (refreshResponse.data.refreshToken) {
						localStorage.setItem(
							'lumoraRefreshToken',
							refreshResponse.data.refreshToken
						);
					}

					// Update the original request with the new token
					originalRequest.headers.Authorization = `Bearer ${refreshResponse.data.accessToken}`;

					// Retry the original request
					return apiClient(originalRequest);
				} else {
					throw new Error('Invalid refresh response');
				}
			} catch (refreshError) {
				// Refresh failed, clear tokens and redirect to login
				localStorage.removeItem('lumoraAccessToken');
				localStorage.removeItem('lumoraRefreshToken');
				localStorage.removeItem('lumoraUser');

				// Redirect to login page
				window.location.href = '/login';

				return Promise.reject(refreshError);
			}
		}

		return Promise.reject(error);
	}
);

/**
 * Logout user by sending refresh token to the logout endpoint
 * Clears tokens from localStorage and invalidates the session on the server
 */
export const logoutUser = async (): Promise<void> => {
	const refreshToken = localStorage.getItem('lumoraRefreshToken');

	if (!refreshToken) {
		throw new Error('No refresh token available for logout');
	}

	// Send logout request to invalidate the refresh token on the server
	await apiClient.post('/auth/logout', {
		refresh_token: refreshToken
	});
};

export default apiClient;
