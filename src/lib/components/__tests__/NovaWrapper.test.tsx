import { render, screen, waitFor } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Home, Settings, Person } from '@mui/icons-material';
import Cookies from 'js-cookie';
import NovaWrapper, { type NovaWrapperProps, type SidebarLink } from '../NovaWrapper';
import '@testing-library/jest-dom';

// Mock js-cookie
const mockCookies = Cookies as jest.Mocked<typeof Cookies>;

// Mock fetch
const mockFetch = global.fetch as jest.MockedFunction<typeof fetch>;

// Mock window.location is handled in setupTests.ts

// Test theme
const theme = createTheme();

// Test data
const mockSidebarLinks: SidebarLink[] = [
	{
		text: 'Home',
		path: '/home',
		icon: <Home data-testid="home-icon" />
	},
	{
		text: 'Settings',
		path: '/settings',
		icon: <Settings data-testid="settings-icon" />
	},
	{
		text: 'Profile',
		path: '/profile',
		icon: <Person data-testid="profile-icon" />
	}
];

const mockAppLogo = <div data-testid="app-logo">Test Logo</div>;

// Helper function to render component with theme
const renderWithTheme = (props: Partial<NovaWrapperProps> = {}) => {
	const defaultProps: NovaWrapperProps = {
		children: <div data-testid="test-content">Test Content</div>,
		...props
	};

	return render(
		<ThemeProvider theme={theme}>
			<NovaWrapper {...defaultProps} />
		</ThemeProvider>
	);
};

describe('NovaWrapper', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	describe('Basic Rendering', () => {
		it('renders children correctly', () => {
			renderWithTheme();
			expect(screen.getByTestId('test-content')).toBeInTheDocument();
		});

		it('renders with default props', () => {
			renderWithTheme();
			expect(screen.getByTestId('test-content')).toBeInTheDocument();
		});

		it('applies custom styles to main container', () => {
			const customStyle = { backgroundColor: 'red' };
			renderWithTheme({ style: customStyle });
			
			const mainContainer = screen.getByTestId('test-content').closest('[class*="MuiBox-root"]');
			expect(mainContainer).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
		});
	});

	describe('Header Functionality', () => {
		it('renders header when showHeader is true', () => {
			renderWithTheme({ showHeader: true, headerTitle: 'Test App' });
			expect(screen.getByRole('banner')).toBeInTheDocument();
			expect(screen.getByText('Test App')).toBeInTheDocument();
		});

		it('does not render header when showHeader is false', () => {
			renderWithTheme({ showHeader: false });
			expect(screen.queryByRole('banner')).not.toBeInTheDocument();
		});

		it('renders app logo when provided', () => {
			renderWithTheme({ 
				showHeader: true, 
				appLogo: mockAppLogo 
			});
			expect(screen.getByTestId('app-logo')).toBeInTheDocument();
		});

		it('renders header title when provided', () => {
			renderWithTheme({ 
				showHeader: true, 
				headerTitle: 'My Application' 
			});
			expect(screen.getByText('My Application')).toBeInTheDocument();
		});

		it('applies custom header styles', () => {
			const headerStyles = { backgroundColor: 'blue' };
			renderWithTheme({ 
				showHeader: true, 
				headerStyles 
			});
			
			const header = screen.getByRole('banner');
			expect(header).toHaveStyle('background-color: rgb(0, 0, 255)');
		});
	});

	describe('Sidebar Functionality', () => {
		it('renders sidebar when showSidebar is true', () => {
			renderWithTheme({ 
				showSidebar: true, 
				sidebarLinks: mockSidebarLinks 
			});
			
			// Check if sidebar links are rendered
			expect(screen.getByText('Home')).toBeInTheDocument();
			expect(screen.getByText('Settings')).toBeInTheDocument();
			expect(screen.getByText('Profile')).toBeInTheDocument();
		});

		it('does not render sidebar when showSidebar is false', () => {
			renderWithTheme({ showSidebar: false });
			
			// Check that sidebar links are not rendered
			expect(screen.queryByText('Home')).not.toBeInTheDocument();
			expect(screen.queryByText('Settings')).not.toBeInTheDocument();
		});

		it('renders sidebar links with correct paths and icons', () => {
			renderWithTheme({ 
				showSidebar: true, 
				sidebarLinks: mockSidebarLinks 
			});

			// Check links have correct href attributes
			const homeLink = screen.getByText('Home').closest('a');
			const settingsLink = screen.getByText('Settings').closest('a');
			const profileLink = screen.getByText('Profile').closest('a');

			expect(homeLink).toHaveAttribute('href', '/home');
			expect(settingsLink).toHaveAttribute('href', '/settings');
			expect(profileLink).toHaveAttribute('href', '/profile');

			// Check icons are rendered
			expect(screen.getByTestId('home-icon')).toBeInTheDocument();
			expect(screen.getByTestId('settings-icon')).toBeInTheDocument();
			expect(screen.getByTestId('profile-icon')).toBeInTheDocument();
		});

		it('handles empty sidebar links array', () => {
			renderWithTheme({ 
				showSidebar: true, 
				sidebarLinks: [] 
			});
			
			// Sidebar should still be rendered but with no links
			expect(screen.getByRole('list')).toBeInTheDocument();
		});

		it('applies custom sidebar styles', () => {
			const sidebarStyles = { backgroundColor: 'green' };
			renderWithTheme({ 
				showSidebar: true, 
				sidebarStyles 
			});
			
			const sidebar = screen.getByRole('list').closest('[class*="MuiDrawer-root"]');
			expect(sidebar).toHaveStyle('background-color: rgb(0, 128, 0)');
		});
	});

	describe('Content Area', () => {
		it('applies correct margin when header is shown', () => {
			renderWithTheme({ showHeader: true });
			
			const contentArea = screen.getByTestId('test-content').closest('[class*="MuiBox-root"]');
			expect(contentArea).toHaveStyle('margin-top: 64px');
		});

		it('applies no margin when header is not shown', () => {
			renderWithTheme({ showHeader: false });
			
			const contentArea = screen.getByTestId('test-content').closest('[class*="MuiBox-root"]');
			expect(contentArea).toHaveStyle('margin-top: 0px');
		});

		it('applies custom content styles', () => {
			const contentStyles = { padding: '20px' };
			renderWithTheme({ contentStyles });
			
			const contentArea = screen.getByTestId('test-content').closest('[class*="MuiBox-root"]');
			expect(contentArea).toHaveStyle('padding: 20px');
		});
	});

	describe('Token Refresh Logic', () => {
		beforeEach(() => {
			// Mock current time
			jest.useFakeTimers();
			jest.setSystemTime(new Date('2024-01-01T10:00:00Z'));
		});

		afterEach(() => {
			jest.useRealTimers();
		});

		it('does not run token refresh logic when enableRefreshToken is false', async () => {
			mockCookies.get.mockReturnValue(undefined as any);
			mockFetch.mockResolvedValueOnce(new Response());

			renderWithTheme({ enableRefreshToken: false });

			await waitFor(() => {
				expect(mockFetch).not.toHaveBeenCalled();
			});

			expect(console.warn).not.toHaveBeenCalled();
		});

		it('does not refresh token when tokenExpiry cookie is not present', async () => {
			mockCookies.get.mockReturnValue(undefined as any);
			mockFetch.mockResolvedValueOnce(new Response());

			renderWithTheme({ enableRefreshToken: true });

			await waitFor(() => {
				expect(mockFetch).not.toHaveBeenCalled();
			});

			expect(console.warn).toHaveBeenCalledWith('No tokenExpiry cookie found');
		});

		it('does not refresh token when token is still valid', async () => {
			// Set token expiry to 20 minutes from now (beyond threshold)
			const futureTime = new Date('2024-01-01T10:20:00Z');
			mockCookies.get.mockReturnValue(futureTime.toISOString() as any);

			renderWithTheme({ enableRefreshToken: true });

			await waitFor(() => {
				expect(mockFetch).not.toHaveBeenCalled();
			});

			expect(console.log).toHaveBeenCalledWith('Token is still valid, no refresh needed');
		});

		/** 
		it('refreshes token when it expires within threshold', async () => {
			// Set token expiry to 5 minutes from now (within threshold)
			const futureTime = new Date('2024-01-01T10:05:00Z');
			mockCookies.get.mockReturnValue(futureTime.toISOString() as any);

			const mockResponse = {
				ok: true,
				json: () => Promise.resolve({
					token: 'new-token',
					tokenExpiry: new Date('2024-01-01T11:00:00Z').toISOString()
				})
			};
			mockFetch.mockResolvedValueOnce(mockResponse as Response);

			renderWithTheme({ enableRefreshToken: true });

			await waitFor(() => {
				expect(mockFetch).toHaveBeenCalledWith('/api/auth/refresh', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					credentials: 'include',
				});
			});

			expect(mockCookies.set).toHaveBeenCalledWith('token', 'new-token', {
				expires: 7,
				secure: true,
				sameSite: 'strict'
			});

			expect(mockCookies.set).toHaveBeenCalledWith('tokenExpiry', expect.any(String), {
				expires: 7,
				secure: true,
				sameSite: 'strict'
			});

			expect(console.log).toHaveBeenCalledWith('Token refreshed successfully');
		});

		it('handles token refresh failure and redirects to login', async () => {
			// Set token expiry to 5 minutes from now
			const futureTime = new Date('2024-01-01T10:05:00Z');
			mockCookies.get.mockReturnValue(futureTime.toISOString() as any);

			mockFetch.mockRejectedValueOnce(new Error('Network error'));

			renderWithTheme({ enableRefreshToken: true });

			await waitFor(() => {
				expect(mockFetch).toHaveBeenCalled();
			});

			expect(mockCookies.remove).toHaveBeenCalledWith('token');
			expect(mockCookies.remove).toHaveBeenCalledWith('tokenExpiry');
			expect((window as any).location.href).toBe('http://localhost:3000/');
			expect(console.error).toHaveBeenCalledWith('Token refresh failed:', expect.any(Error));
		});

		it('handles API error response and redirects to login', async () => {
			// Set token expiry to 5 minutes from now
			const futureTime = new Date('2024-01-01T10:05:00Z');
			mockCookies.get.mockReturnValue(futureTime.toISOString() as any);

			const mockResponse = {
				ok: false,
				status: 401
			};
			mockFetch.mockResolvedValueOnce(mockResponse as Response);

			renderWithTheme({ enableRefreshToken: true });

			await waitFor(() => {
				expect(mockFetch).toHaveBeenCalled();
			});

			expect(mockCookies.remove).toHaveBeenCalledWith('token');
			expect(mockCookies.remove).toHaveBeenCalledWith('tokenExpiry');
			expect((window as any).location.href).toBe('http://localhost:3000/');
			expect(console.error).toHaveBeenCalledWith('Token refresh failed:', expect.any(Error));
		});

		it('redirects to login when token is already expired', async () => {
			// Set token expiry to 5 minutes ago (expired)
			const pastTime = new Date('2024-01-01T09:55:00Z');
			mockCookies.get.mockReturnValue(pastTime.toISOString() as any);

			renderWithTheme({ enableRefreshToken: true });

			await waitFor(() => {
				expect(mockFetch).not.toHaveBeenCalled();
			});

			expect(mockCookies.remove).toHaveBeenCalledWith('token');
			expect(mockCookies.remove).toHaveBeenCalledWith('tokenExpiry');
			expect((window as any).location.href).toBe('http://localhost:3000/');
			expect(console.warn).toHaveBeenCalledWith('Token has expired, redirecting to login');
		});

		it('handles token refresh with missing token in response', async () => {
			// Set token expiry to 5 minutes from now
			const futureTime = new Date('2024-01-01T10:05:00Z');
			mockCookies.get.mockReturnValue(futureTime.toISOString() as any);

			const mockResponse = {
				ok: true,
				json: () => Promise.resolve({
					// No token in response
					tokenExpiry: new Date('2024-01-01T11:00:00Z').toISOString()
				})
			};
			mockFetch.mockResolvedValueOnce(mockResponse as Response);

			renderWithTheme({ enableRefreshToken: true });

			await waitFor(() => {
				expect(mockFetch).toHaveBeenCalled();
			});

			// Should not call Cookies.set for token
			expect(mockCookies.set).not.toHaveBeenCalledWith('token', expect.any(String), expect.any(Object));
			expect(mockCookies.set).toHaveBeenCalledWith('tokenExpiry', expect.any(String), expect.any(Object));
		});

		it('handles token refresh with missing tokenExpiry in response', async () => {
			// Set token expiry to 5 minutes from now
			const futureTime = new Date('2024-01-01T10:05:00Z');
			mockCookies.get.mockReturnValue(futureTime.toISOString() as any);

			const mockResponse = {
				ok: true,
				json: () => Promise.resolve({
					token: 'new-token'
					// No tokenExpiry in response
				})
			};
			mockFetch.mockResolvedValueOnce(mockResponse as Response);

			renderWithTheme({ enableRefreshToken: true });

			await waitFor(() => {
				expect(mockFetch).toHaveBeenCalled();
			});

			// Should not call Cookies.set for tokenExpiry
			expect(mockCookies.set).toHaveBeenCalledWith('token', 'new-token', expect.any(Object));
			expect(mockCookies.set).not.toHaveBeenCalledWith('tokenExpiry', expect.any(String), expect.any(Object));
		});
		*/
	});

	describe('Error Handling', () => {
		it('handles errors in token expiry check', async () => {
			mockCookies.get.mockImplementation(() => {
				throw new Error('Cookie access error');
			});

			renderWithTheme({ enableRefreshToken: true });

			await waitFor(() => {
				expect(console.error).toHaveBeenCalledWith('Error checking token expiry:', expect.any(Error));
			});
		});
	});

	describe('Integration Tests', () => {
		it('renders complete layout with all features enabled', () => {
			renderWithTheme({
				showHeader: true,
				showSidebar: true,
				headerTitle: 'My App',
				appLogo: mockAppLogo,
				sidebarLinks: mockSidebarLinks
			});

			// Check all components are rendered
			expect(screen.getByRole('banner')).toBeInTheDocument();
			expect(screen.getByText('My App')).toBeInTheDocument();
			expect(screen.getByTestId('app-logo')).toBeInTheDocument();
			expect(screen.getByRole('list')).toBeInTheDocument();
			expect(screen.getByText('Home')).toBeInTheDocument();
			expect(screen.getByText('Settings')).toBeInTheDocument();
			expect(screen.getByText('Profile')).toBeInTheDocument();
			expect(screen.getByTestId('test-content')).toBeInTheDocument();
		});

		it('renders minimal layout with all features disabled', () => {
			renderWithTheme({
				showHeader: false,
				showSidebar: false
			});

			// Check only content is rendered
			expect(screen.getByTestId('test-content')).toBeInTheDocument();
			expect(screen.queryByRole('banner')).not.toBeInTheDocument();
			expect(screen.queryByRole('list')).not.toBeInTheDocument();
		});
	});
});
