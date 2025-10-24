import type { SxProps, Theme } from '@mui/material';
import {
	Box,
	CircularProgress,
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
import NavbarBreadcrumbs from './NavbarBreadcrumbs';

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
	onLogout: (error?: Error) => void;
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
	showNotifications = true,
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
	const [isCheckingSession, setIsCheckingSession] = useState(true);
	const [hasSession, setHasSession] = useState(false);

	// Handle mobile sidebar toggle for responsive design
	const handleMobileSidebarToggle = () => {
		setMobileSidebarOpen(!mobileSidebarOpen);
	};

	// Handle mobile sidebar close
	const handleMobileSidebarClose = () => {
		setMobileSidebarOpen(false);
	};

	// Session checking: validate that user has a refresh token before rendering
	useEffect(() => {
		const checkSession = () => {
			try {
				// Check if refresh token exists in localStorage
				const refreshToken = localStorage.getItem('lumoraRefreshToken');

				if (!refreshToken) {
					// No refresh token found, redirect to login
					console.log('No session found, redirecting to login');
					window.location.href = '/login';
					return;
				}

				// Session exists, mark as authenticated
				setHasSession(true);
			} catch (error) {
				console.error('Error checking session:', error);
				// On error, redirect to login for safety
				window.location.href = '/login';
			} finally {
				setIsCheckingSession(false);
			}
		};

		checkSession();
	}, []);

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

	// Show loading state while checking session
	if (isCheckingSession) {
		return (
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					minHeight: '100vh',
					backgroundColor: 'background.default'
				}}
			>
				<CircularProgress
					size={60}
					thickness={4}
					sx={{ color: '#01584f' }}
				/>
				<Box sx={{ mt: 2, color: 'text.secondary' }}>
					Checking session...
				</Box>
			</Box>
		);
	}

	// Don't render children if no session exists
	// (This state should not be reached as we redirect, but adding as safety)
	if (!hasSession) {
		return null;
	}

	return (
		<Box
			sx={{
				display: 'flex',
				height: '100vh',
				...style,
				overflow: 'auto'
			}}
		>
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
					userName={userName}
					userEmail={userEmail}
					userAvatar={userAvatar}
					onProfileClick={onProfileClick}
					onLogout={onLogout}
					showNotifications={showNotifications}
					notificationCount={notificationCount}
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
							backgroundColor: '#ffffff',
							borderRight: '1px solid #f4f4f2',
							mt: 0 // Extend to top
						},
						...sidebarStyles
					}}
				>
					<Box
						sx={{
							height: '60px',
							p: 3,
							display: 'flex',
							alignItems: 'center'
						}}
					>
						<NavbarBreadcrumbs
							appName={appName}
							pageName={pageName}
						/>
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
					{/* <UserProfile
						userName={userName}
						userEmail={userEmail}
						userAvatar={userAvatar}
						onLogout={onLogout}
						onProfileClick={onProfileClick}
						onAccountClick={onAccountClick}
						onSettingsClick={onSettingsClick}
					/> */}
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
					onProfileClick={onProfileClick}
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
					...contentStyles
				}}
			>
				{children}
			</Box>
		</Box>
	);
};

export default LumoraWrapper;
