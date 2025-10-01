import React, { useEffect } from 'react';
import {
	AppBar,
	Box,
	Drawer,
	Toolbar,
	Typography,
	CssBaseline,
	useTheme,
	useMediaQuery,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText
} from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import Cookies from 'js-cookie';

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
	headerTitle?: string;
	appLogo?: React.ReactNode;
	showHeader?: boolean;
	showSidebar?: boolean;
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
	headerTitle,
	appLogo,
	showHeader = true,
	showSidebar = true,
	style,
	headerStyles,
	sidebarStyles,
	contentStyles
}) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

	// Token refresh logic
	useEffect(() => {
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
	}, []);

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
					</Toolbar>
				</AppBar>
			)}

			{/* Sidebar */}
			{showSidebar && (
				<Drawer
					variant={isMobile ? 'temporary' : 'permanent'}
					sx={{
						width: 240,
						flexShrink: 0,
						'& .MuiDrawer-paper': {
							width: 240,
							boxSizing: 'border-box',
							mt: isMobile ? 0 : '64px', // Account for AppBar height
						},
						...sidebarStyles
					}}
					open={!isMobile}
				>
					<Toolbar />
					<Box sx={{ overflow: 'auto', p: 2 }}>
						<List>
							{sidebarLinks.map((link, index) => (
								<ListItem key={index} disablePadding>
									<ListItemButton component="a" href={link.path}>
										<ListItemIcon>
											{link.icon}
										</ListItemIcon>
										<ListItemText primary={link.text} />
									</ListItemButton>
								</ListItem>
							))}
						</List>
					</Box>
				</Drawer>
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
