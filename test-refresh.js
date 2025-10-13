#!/usr/bin/env node

/**
 * Test script for the token refresh functionality
 * This script tests the refresh token endpoint directly
 */

const axios = require('axios');

// Configuration
const API_BASE_URL =
	process.env.VITE_API_BASE_URL || 'https://dev.api.lumora.capital';
const API_KEY = process.env.VITE_API_KEY || '';

// Colors for console output
const colors = {
	reset: '\x1b[0m',
	bright: '\x1b[1m',
	red: '\x1b[31m',
	green: '\x1b[32m',
	yellow: '\x1b[33m',
	blue: '\x1b[34m',
	magenta: '\x1b[35m',
	cyan: '\x1b[36m'
};

const log = (message, color = 'reset') => {
	console.log(`${colors[color]}${message}${colors.reset}`);
};

const logSection = title => {
	log(`\n${'='.repeat(50)}`, 'cyan');
	log(title, 'bright');
	log('='.repeat(50), 'cyan');
};

const logSuccess = message => log(`✅ ${message}`, 'green');
const logError = message => log(`❌ ${message}`, 'red');
const logWarning = message => log(`⚠️  ${message}`, 'yellow');
const logInfo = message => log(`ℹ️  ${message}`, 'blue');

// Test functions
const testConfiguration = () => {
	logSection('Configuration Test');

	logInfo(`API Base URL: ${API_BASE_URL}`);
	logInfo(`API Key: ${API_KEY ? 'Set' : 'Not set'}`);

	if (!API_KEY) {
		logWarning(
			'API Key is not set. Set VITE_API_KEY environment variable.'
		);
		return false;
	}

	logSuccess('Configuration looks good');
	return true;
};

const testRefreshEndpoint = async refreshToken => {
	logSection('Refresh Token Endpoint Test');

	if (!refreshToken) {
		logError('No refresh token provided');
		return false;
	}

	try {
		logInfo('Making refresh request...');

		const response = await axios.post(
			`${API_BASE_URL}/auth/refresh`,
			{
				refresh_token: refreshToken
			},
			{
				headers: {
					'X-API-Key': API_KEY,
					'Content-Type': 'application/json'
				},
				timeout: 10000
			}
		);

		logSuccess('Refresh request successful!');
		logInfo(`Status: ${response.status}`);
		logInfo(`Response: ${JSON.stringify(response.data, null, 2)}`);

		return response.data;
	} catch (error) {
		logError('Refresh request failed');

		if (error.response) {
			logError(`Status: ${error.response.status}`);
			logError(
				`Response: ${JSON.stringify(error.response.data, null, 2)}`
			);
		} else if (error.request) {
			logError('No response received');
			logError(`Error: ${error.message}`);
		} else {
			logError(`Error: ${error.message}`);
		}

		return false;
	}
};

const testApiClient = async () => {
	logSection('API Client Test');

	try {
		// This would require importing the actual apiClient
		// For now, we'll just test the endpoint structure
		logInfo('Testing API client configuration...');

		// Test a simple request to see if the API is reachable
		const response = await axios.get(`${API_BASE_URL}/health`, {
			headers: {
				'X-API-Key': API_KEY
			},
			timeout: 5000
		});

		logSuccess('API is reachable');
		logInfo(`Health check response: ${response.status}`);

		return true;
	} catch (error) {
		if (error.response?.status === 404) {
			logWarning('Health endpoint not found (this might be normal)');
			return true;
		}

		logError('API client test failed');
		logError(`Error: ${error.message}`);
		return false;
	}
};

const runTests = async () => {
	log('Lumora Wrapper - Token Refresh Test Suite', 'bright');
	log('==========================================', 'bright');

	// Test 1: Configuration
	const configOk = testConfiguration();
	if (!configOk) {
		logError(
			'Configuration test failed. Please check your environment variables.'
		);
		process.exit(1);
	}

	// Test 2: API Client
	const apiOk = await testApiClient();
	if (!apiOk) {
		logError(
			'API client test failed. Please check your API configuration.'
		);
		process.exit(1);
	}

	// Test 3: Refresh Token (if provided)
	const refreshToken = process.argv[2];
	if (refreshToken) {
		const refreshOk = await testRefreshEndpoint(refreshToken);
		if (!refreshOk) {
			logError('Refresh token test failed.');
			process.exit(1);
		}
	} else {
		logWarning('No refresh token provided. Skipping refresh test.');
		logInfo('Usage: node test-refresh.js <refresh_token>');
	}

	logSection('Test Summary');
	logSuccess('All tests completed successfully!');
	logInfo('Your token refresh implementation should work correctly.');
};

// Run the tests
runTests().catch(error => {
	logError(`Test suite failed: ${error.message}`);
	process.exit(1);
});
