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
}

// Constants for token refresh logic
const TOKEN_REFRESH_THRESHOLD = 10 * 60 * 1000; // 10 minutes in milliseconds
const REFRESH_ENDPOINT = '/api/auth/refresh';
const LOGIN_REDIRECT_URL = '/login';

/**
 * NovaWrapper component provides a consistent layout structure for authenticated pages
 * and handles proactive token refresh to prevent session expiry during active use.
 */
const NovaWrapper: React.FC<NovaWrapperProps> = ({ children, sidebarLinks = [] }) => {
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
		<Box sx={{ display: 'flex', height: '100vh' }}>
			<CssBaseline />
			
			{/* Header */}
			<AppBar 
				position="fixed" 
				sx={{ 
					zIndex: theme.zIndex.drawer + 1,
					width: isMobile ? '100%' : `calc(100% - 240px)`,
					ml: isMobile ? 0 : '240px'
				}}
			>
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Nova Application
					</Typography>
				</Toolbar>
			</AppBar>

			{/* Sidebar */}
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
				}}
				open={!isMobile}
			>
				<Toolbar />
				<Box sx={{ overflow: 'auto', p: 2 }}>
					<Typography variant="h6" gutterBottom>
						Navigation
					</Typography>
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

			{/* Main Content Area */}
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					p: 3,
					width: isMobile ? '100%' : `calc(100% - 240px)`,
					mt: '64px', // Account for AppBar height
					overflow: 'auto',
				}}
			>
				{children}
			</Box>
		</Box>
	);
};

export default NovaWrapper;
