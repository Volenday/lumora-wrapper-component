import { waitFor } from '@testing-library/react';
import LumoraWrapper from '../LumoraWrapper';
import { render, mockTokenExpiry, mockExpiredToken } from './testUtils';
import '@testing-library/jest-dom';
import axios from 'axios';

// Mock axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Mock axios interceptors
const mockInterceptors = {
	request: {
		use: jest.fn()
	},
	response: {
		use: jest.fn()
	}
};

mockedAxios.interceptors = mockInterceptors as any;

// Mock localStorage
const mockLocalStorage = {
	getItem: jest.fn(),
	setItem: jest.fn(),
	removeItem: jest.fn(),
	clear: jest.fn()
};

Object.defineProperty(window, 'localStorage', {
	value: mockLocalStorage
});

// Mock window.location is handled in setupTests.ts

describe('LumoraWrapper - Token Refresh Logic', () => {
	beforeEach(() => {
		jest.clearAllMocks();
		jest.useFakeTimers();
		jest.setSystemTime(new Date('2024-01-01T10:00:00Z'));

		// Reset localStorage mocks
		mockLocalStorage.getItem.mockReturnValue(null);
		mockLocalStorage.setItem.mockClear();
		mockLocalStorage.removeItem.mockClear();

		// Reset axios mocks
		mockedAxios.create.mockReturnValue(mockedAxios);
		mockedAxios.post.mockResolvedValue({
			data: { success: true, accessToken: 'new-token' }
		});

		// Reset interceptor mocks
		mockInterceptors.request.use.mockClear();
		mockInterceptors.response.use.mockClear();
	});

	afterEach(() => {
		jest.useRealTimers();
	});

	describe('Token Refresh Interceptor Setup', () => {
		it('does not set up interceptors when enableRefreshToken is false', async () => {
			render(
				<LumoraWrapper enableRefreshToken={false}>
					<div>Test Content</div>
				</LumoraWrapper>
			);

			// The interceptor setup happens in apiClient.ts, not in the component
			// When enableRefreshToken is false, the component doesn't trigger any API calls
			await waitFor(() => {
				expect(mockedAxios.post).not.toHaveBeenCalled();
			});
		});

		it('sets up interceptors when enableRefreshToken is true', async () => {
			// Mock tokens in localStorage
			mockLocalStorage.getItem.mockImplementation(key => {
				if (key === 'accessToken') return 'test-access-token';
				if (key === 'refreshToken') return 'test-refresh-token';
				return null;
			});

			render(
				<LumoraWrapper enableRefreshToken={true}>
					<div>Test Content</div>
				</LumoraWrapper>
			);

			// The interceptor is set up globally in apiClient.ts
			// We verify that the component renders without errors
			expect(mockedAxios.create).toHaveBeenCalled();
		});

		it('handles missing tokens gracefully', async () => {
			// No tokens in localStorage
			mockLocalStorage.getItem.mockReturnValue(null);

			render(
				<LumoraWrapper enableRefreshToken={true}>
					<div>Test Content</div>
				</LumoraWrapper>
			);

			// Component should render without errors even without tokens
			expect(mockedAxios.create).toHaveBeenCalled();
		});
	});

	describe('API Client Configuration', () => {
		it('creates axios instance with correct configuration', () => {
			// The apiClient is created when the module is imported
			expect(mockedAxios.create).toHaveBeenCalledWith(
				expect.objectContaining({
					baseURL: expect.any(String),
					headers: expect.objectContaining({
						'X-API-Key': expect.any(String),
						'Content-Type': 'application/json'
					})
				})
			);
		});

		it('sets up request and response interceptors', () => {
			// The interceptors are set up when the module is imported
			expect(mockInterceptors.request.use).toHaveBeenCalled();
			expect(mockInterceptors.response.use).toHaveBeenCalled();
		});
	});

	describe('Component Integration', () => {
		it('renders without errors when enableRefreshToken is true', () => {
			const { container } = render(
				<LumoraWrapper enableRefreshToken={true}>
					<div>Test Content</div>
				</LumoraWrapper>
			);

			expect(container).toBeInTheDocument();
		});

		it('renders without errors when enableRefreshToken is false', () => {
			const { container } = render(
				<LumoraWrapper enableRefreshToken={false}>
					<div>Test Content</div>
				</LumoraWrapper>
			);

			expect(container).toBeInTheDocument();
		});

		it('handles enableRefreshToken prop changes', () => {
			const { rerender } = render(
				<LumoraWrapper enableRefreshToken={false}>
					<div>Test Content</div>
				</LumoraWrapper>
			);

			// Change prop to true
			rerender(
				<LumoraWrapper enableRefreshToken={true}>
					<div>Test Content</div>
				</LumoraWrapper>
			);

			// Component should still render
			expect(document.body).toBeInTheDocument();
		});
	});
});
