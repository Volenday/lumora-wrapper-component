import React, { useState } from 'react';
import { Box, Button, Typography, Paper, Alert } from '@mui/material';
import apiClient from './lib/apiClient';

/**
 * Test component for manually testing the token refresh functionality
 * This component should be used in development/testing environments only
 */
const TestRefreshComponent: React.FC = () => {
	const [result, setResult] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);
	const [tokens, setTokens] = useState<{
		accessToken: string | null;
		refreshToken: string | null;
	}>({
		accessToken: null,
		refreshToken: null
	});

	// Load current tokens from localStorage
	const loadTokens = () => {
		const accessToken = localStorage.getItem('accessToken');
		const refreshToken = localStorage.getItem('refreshToken');
		setTokens({ accessToken, refreshToken });
	};

	// Set test tokens
	const setTestTokens = () => {
		localStorage.setItem('accessToken', 'expired-token-123');
		localStorage.setItem('refreshToken', 'valid-refresh-token-456');
		loadTokens();
		setResult('Test tokens set in localStorage');
	};

	// Clear tokens
	const clearTokens = () => {
		localStorage.removeItem('accessToken');
		localStorage.removeItem('refreshToken');
		loadTokens();
		setResult('Tokens cleared from localStorage');
	};

	// Test API call that should trigger refresh
	const testApiCall = async () => {
		setLoading(true);
		setResult('Making API call...');

		try {
			// This should trigger the refresh flow if the token is expired
			const response = await apiClient.get('/test-endpoint');
			setResult(`Success: ${JSON.stringify(response.data, null, 2)}`);
		} catch (error: any) {
			setResult(
				`Error: ${error.message}\n\nDetails: ${JSON.stringify(error.response?.data || {}, null, 2)}`
			);
		} finally {
			setLoading(false);
		}
	};

	// Test direct refresh call
	const testDirectRefresh = async () => {
		setLoading(true);
		setResult('Testing direct refresh...');

		try {
			const refreshToken = localStorage.getItem('refreshToken');
			if (!refreshToken) {
				setResult('Error: No refresh token found in localStorage');
				return;
			}

			const response = await apiClient.post('/auth/refresh', {
				refresh_token: refreshToken
			});

			setResult(
				`Refresh successful: ${JSON.stringify(response.data, null, 2)}`
			);

			// Update tokens display
			loadTokens();
		} catch (error: any) {
			setResult(
				`Refresh failed: ${error.message}\n\nDetails: ${JSON.stringify(error.response?.data || {}, null, 2)}`
			);
		} finally {
			setLoading(false);
		}
	};

	// Load tokens on component mount
	React.useEffect(() => {
		loadTokens();
	}, []);

	return (
		<Paper sx={{ p: 3, m: 2, maxWidth: 800 }}>
			<Typography variant='h5' gutterBottom>
				Token Refresh Test Component
			</Typography>

			<Alert severity='warning' sx={{ mb: 2 }}>
				This component is for testing purposes only. Remove it in
				production.
			</Alert>

			<Box sx={{ mb: 3 }}>
				<Typography variant='h6' gutterBottom>
					Current Tokens:
				</Typography>
				<Typography
					variant='body2'
					sx={{ fontFamily: 'monospace', mb: 1 }}
				>
					Access Token: {tokens.accessToken || 'None'}
				</Typography>
				<Typography variant='body2' sx={{ fontFamily: 'monospace' }}>
					Refresh Token: {tokens.refreshToken || 'None'}
				</Typography>
			</Box>

			<Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
				<Button
					variant='outlined'
					onClick={loadTokens}
					disabled={loading}
				>
					Load Tokens
				</Button>

				<Button
					variant='outlined'
					onClick={setTestTokens}
					disabled={loading}
				>
					Set Test Tokens
				</Button>

				<Button
					variant='outlined'
					onClick={clearTokens}
					disabled={loading}
				>
					Clear Tokens
				</Button>
			</Box>

			<Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
				<Button
					variant='contained'
					onClick={testApiCall}
					disabled={loading}
				>
					Test API Call (Triggers Refresh)
				</Button>

				<Button
					variant='contained'
					onClick={testDirectRefresh}
					disabled={loading}
				>
					Test Direct Refresh
				</Button>
			</Box>

			<Box>
				<Typography variant='h6' gutterBottom>
					Result:
				</Typography>
				<Paper
					variant='outlined'
					sx={{
						p: 2,
						backgroundColor: '#f5f5f5',
						minHeight: 100,
						overflow: 'auto'
					}}
				>
					<pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
						{loading ? 'Loading...' : result || 'No result yet'}
					</pre>
				</Paper>
			</Box>

			<Box sx={{ mt: 3 }}>
				<Typography variant='h6' gutterBottom>
					Instructions:
				</Typography>
				<ol>
					<li>Set your API key in the .env file</li>
					<li>Click "Set Test Tokens" to set up test tokens</li>
					<li>Click "Test API Call" to trigger the refresh flow</li>
					<li>
						Check the Network tab in DevTools to see the requests
					</li>
					<li>
						Use "Test Direct Refresh" to test the refresh endpoint
						directly
					</li>
				</ol>
			</Box>
		</Paper>
	);
};

export default TestRefreshComponent;
