import React, { useEffect, useState } from 'react';
import {
	AppBar,
	Box,
	Drawer,
	Toolbar,
	Typography,
	CssBaseline,
	useTheme,
	useMediaQuery,
	IconButton,
	Badge
} from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import Cookies from 'js-cookie';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import MenuContent from './MenuContent';
import UserProfile from './UserProfile';
import CardAlert from './CardAlert';
import MobileSidebar from './MobileSidebar';

// Type for sidebar navigation links
export type SidebarLink = {
	text: string;
	path: string;
	icon: React.ReactNode;
};

// Interface for NovaWrapper props
export interface NovaWrapperProps {
	children: React.ReactNode;
	sidebarLinks?: SidebarLink[];
	secondarySidebarLinks?: SidebarLink[];
	headerTitle?: string;
	appLogo?: React.ReactNode;
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

// Constants for token refresh logic
const TOKEN_REFRESH_THRESHOLD = 10 * 60 * 1000; // 10 minutes in milliseconds
const REFRESH_ENDPOINT = '/api/auth/refresh';
const LOGIN_REDIRECT_URL = '/login';

/**
 * NovaWrapper component provides a consistent layout structure for authenticated pages
 * and handles proactive token refresh to prevent session expiry during active use.
 */
const NovaWrapper: React.FC<NovaWrapperProps> = ({ 
	children, 
	sidebarLinks = [],
	secondarySidebarLinks = [],
	headerTitle,
	appLogo,
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

	const handleMobileSidebarToggle = () => {
		setMobileSidebarOpen(!mobileSidebarOpen);
	};

	const handleMobileSidebarClose = () => {
		setMobileSidebarOpen(false);
	};

	// Token refresh logic
	useEffect(() => {
		// Only run token refresh logic if enableRefreshToken is true
		if (!enableRefreshToken) {
			return;
		}

		const checkAndRefreshToken = async () => {
			try {
				// Read token expiry from cookies
				const tokenExpiry = Cookies.get('tokenExpiry');
				
				if (!tokenExpiry) {
					console.warn('No tokenExpiry cookie found');
					return;
				}

				// Calculate time until expiry
				const currentTime = new Date();
				const expiryTime = new Date(tokenExpiry);
				const timeUntilExpiry = expiryTime.getTime() - currentTime.getTime();

				// Only refresh if token expires within 10 minutes and is not already expired
				if (timeUntilExpiry <= TOKEN_REFRESH_THRESHOLD && timeUntilExpiry > 0) {
					console.log('Token expires soon, refreshing...');
					
					try {
						// Make API call to refresh token
						const response = await fetch(REFRESH_ENDPOINT, {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
							},
							credentials: 'include', // Include cookies in the request
						});

						if (!response.ok) {
							throw new Error(`Refresh token API failed with status: ${response.status}`);
						}

						const data = await response.json();
						
						// Update cookies with new token and expiry
						if (data.token) {
							Cookies.set('token', data.token, { 
								expires: 7, // 7 days
								secure: true,
								sameSite: 'strict'
							});
						}
						
						if (data.tokenExpiry) {
							Cookies.set('tokenExpiry', data.tokenExpiry, { 
								expires: 7, // 7 days
								secure: true,
								sameSite: 'strict'
							});
						}

						console.log('Token refreshed successfully');
					} catch (error) {
						console.error('Token refresh failed:', error);
						
						// Clear cookies and redirect to login on failure
						Cookies.remove('token');
						Cookies.remove('tokenExpiry');
						window.location.href = LOGIN_REDIRECT_URL;
					}
				} else if (timeUntilExpiry <= 0) {
					// Token is already expired, redirect to login
					console.warn('Token has expired, redirecting to login');
					Cookies.remove('token');
					Cookies.remove('tokenExpiry');
					window.location.href = LOGIN_REDIRECT_URL;
				} else {
					console.log('Token is still valid, no refresh needed');
				}
			} catch (error) {
				console.error('Error checking token expiry:', error);
			}
		};

		// Run token check on component mount
		checkAndRefreshToken();
	}, [enableRefreshToken]);

	return (
		<Box sx={{ display: 'flex', height: '100vh', ...style }}>
			<CssBaseline />
			
			{/* Header */}
			{showHeader && (
				<AppBar 
					position="fixed" 
					sx={{ 
						zIndex: theme.zIndex.drawer + 1,
						width: '100%',
						...headerStyles
					}}
				>
					<Toolbar>
						{isMobile && showSidebar && (
							<IconButton
								color="inherit"
								aria-label="open drawer"
								edge="start"
								onClick={handleMobileSidebarToggle}
								sx={{ mr: 2 }}
							>
								<MenuIcon />
							</IconButton>
						)}
						{appLogo && (
							<Box sx={{ mr: 2 }}>
								{appLogo}
							</Box>
						)}
						{headerTitle && (
							<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
								{headerTitle}
							</Typography>
						)}
						{showNotifications && (
							<Badge
								color="error"
								variant="dot"
								invisible={notificationCount === 0}
								sx={{ '& .MuiBadge-badge': { right: 2, top: 2 } }}
							>
								<IconButton color="inherit">
									<NotificationsRoundedIcon />
								</IconButton>
							</Badge>
						)}
					</Toolbar>
				</AppBar>
			)}

			{/* Desktop Sidebar */}
			{showSidebar && !isMobile && (
				<Drawer
					variant="permanent"
					sx={{
						width: 240,
						flexShrink: 0,
						'& .MuiDrawer-paper': {
							width: 240,
							boxSizing: 'border-box',
							backgroundColor: 'background.paper',
							mt: showHeader ? '64px' : 0,
						},
						...sidebarStyles
					}}
				>
					<Box
						sx={{
							display: 'flex',
							mt: 'calc(var(--template-frame-height, 0px) + 4px)',
							p: 1.5,
						}}
					>
						{/* Optional: Add SelectContent component here if needed */}
					</Box>
					<Box
						sx={{
							overflow: 'auto',
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
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
				component="main"
				sx={{
					flexGrow: 1,
					p: 3,
					width: isMobile ? '100%' : showSidebar ? `calc(100% - 240px)` : '100%',
					mt: showHeader ? '64px' : 0, // Account for AppBar height only if header is shown
					overflow: 'auto',
					...contentStyles
				}}
			>
				{children}
			</Box>
		</Box>
	);
};

export default NovaWrapper;
