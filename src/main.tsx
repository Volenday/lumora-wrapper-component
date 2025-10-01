import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import './index.css'
import { NovaWrapper } from './lib'

// Create a default MUI theme
const theme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#1976d2',
		},
		secondary: {
			main: '#dc004e',
		},
	},
});

// Demo content component
const DemoContent = () => (
	<div>
		<h1>NovaWrapper Component Demo</h1>
		<p>This is a demonstration of the NovaWrapper component with:</p>
		<ul>
			<li>Consistent header and sidebar layout</li>
			<li>Responsive design (try resizing the window)</li>
			<li>Proactive token refresh logic</li>
			<li>MUI Material Design components</li>
		</ul>
		<p>
			<strong>Note:</strong> The token refresh logic will check for a 'tokenExpiry' cookie 
			and attempt to refresh the token if it expires within 10 minutes.
		</p>
		<div style={{ marginTop: '20px', padding: '16px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
			<h3>Testing Token Refresh:</h3>
			<p>To test the token refresh functionality, you can set a test cookie in your browser's developer console:</p>
			<code style={{ display: 'block', marginTop: '8px', padding: '8px', backgroundColor: '#e0e0e0' }}>
				document.cookie = "tokenExpiry=" + new Date(Date.now() + 5 * 60 * 1000).toISOString() + "; path=/"
			</code>
			<p style={{ marginTop: '8px', fontSize: '14px', color: '#666' }}>
				This sets a token expiry 5 minutes from now, which should trigger the refresh logic.
			</p>
		</div>
	</div>
);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<NovaWrapper>
				<DemoContent />
			</NovaWrapper>
		</ThemeProvider>
	</StrictMode>,
)
