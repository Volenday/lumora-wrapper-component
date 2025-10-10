# Token Refresh Testing Guide

This guide explains how to test the automatic token refresh functionality in the Lumora Wrapper component.

## Prerequisites

1. **Environment Setup**: Make sure you have a `.env` file with the required variables:

    ```env
    VITE_API_BASE_URL=https://dev.api.lumora.capital
    VITE_API_KEY=your_actual_api_key_here
    ```

2. **Valid Tokens**: You need valid `accessToken` and `refreshToken` from the Lumora API.

## Testing Methods

### 1. Manual Browser Testing (Recommended)

This is the easiest way to test the functionality:

1. **Start the development server**:

    ```bash
    npm run dev
    ```

2. **Open your browser** and navigate to the app

3. **Click "Show Token Refresh Test"** button to reveal the test component

4. **Set up test tokens**:
    - Click "Set Test Tokens" to set up test tokens in localStorage
    - Or manually set them in the browser console:
        ```javascript
        localStorage.setItem('accessToken', 'your-expired-token');
        localStorage.setItem('refreshToken', 'your-valid-refresh-token');
        ```

5. **Test the refresh flow**:
    - Click "Test API Call (Triggers Refresh)" to make a request that should trigger the refresh
    - Check the Network tab in DevTools to see the requests
    - Look for the sequence: 401 → refresh call → retry with new token

### 2. Browser Console Testing

Open the browser console and run these commands:

```javascript
// 1. Set up test tokens
localStorage.setItem('accessToken', 'expired-token-123');
localStorage.setItem('refreshToken', 'valid-refresh-token-456');

// 2. Import the apiClient (you'll need to expose it)
// This might require modifying the component to expose the apiClient

// 3. Make a request that should trigger refresh
apiClient
	.get('/some-protected-endpoint')
	.then(response => console.log('Success:', response))
	.catch(error => console.log('Error:', error));
```

### 3. Command Line Testing

Use the provided test script:

```bash
# Test configuration and API connectivity
node test-refresh.js

# Test with a real refresh token
node test-refresh.js your_refresh_token_here
```

### 4. Unit Testing

Run the test suite:

```bash
# Run all tests
npm test

# Run only refresh-related tests
npm test -- --testNamePattern="refresh"

# Run with coverage
npm test -- --coverage
```

## Expected Behavior

When testing the refresh token functionality, you should see this sequence:

### 1. Initial Request

- Request is made with the current access token
- Request includes `Authorization: Bearer <token>` header
- Request includes `X-API-Key` header

### 2. 401 Response

- API returns 401 Unauthorized
- Response interceptor detects the 401 error

### 3. Refresh Call

- New request is made to `/auth/refresh`
- Request body: `{ "refresh_token": "your_refresh_token" }`
- Request headers: `X-API-Key` and `Content-Type: application/json`

### 4. Token Update

- New access token is stored in localStorage
- Original request is retried with the new token

### 5. Success

- Original request succeeds with the new token
- User sees the expected response

## Debugging Tips

### 1. Check Console Logs

Add these to your `apiClient.ts` for debugging:

```typescript
// In request interceptor
console.log('Request interceptor - accessToken:', accessToken);

// In response interceptor
console.log('Response interceptor - error:', error.response?.status);
```

### 2. Check Network Tab

Look for these requests in the Network tab:

- Initial API call (should return 401)
- Refresh call to `/auth/refresh`
- Retry of original call (should succeed)

### 3. Check localStorage

Verify tokens are stored correctly:

```javascript
console.log('Access Token:', localStorage.getItem('accessToken'));
console.log('Refresh Token:', localStorage.getItem('refreshToken'));
```

### 4. Common Issues

**Issue**: Refresh token is not being called

- **Check**: Is `enableRefreshToken` prop set to `true`?
- **Check**: Are tokens present in localStorage?
- **Check**: Is the API returning 401 status?

**Issue**: Refresh call fails

- **Check**: Is the API key correct?
- **Check**: Is the refresh token valid?
- **Check**: Is the API endpoint correct?

**Issue**: Tokens are not being updated

- **Check**: Is localStorage accessible?
- **Check**: Is the refresh response format correct?

## Test Scenarios

### 1. Happy Path

- Valid tokens in localStorage
- API call returns 401
- Refresh succeeds
- Original request retries successfully

### 2. Invalid Refresh Token

- Valid access token, invalid refresh token
- API call returns 401
- Refresh fails
- User is redirected to login

### 3. No Tokens

- No tokens in localStorage
- API call returns 401
- No refresh attempt
- User is redirected to login

### 4. Network Error

- Valid tokens
- Network error during refresh
- User is redirected to login

## API Response Format

The refresh endpoint should return:

```json
{
	"success": true,
	"message": "Token refreshed successfully",
	"accessToken": "new_access_token",
	"user": {
		"id": "user_id",
		"email": "user@example.com",
		"name": "User Name",
		"role": "USER"
	}
}
```

## Troubleshooting

If tests are failing:

1. **Check environment variables** are set correctly
2. **Verify API key** is valid and has proper permissions
3. **Check network connectivity** to the API
4. **Verify token format** matches expected structure
5. **Check browser console** for error messages
6. **Review Network tab** for request/response details

## Production Testing

Before deploying to production:

1. Test with real production API endpoints
2. Test with real user tokens
3. Test error scenarios (network failures, invalid tokens)
4. Test performance under load
5. Verify security (tokens are not logged or exposed)

## Support

If you encounter issues:

1. Check this guide first
2. Review the console logs
3. Check the Network tab in DevTools
4. Verify your API configuration
5. Test with the provided test components
