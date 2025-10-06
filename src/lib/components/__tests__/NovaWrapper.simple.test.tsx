import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Home, Settings, Person } from '@mui/icons-material';
import NovaWrapper, { type NovaWrapperProps, type SidebarLink } from '../NovaWrapper';

// Mock js-cookie
jest.mock('js-cookie', () => ({
	get: jest.fn(),
	set: jest.fn(),
	remove: jest.fn()
}));

// Mock fetch
global.fetch = jest.fn();

// Mock window.location to avoid navigation errors
Object.defineProperty(window, 'location', {
	value: {
		href: 'http://localhost:3000',
		assign: jest.fn(),
		replace: jest.fn(),
		reload: jest.fn()
	},
	writable: true
});

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

describe('NovaWrapper - Basic Functionality', () => {
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
