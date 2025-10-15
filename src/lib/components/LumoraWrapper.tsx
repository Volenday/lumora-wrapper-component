import type { SxProps, Theme } from '@mui/material';
import {
	Box,
	CssBaseline,
	Drawer,
	useMediaQuery,
	useTheme
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { disableTokenRefresh, enableTokenRefresh } from '../apiClient';
import { validateAndRefreshTokens } from '../tokenValidator';
import AppNavbar from './AppNavbar';
import CardAlert from './CardAlert';
import MenuContent from './MenuContent';
import MobileSidebar from './MobileSidebar';
import UserProfile from './UserProfile';

// Type for sidebar navigation links
export type SidebarLink = {
	text: string;
	path: string;
	icon: React.ReactNode;
};

// Interface for LumoraWrapper props
export interface LumoraWrapperProps {
	children: React.ReactNode;
	sidebarLinks?: SidebarLink[];
	secondarySidebarLinks?: SidebarLink[];
	// Header props
	appName?: string;
	pageName?: string;
	showHeader?: boolean;
	showSidebar?: boolean;
	enableRefreshToken?: boolean;
	activePath?: string;
	onLinkClick?: (path: string) => void;
	// User profile props
	userName?: string;
	userEmail?: string;
	userAvatar?: string;
	onLogout?: () => void;
	onProfileClick?: () => void;
	onAccountClick?: () => void;
	onSettingsClick?: () => void;
	// Notification props
	showNotifications?: boolean;
	notificationCount?: number;
	// Alert card props
	alertProps?: {
		title?: string;
		message?: string;
		buttonText?: string;
		onButtonClick?: () => void;
		show?: boolean;
	};
	// Styling props
	style?: SxProps<Theme>;
	headerStyles?: SxProps<Theme>;
	sidebarStyles?: SxProps<Theme>;
	contentStyles?: SxProps<Theme>;
}

/**
 * LumoraWrapper component provides a consistent layout structure for authenticated pages
 * and handles proactive token refresh to prevent session expiry during active use.
 */
const LumoraWrapper: React.FC<LumoraWrapperProps> = ({
	children,
	sidebarLinks = [],
	secondarySidebarLinks = [],
	appName = 'Dashboard',
	pageName = 'Home',
	showHeader = true,
	showSidebar = true,
	enableRefreshToken = false,
	activePath,
	onLinkClick,
	userName,
	userEmail,
	userAvatar,
	onLogout,
	onProfileClick,
	onAccountClick,
	onSettingsClick,
	showNotifications = false,
	notificationCount = 0,
	alertProps,
	style,
	headerStyles,
	sidebarStyles,
	contentStyles
}) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));
	const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

	// Handle mobile sidebar toggle for responsive design
	const handleMobileSidebarToggle = () => {
		setMobileSidebarOpen(!mobileSidebarOpen);
	};

	// Handle mobile sidebar close
	const handleMobileSidebarClose = () => {
		setMobileSidebarOpen(false);
	};

	// Token refresh interceptor setup
	useEffect(() => {
		if (enableRefreshToken) {
			// Enable the token refresh interceptor when the component mounts
			enableTokenRefresh();
		}

		// Cleanup function to disable token refresh when component unmounts or prop changes
		return () => {
			disableTokenRefresh();
		};
	}, [enableRefreshToken]);

	// Initial token validation when component mounts and refresh is enabled
	useEffect(() => {
		if (!enableRefreshToken) {
			return;
		}

		// Validate tokens on mount only
		validateAndRefreshTokens();
	}, [enableRefreshToken]);

	return (
		<Box sx={{ display: 'flex', height: '100vh', ...style }}>
			<CssBaseline />

			{/* Header */}
			{showHeader && (
				<AppNavbar
					appName={appName}
					pageName={pageName}
					onMenuClick={
						isMobile && showSidebar
							? handleMobileSidebarToggle
							: undefined
					}
					showMenuButton={isMobile && showSidebar}
					headerStyles={headerStyles}
				/>
			)}

			{/* Desktop Sidebar */}
			{showSidebar && !isMobile && (
				<Drawer
					variant='permanent'
					sx={{
						width: 240,
						flexShrink: 0,
						zIndex: 2, // Higher z-index than app bar
						'& .MuiDrawer-paper': {
							width: 240,
							boxSizing: 'border-box',
							backgroundColor: 'background.paper',
							mt: 0 // Extend to top
						},
						...sidebarStyles
					}}
				>
					<Box
						sx={{
							display: 'flex',
							mt: 'calc(var(--template-frame-height, 0px) + 4px)',
							p: 1.5
						}}
					>
						{/* Optional: Add SelectContent component here if needed */}
					</Box>
					<Box
						sx={{
							overflow: 'auto',
							height: '100%',
							display: 'flex',
							flexDirection: 'column'
						}}
					>
						<MenuContent
							mainLinks={sidebarLinks}
							secondaryLinks={secondarySidebarLinks}
							activePath={activePath}
							onLinkClick={onLinkClick}
						/>
						{alertProps?.show && <CardAlert {...alertProps} />}
					</Box>
					<UserProfile
						userName={userName}
						userEmail={userEmail}
						userAvatar={userAvatar}
						onLogout={onLogout}
						onProfileClick={onProfileClick}
						onAccountClick={onAccountClick}
						onSettingsClick={onSettingsClick}
					/>
				</Drawer>
			)}

			{/* Mobile Sidebar */}
			{showSidebar && isMobile && (
				<MobileSidebar
					open={mobileSidebarOpen}
					onClose={handleMobileSidebarClose}
					mainLinks={sidebarLinks}
					secondaryLinks={secondarySidebarLinks}
					activePath={activePath}
					onLinkClick={onLinkClick}
					userName={userName}
					userEmail={userEmail}
					userAvatar={userAvatar}
					onLogout={onLogout}
					showNotifications={showNotifications}
					notificationCount={notificationCount}
					alertProps={alertProps}
				/>
			)}

			{/* Main Content Area */}
			<Box
				component='main'
				sx={{
					flexGrow: 1,
					p: 3,
					m: 1,
					width: isMobile
						? '100%'
						: showSidebar
							? `calc(100% - 240px)`
							: '100%',
					// mt: showHeader ? '80px' : 0, // Account for AppNavbar height only if header is shown
					// ml: isMobile ? 0 : showSidebar ? '240px' : 0, // Offset for sidebar on desktop
					overflow: 'auto',
					...contentStyles
				}}
			>
				{children}
			</Box>
		</Box>
	);
};

export default LumoraWrapper;
