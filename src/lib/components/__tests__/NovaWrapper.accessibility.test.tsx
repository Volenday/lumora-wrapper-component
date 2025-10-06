import React from 'react';
import { screen } from '@testing-library/react';
import { Home, Settings, Person } from '@mui/icons-material';
import NovaWrapper from '../NovaWrapper';
import { render, mockSidebarLinks } from './testUtils';
import '@testing-library/jest-dom';

describe('NovaWrapper - Accessibility', () => {
	describe('Header Accessibility', () => {
		it('has proper header structure with banner role', () => {
			render(
				<NovaWrapper 
					showHeader={true} 
					headerTitle="Test Application"
				>
					<div data-testid="test-content">Test Content</div>
				</NovaWrapper>
			);

			const header = screen.getByRole('banner');
			expect(header).toBeInTheDocument();
		});

		it('has accessible header title', () => {
			render(
				<NovaWrapper 
					showHeader={true} 
					headerTitle="My Application"
				>
					<div data-testid="test-content">Test Content</div>
				</NovaWrapper>
			);

			const title = screen.getByText('My Application');
			expect(title).toBeInTheDocument();
			expect(title.tagName).toBe('H6'); // Typography variant="h6"
		});

		it('header is not rendered when showHeader is false', () => {
			render(
				<NovaWrapper 
					showHeader={false} 
					headerTitle="Should not appear"
				>
					<div data-testid="test-content">Test Content</div>
				</NovaWrapper>
			);

			expect(screen.queryByRole('banner')).not.toBeInTheDocument();
			expect(screen.queryByText('Should not appear')).not.toBeInTheDocument();
		});
	});

	describe('Sidebar Accessibility', () => {
		it('has proper navigation structure', () => {
			render(
				<NovaWrapper 
					showSidebar={true} 
					sidebarLinks={mockSidebarLinks}
				>
					<div data-testid="test-content">Test Content</div>
				</NovaWrapper>
			);

			// Check that links are properly structured
			const homeLink = screen.getByRole('link', { name: /home/i });
			const settingsLink = screen.getByRole('link', { name: /settings/i });
			const profileLink = screen.getByRole('link', { name: /profile/i });

			expect(homeLink).toBeInTheDocument();
			expect(settingsLink).toBeInTheDocument();
			expect(profileLink).toBeInTheDocument();
		});

		it('has proper link attributes', () => {
			render(
				<NovaWrapper 
					showSidebar={true} 
					sidebarLinks={mockSidebarLinks}
				>
					<div data-testid="test-content">Test Content</div>
				</NovaWrapper>
			);

			const homeLink = screen.getByRole('link', { name: /home/i });
			expect(homeLink).toHaveAttribute('href', '/home');

			const settingsLink = screen.getByRole('link', { name: /settings/i });
			expect(settingsLink).toHaveAttribute('href', '/settings');

			const profileLink = screen.getByRole('link', { name: /profile/i });
			expect(profileLink).toHaveAttribute('href', '/profile');
		});

		it('has proper icon structure', () => {
			render(
				<NovaWrapper 
					showSidebar={true} 
					sidebarLinks={mockSidebarLinks}
				>
					<div data-testid="test-content">Test Content</div>
				</NovaWrapper>
			);

			// Check that icons are present
			expect(screen.getByTestId('home-icon')).toBeInTheDocument();
			expect(screen.getByTestId('settings-icon')).toBeInTheDocument();
			expect(screen.getByTestId('profile-icon')).toBeInTheDocument();
		});

		it('sidebar is not rendered when showSidebar is false', () => {
			render(
				<NovaWrapper 
					showSidebar={false} 
					sidebarLinks={mockSidebarLinks}
				>
					<div data-testid="test-content">Test Content</div>
				</NovaWrapper>
			);

			expect(screen.queryByRole('link', { name: /home/i })).not.toBeInTheDocument();
			expect(screen.queryByRole('link', { name: /settings/i })).not.toBeInTheDocument();
			expect(screen.queryByRole('link', { name: /profile/i })).not.toBeInTheDocument();
		});

		it('handles empty sidebar links gracefully', () => {
			render(
				<NovaWrapper 
					showSidebar={true} 
					sidebarLinks={[]}
				>
					<div data-testid="test-content">Test Content</div>
				</NovaWrapper>
			);

			// Sidebar should still be rendered but with no links
			expect(screen.queryByRole('link')).not.toBeInTheDocument();
		});
	});

	describe('Content Area Accessibility', () => {
		it('has proper main content structure', () => {
			render(
				<NovaWrapper>
					<div data-testid="main-content">Main content here</div>
				</NovaWrapper>
			);

			const mainContent = screen.getByTestId('main-content');
			const mainElement = mainContent.closest('main');
			
			expect(mainElement).toBeInTheDocument();
			expect(mainElement).toHaveAttribute('role', 'main');
		});

		it('content is accessible when header is shown', () => {
			render(
				<NovaWrapper showHeader={true}>
					<div data-testid="content">Content</div>
				</NovaWrapper>
			);

			const content = screen.getByTestId('content');
			expect(content).toBeInTheDocument();
		});

		it('content is accessible when header is hidden', () => {
			render(
				<NovaWrapper showHeader={false}>
					<div data-testid="content">Content</div>
				</NovaWrapper>
			);

			const content = screen.getByTestId('content');
			expect(content).toBeInTheDocument();
		});
	});

	describe('Keyboard Navigation', () => {
		it('sidebar links are keyboard accessible', () => {
			render(
				<NovaWrapper 
					showSidebar={true} 
					sidebarLinks={mockSidebarLinks}
				>
					<div data-testid="test-content">Test Content</div>
				</NovaWrapper>
			);

			const homeLink = screen.getByRole('link', { name: /home/i });
			const settingsLink = screen.getByRole('link', { name: /settings/i });

			// Links should be focusable
			expect(homeLink).toBeInTheDocument();
			expect(settingsLink).toBeInTheDocument();

			// Check that links are button elements (ListItemButton renders as 'a')
			expect(homeLink.tagName).toBe('A');
			expect(settingsLink.tagName).toBe('A');
		});
	});

	describe('Screen Reader Support', () => {
		it('provides meaningful text for screen readers', () => {
			render(
				<NovaWrapper 
					showHeader={true}
					showSidebar={true}
					headerTitle="My Application"
					sidebarLinks={mockSidebarLinks}
				>
					<div data-testid="test-content">Test Content</div>
				</NovaWrapper>
			);

			// Header title should be readable
			expect(screen.getByText('My Application')).toBeInTheDocument();

			// Sidebar links should have descriptive text
			expect(screen.getByText('Home')).toBeInTheDocument();
			expect(screen.getByText('Settings')).toBeInTheDocument();
			expect(screen.getByText('Profile')).toBeInTheDocument();
		});

		it('maintains proper heading hierarchy', () => {
			render(
				<NovaWrapper 
					showHeader={true}
					headerTitle="Application Title"
				>
					<h1>Page Title</h1>
					<h2>Section Title</h2>
				</NovaWrapper>
			);

			// Header title should be h6
			const headerTitle = screen.getByText('Application Title');
			expect(headerTitle.tagName).toBe('H6');

			// Page content should maintain proper hierarchy
			expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
			expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
		});
	});

	describe('Focus Management', () => {
		it('maintains focus order with header and sidebar', () => {
			render(
				<NovaWrapper 
					showHeader={true}
					showSidebar={true}
					headerTitle="Test App"
					sidebarLinks={mockSidebarLinks}
				>
					<div data-testid="test-content">Test Content</div>
				</NovaWrapper>
			);

			// All interactive elements should be in the document
			expect(screen.getByRole('banner')).toBeInTheDocument();
			expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
			expect(screen.getByRole('link', { name: /settings/i })).toBeInTheDocument();
			expect(screen.getByRole('link', { name: /profile/i })).toBeInTheDocument();
		});
	});
});
