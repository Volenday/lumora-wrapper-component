import React from 'react';
import { screen } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import NovaWrapper from '../NovaWrapper';
import { render, mockSidebarLinks } from './testUtils';

// Mock useMediaQuery hook
jest.mock('@mui/material', () => ({
	...jest.requireActual('@mui/material'),
	useMediaQuery: jest.fn()
}));

const mockUseMediaQuery = useMediaQuery as jest.MockedFunction<typeof useMediaQuery>;

describe('NovaWrapper - Responsive Behavior', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('renders permanent drawer on desktop', () => {
		mockUseMediaQuery.mockReturnValue(false); // Not mobile

		render(
			<NovaWrapper 
				showSidebar={true} 
				sidebarLinks={mockSidebarLinks}
			/>
		);

		const drawer = screen.getByRole('presentation');
		expect(drawer).toHaveClass('MuiDrawer-paper');
	});

	it('renders temporary drawer on mobile', () => {
		mockUseMediaQuery.mockReturnValue(true); // Mobile

		render(
			<NovaWrapper 
				showSidebar={true} 
				sidebarLinks={mockSidebarLinks}
			/>
		);

		const drawer = screen.getByRole('presentation');
		expect(drawer).toHaveClass('MuiDrawer-paper');
	});

	it('adjusts content width for desktop with sidebar', () => {
		mockUseMediaQuery.mockReturnValue(false); // Not mobile

		render(
			<NovaWrapper 
				showSidebar={true} 
				sidebarLinks={mockSidebarLinks}
			/>
		);

		const contentArea = screen.getByTestId('test-content').closest('[class*="MuiBox-root"]');
		expect(contentArea).toHaveStyle('width: calc(100% - 240px)');
	});

	it('uses full width on mobile', () => {
		mockUseMediaQuery.mockReturnValue(true); // Mobile

		render(
			<NovaWrapper 
				showSidebar={true} 
				sidebarLinks={mockSidebarLinks}
			/>
		);

		const contentArea = screen.getByTestId('test-content').closest('[class*="MuiBox-root"]');
		expect(contentArea).toHaveStyle('width: 100%');
	});

	it('uses full width when sidebar is hidden', () => {
		mockUseMediaQuery.mockReturnValue(false); // Not mobile

		render(
			<NovaWrapper 
				showSidebar={false}
			/>
		);

		const contentArea = screen.getByTestId('test-content').closest('[class*="MuiBox-root"]');
		expect(contentArea).toHaveStyle('width: 100%');
	});

	it('adjusts drawer margin for mobile without header', () => {
		mockUseMediaQuery.mockReturnValue(true); // Mobile

		render(
			<NovaWrapper 
				showSidebar={true} 
				showHeader={false}
				sidebarLinks={mockSidebarLinks}
			/>
		);

		const drawer = screen.getByRole('presentation');
		expect(drawer).toHaveStyle('margin-top: 0px');
	});

	it('adjusts drawer margin for desktop with header', () => {
		mockUseMediaQuery.mockReturnValue(false); // Not mobile

		render(
			<NovaWrapper 
				showSidebar={true} 
				showHeader={true}
				sidebarLinks={mockSidebarLinks}
			/>
		);

		const drawer = screen.getByRole('presentation');
		expect(drawer).toHaveStyle('margin-top: 64px');
	});
});
