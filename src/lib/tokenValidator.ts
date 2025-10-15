import axios from 'axios';

/**
 * Validates tokens on mount and refreshes if needed
 * Returns true if tokens are valid/refreshed, false if redirect to login is needed
 */
export const validateAndRefreshTokens = async (): Promise<boolean> => {
	const accessToken = localStorage.getItem('lumoraAccessToken');
	const refreshToken = localStorage.getItem('lumoraRefreshToken');

	// If we have an access token, we're good
	if (accessToken) {
		return true;
	}

	// No access token, but we have a refresh token - try to refresh
	if (refreshToken) {
		try {
			const refreshResponse = await axios.post(
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
				// Store the new tokens
				localStorage.setItem(
					'lumoraAccessToken',
					refreshResponse.data.accessToken
				);
				if (refreshResponse.data.refreshToken) {
					localStorage.setItem(
						'lumoraRefreshToken',
						refreshResponse.data.refreshToken
					);
				}
				return true;
			}
		} catch (error) {
			console.error('Token refresh failed:', error);
		}
	}

	// No tokens or refresh failed - clear everything and redirect
	localStorage.removeItem('lumoraAccessToken');
	localStorage.removeItem('lumoraRefreshToken');
	window.location.href = '/login';
	return false;
};
