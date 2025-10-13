import { waitFor } from '@testing-library/react';
import LumoraWrapper from '../LumoraWrapper';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';

// Mock axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

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

// Mock window.location
const mockLocation = {
	href: 'http://localhost:3000/'
};

Object.defineProperty(window, 'location', {
	value: mockLocation,
	writable: true
});

describe('LumoraWrapper - Token Refresh Integration', () => {
	beforeEach(() => {
		jest.clearAllMocks();

		// Reset localStorage mocks
		mockLocalStorage.getItem.mockReturnValue(null);
		mockLocalStorage.setItem.mockClear();
		mockLocalStorage.removeItem.mockClear();

		// Reset axios mocks
		mockedAxios.create.mockReturnValue(mockedAxios);
		mockedAxios.post.mockResolvedValue({
			data: { success: true, accessToken: 'new-token' }
		});
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	describe('Component Integration', () => {
		it('renders without errors when enableRefreshToken is true', () => {
			const { container } = render(
				<LumoraWrapper enableRefreshToken={true}>
					<div data-testid='test-content'>Test Content</div>
				</LumoraWrapper>
			);

			expect(container).toBeInTheDocument();
			expect(screen.getByTestId('test-content')).toBeInTheDocument();
		});

		it('renders without errors when enableRefreshToken is false', () => {
			const { container } = render(
				<LumoraWrapper enableRefreshToken={false}>
					<div data-testid='test-content'>Test Content</div>
				</LumoraWrapper>
			);

			expect(container).toBeInTheDocument();
			expect(screen.getByTestId('test-content')).toBeInTheDocument();
		});

		it('handles enableRefreshToken prop changes', () => {
			const { rerender } = render(
				<LumoraWrapper enableRefreshToken={false}>
					<div data-testid='test-content'>Test Content</div>
				</LumoraWrapper>
			);

			// Change prop to true
			rerender(
				<LumoraWrapper enableRefreshToken={true}>
					<div data-testid='test-content'>Test Content</div>
				</LumoraWrapper>
			);

			// Component should still render
			expect(screen.getByTestId('test-content')).toBeInTheDocument();
		});
	});

	describe('API Client Integration', () => {
		it('apiClient is available for import', () => {
			// Test that apiClient can be imported without errors
			expect(() => {
				require('../../apiClient');
			}).not.toThrow();
		});

		it('handles missing tokens gracefully', () => {
			// No tokens in localStorage
			mockLocalStorage.getItem.mockReturnValue(null);

			const { container } = render(
				<LumoraWrapper enableRefreshToken={true}>
					<div data-testid='test-content'>Test Content</div>
				</LumoraWrapper>
			);

			// Component should render without errors even without tokens
			expect(container).toBeInTheDocument();
		});

		it('handles tokens in localStorage', () => {
			// Mock tokens in localStorage
			mockLocalStorage.getItem.mockImplementation(key => {
				if (key === 'accessToken') return 'test-access-token';
				if (key === 'refreshToken') return 'test-refresh-token';
				return null;
			});

			const { container } = render(
				<LumoraWrapper enableRefreshToken={true}>
					<div data-testid='test-content'>Test Content</div>
				</LumoraWrapper>
			);

			// Component should render without errors with tokens
			expect(container).toBeInTheDocument();
		});
	});

	describe('Error Handling', () => {
		it('handles localStorage errors gracefully', () => {
			// Mock localStorage.getItem to throw an error
			mockLocalStorage.getItem.mockImplementation(() => {
				throw new Error('localStorage access denied');
			});

			const { container } = render(
				<LumoraWrapper enableRefreshToken={true}>
					<div data-testid='test-content'>Test Content</div>
				</LumoraWrapper>
			);

			// Component should still render even if localStorage fails
			expect(container).toBeInTheDocument();
		});
	});
});
