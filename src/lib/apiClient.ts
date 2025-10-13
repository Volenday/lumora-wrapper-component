import axios, {
	AxiosError,
	AxiosResponse,
	InternalAxiosRequestConfig
} from 'axios';

// Extend the AxiosRequestConfig to include _retry property
interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
	_retry?: boolean;
}

// Create a separate axios instance for refresh calls to prevent interceptor loops
const refreshClient = axios.create();

// Main API client with interceptors
const apiClient = axios.create({
	baseURL:
		(import.meta as any).env?.VITE_API_BASE_URL ||
		'https://dev.api.lumora.capital',
	headers: {
		'X-API-Key': (import.meta as any).env?.VITE_API_KEY || '',
		'Content-Type': 'application/json'
	}
});

// Request interceptor to automatically attach Bearer token
apiClient.interceptors.request.use(
	config => {
		const accessToken = localStorage.getItem('accessToken');
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

		// Check if this is a 401 error and we haven't already tried to refresh
		if (
			error.response?.status === 401 &&
			originalRequest &&
			!originalRequest._retry
		) {
			originalRequest._retry = true;

			try {
				const refreshToken = localStorage.getItem('refreshToken');

				if (!refreshToken) {
					throw new Error('No refresh token available');
				}

				// Use the separate refresh client to avoid interceptor loops
				const refreshResponse = await refreshClient.post(
					`${(import.meta as any).env?.VITE_API_BASE_URL || 'https://dev.api.lumora.capital'}/auth/refresh`,
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
						'accessToken',
						refreshResponse.data.accessToken
					);

					// Update the original request with the new token
					originalRequest.headers.Authorization = `Bearer ${refreshResponse.data.accessToken}`;

					// Retry the original request
					return apiClient(originalRequest);
				} else {
					throw new Error('Invalid refresh response');
				}
			} catch (refreshError) {
				// Refresh failed, clear tokens and redirect to login
				localStorage.removeItem('accessToken');
				localStorage.removeItem('refreshToken');

				// Redirect to login page
				window.location.href = '/login';

				return Promise.reject(refreshError);
			}
		}

		return Promise.reject(error);
	}
);

export default apiClient;
