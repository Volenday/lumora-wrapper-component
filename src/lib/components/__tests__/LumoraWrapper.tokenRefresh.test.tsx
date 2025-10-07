import { waitFor } from '@testing-library/react';
import Cookies from 'js-cookie';
import LumoraWrapper from '../LumoraWrapper';
import { render, mockTokenExpiry, mockExpiredToken } from './testUtils';
import '@testing-library/jest-dom';

// Mock js-cookie
const mockCookies = Cookies as jest.Mocked<typeof Cookies>;

// Mock fetch
const mockFetch = globalThis.fetch as jest.MockedFunction<typeof fetch>;

// Mock window.location is handled in setupTests.ts

describe('LumoraWrapper - Token Refresh Logic', () => {
	beforeEach(() => {
		jest.clearAllMocks();
		jest.useFakeTimers();
		jest.setSystemTime(new Date('2024-01-01T10:00:00Z'));
	});

	afterEach(() => {
		jest.useRealTimers();
	});

	describe('Token Validation', () => {
		it('does not run token refresh logic when enableRefreshToken is false', async () => {
			mockCookies.get.mockReturnValue(mockTokenExpiry(5) as any); // 5 minutes from now (should trigger refresh)

			render(
				<LumoraWrapper enableRefreshToken={false}>
					<div>Test Content</div>
				</LumoraWrapper>
			);

			await waitFor(() => {
				expect(mockFetch).not.toHaveBeenCalled();
			});

			expect(console.warn).not.toHaveBeenCalled();
			expect(console.log).not.toHaveBeenCalled();
		});

		it('does not refresh when token is valid for more than 10 minutes', async () => {
			mockCookies.get.mockReturnValue(mockTokenExpiry(20) as any); // 20 minutes from now

			render(
				<LumoraWrapper enableRefreshToken={true}>
					<div>Test Content</div>
				</LumoraWrapper>
			);

			await waitFor(() => {
				expect(mockFetch).not.toHaveBeenCalled();
			});

			expect(console.log).toHaveBeenCalledWith(
				'Token is still valid, no refresh needed'
			);
		});

		it('refreshes when token expires within 10 minutes', async () => {
			mockCookies.get.mockReturnValue(mockTokenExpiry(5) as any); // 5 minutes from now

			const mockResponse = {
				ok: true,
				json: () =>
					Promise.resolve({
						token: 'new-token',
						tokenExpiry: mockTokenExpiry(60)
					})
			};
			mockFetch.mockResolvedValueOnce(mockResponse as Response);

			render(
				<LumoraWrapper enableRefreshToken={true}>
					<div>Test Content</div>
				</LumoraWrapper>
			);

			await waitFor(() => {
				expect(mockFetch).toHaveBeenCalledWith('/api/auth/refresh', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					credentials: 'include'
				});
			});

			expect(console.log).toHaveBeenCalledWith(
				'Token expires soon, refreshing...'
			);
		});

		/** 
		it('redirects to login when token is already expired', async () => {
		// 	mockCookies.get.mockReturnValue(mockExpiredToken(5) as any); // 5 minutes ago

		// 	render(<LumoraWrapper enableRefreshToken={true}><div>Test Content</div></LumoraWrapper>);

		// 	await waitFor(() => {
		// 		expect(mockFetch).not.toHaveBeenCalled();
		// 	});

		// 	expect(mockCookies.remove).toHaveBeenCalledWith('token');
		// 	expect(mockCookies.remove).toHaveBeenCalledWith('tokenExpiry');
		// 			expect((window as any).location.href).toBe('http://localhost:3000/');
		// 	expect(console.warn).toHaveBeenCalledWith('Token has expired, redirecting to login');
		// });
		*/
	});

	describe('Token Refresh Success', () => {
		it('updates cookies with new token and expiry', async () => {
			mockCookies.get.mockReturnValue(mockTokenExpiry(5) as any);

			const newToken = 'new-refreshed-token';
			const newExpiry = mockTokenExpiry(60);

			const mockResponse = {
				ok: true,
				json: () =>
					Promise.resolve({
						token: newToken,
						tokenExpiry: newExpiry
					})
			};
			mockFetch.mockResolvedValueOnce(mockResponse as Response);

			render(
				<LumoraWrapper enableRefreshToken={true}>
					<div>Test Content</div>
				</LumoraWrapper>
			);

			await waitFor(() => {
				expect(mockFetch).toHaveBeenCalled();
			});

			expect(mockCookies.set).toHaveBeenCalledWith('token', newToken, {
				expires: 7,
				secure: true,
				sameSite: 'strict'
			});

			expect(mockCookies.set).toHaveBeenCalledWith(
				'tokenExpiry',
				newExpiry,
				{
					expires: 7,
					secure: true,
					sameSite: 'strict'
				}
			);

			expect(console.log).toHaveBeenCalledWith(
				'Token refreshed successfully'
			);
		});

		it('handles partial response with only token', async () => {
			mockCookies.get.mockReturnValue(mockTokenExpiry(5) as any);

			const mockResponse = {
				ok: true,
				json: () =>
					Promise.resolve({
						token: 'new-token'
						// No tokenExpiry
					})
			};
			mockFetch.mockResolvedValueOnce(mockResponse as Response);

			render(
				<LumoraWrapper enableRefreshToken={true}>
					<div>Test Content</div>
				</LumoraWrapper>
			);

			await waitFor(() => {
				expect(mockFetch).toHaveBeenCalled();
			});

			expect(mockCookies.set).toHaveBeenCalledWith(
				'token',
				'new-token',
				expect.any(Object)
			);
			expect(mockCookies.set).not.toHaveBeenCalledWith(
				'tokenExpiry',
				expect.any(String),
				expect.any(Object)
			);
		});

		it('handles partial response with only tokenExpiry', async () => {
			mockCookies.get.mockReturnValue(mockTokenExpiry(5) as any);

			const mockResponse = {
				ok: true,
				json: () =>
					Promise.resolve({
						// No token
						tokenExpiry: mockTokenExpiry(60)
					})
			};
			mockFetch.mockResolvedValueOnce(mockResponse as Response);

			render(
				<LumoraWrapper enableRefreshToken={true}>
					<div>Test Content</div>
				</LumoraWrapper>
			);

			await waitFor(() => {
				expect(mockFetch).toHaveBeenCalled();
			});

			expect(mockCookies.set).not.toHaveBeenCalledWith(
				'token',
				expect.any(String),
				expect.any(Object)
			);
			expect(mockCookies.set).toHaveBeenCalledWith(
				'tokenExpiry',
				expect.any(String),
				expect.any(Object)
			);
		});
	});

	describe('Token Refresh Failure', () => {
		it('handles network error and redirects to login', async () => {
			mockCookies.get.mockReturnValue(mockTokenExpiry(5) as any);

			mockFetch.mockRejectedValueOnce(new Error('Network error'));

			render(
				<LumoraWrapper enableRefreshToken={true}>
					<div>Test Content</div>
				</LumoraWrapper>
			);

			await waitFor(() => {
				expect(mockFetch).toHaveBeenCalled();
			});

			expect(mockCookies.remove).toHaveBeenCalledWith('token');
			expect(mockCookies.remove).toHaveBeenCalledWith('tokenExpiry');
			expect((window as any).location.href).toBe(
				'http://localhost:3000/'
			);
			expect(console.error).toHaveBeenCalledWith(
				'Token refresh failed:',
				expect.any(Error)
			);
		});

		it('handles API error response and redirects to login', async () => {
			mockCookies.get.mockReturnValue(mockTokenExpiry(5) as any);

			const mockResponse = {
				ok: false,
				status: 401,
				statusText: 'Unauthorized'
			};
			mockFetch.mockResolvedValueOnce(mockResponse as Response);

			render(
				<LumoraWrapper enableRefreshToken={true}>
					<div>Test Content</div>
				</LumoraWrapper>
			);

			await waitFor(() => {
				expect(mockFetch).toHaveBeenCalled();
			});

			expect(mockCookies.remove).toHaveBeenCalledWith('token');
			expect(mockCookies.remove).toHaveBeenCalledWith('tokenExpiry');
			expect((window as any).location.href).toBe(
				'http://localhost:3000/'
			);
			expect(console.error).toHaveBeenCalledWith(
				'Token refresh failed:',
				expect.any(Error)
			);
		});

		it('handles 500 server error and redirects to login', async () => {
			mockCookies.get.mockReturnValue(mockTokenExpiry(5) as any);

			const mockResponse = {
				ok: false,
				status: 500,
				statusText: 'Internal Server Error'
			};
			mockFetch.mockResolvedValueOnce(mockResponse as Response);

			render(
				<LumoraWrapper enableRefreshToken={true}>
					<div>Test Content</div>
				</LumoraWrapper>
			);

			await waitFor(() => {
				expect(mockFetch).toHaveBeenCalled();
			});

			expect(mockCookies.remove).toHaveBeenCalledWith('token');
			expect(mockCookies.remove).toHaveBeenCalledWith('tokenExpiry');
			expect((window as any).location.href).toBe(
				'http://localhost:3000/'
			);
		});
	});

	describe('Edge Cases', () => {
		it('handles missing tokenExpiry cookie', async () => {
			mockCookies.get.mockReturnValue(undefined);

			render(
				<LumoraWrapper enableRefreshToken={true}>
					<div>Test Content</div>
				</LumoraWrapper>
			);

			await waitFor(() => {
				expect(mockFetch).not.toHaveBeenCalled();
			});

			expect(console.warn).toHaveBeenCalledWith(
				'No tokenExpiry cookie found'
			);
		});

		it('handles invalid date in tokenExpiry cookie', async () => {
			mockCookies.get.mockReturnValue('invalid-date' as any);

			render(
				<LumoraWrapper enableRefreshToken={true}>
					<div>Test Content</div>
				</LumoraWrapper>
			);

			// Invalid dates don't throw errors, they just create invalid Date objects
			// The component should handle this gracefully without logging errors
			await waitFor(() => {
				expect(console.error).not.toHaveBeenCalled();
			});
		});

		it('handles token expiry exactly at threshold', async () => {
			// Set token to expire in exactly 10 minutes (threshold)
			const thresholdTime = new Date();
			thresholdTime.setMinutes(thresholdTime.getMinutes() + 10);
			mockCookies.get.mockReturnValue(thresholdTime.toISOString() as any);

			const mockResponse = {
				ok: true,
				json: () =>
					Promise.resolve({
						token: 'new-token',
						tokenExpiry: mockTokenExpiry(60)
					})
			};
			mockFetch.mockResolvedValueOnce(mockResponse as Response);

			render(
				<LumoraWrapper enableRefreshToken={true}>
					<div>Test Content</div>
				</LumoraWrapper>
			);

			await waitFor(() => {
				expect(mockFetch).toHaveBeenCalled();
			});

			expect(console.log).toHaveBeenCalledWith(
				'Token expires soon, refreshing...'
			);
		});

		it('handles token expiry just beyond threshold', async () => {
			// Set token to expire in 11 minutes (just beyond threshold)
			const beyondThresholdTime = new Date();
			beyondThresholdTime.setMinutes(
				beyondThresholdTime.getMinutes() + 11
			);
			mockCookies.get.mockReturnValue(
				beyondThresholdTime.toISOString() as any
			);

			render(
				<LumoraWrapper enableRefreshToken={true}>
					<div>Test Content</div>
				</LumoraWrapper>
			);

			await waitFor(() => {
				expect(mockFetch).not.toHaveBeenCalled();
			});

			expect(console.log).toHaveBeenCalledWith(
				'Token is still valid, no refresh needed'
			);
		});
	});
});
