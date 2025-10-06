import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import {
	Dashboard as DashboardIcon,
	Settings as SettingsIcon,
	Adb as AdbIcon,
	Analytics as AnalyticsIcon,
	People as PeopleIcon
} from '@mui/icons-material'
import './index.css'
import { NovaWrapper, type SidebarLink } from './lib'

// Create a default MUI theme with Joy UI-style CSS variables
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
	components: {
		// Override MuiCssBaseline to inject Joy UI CSS variables
		MuiCssBaseline: {
			styleOverrides: {
				':root': {
					// Joy UI Color Palette Variables
					'--joy-palette-primary-50': '#e3f2fd',
					'--joy-palette-primary-100': '#bbdefb',
					'--joy-palette-primary-200': '#90caf9',
					'--joy-palette-primary-300': '#64b5f6',
					'--joy-palette-primary-400': '#42a5f5',
					'--joy-palette-primary-500': '#2196f3',
					'--joy-palette-primary-600': '#1e88e5',
					'--joy-palette-primary-700': '#1976d2',
					'--joy-palette-primary-800': '#1565c0',
					'--joy-palette-primary-900': '#0d47a1',
					'--joy-palette-primary-950': '#0a3d91',
					
					'--joy-palette-neutral-50': '#fafafa',
					'--joy-palette-neutral-100': '#f5f5f5',
					'--joy-palette-neutral-200': '#eeeeee',
					'--joy-palette-neutral-300': '#e0e0e0',
					'--joy-palette-neutral-400': '#bdbdbd',
					'--joy-palette-neutral-500': '#9e9e9e',
					'--joy-palette-neutral-600': '#757575',
					'--joy-palette-neutral-700': '#616161',
					'--joy-palette-neutral-800': '#424242',
					'--joy-palette-neutral-900': '#212121',
					'--joy-palette-neutral-950': '#0f0f0f',
					
					'--joy-palette-danger-50': '#ffebee',
					'--joy-palette-danger-100': '#ffcdd2',
					'--joy-palette-danger-200': '#ef9a9a',
					'--joy-palette-danger-300': '#e57373',
					'--joy-palette-danger-400': '#ef5350',
					'--joy-palette-danger-500': '#f44336',
					'--joy-palette-danger-600': '#e53935',
					'--joy-palette-danger-700': '#d32f2f',
					'--joy-palette-danger-800': '#c62828',
					'--joy-palette-danger-900': '#b71c1c',
					'--joy-palette-danger-950': '#a01515',
					
					'--joy-palette-success-50': '#e8f5e8',
					'--joy-palette-success-100': '#c8e6c9',
					'--joy-palette-success-200': '#a5d6a7',
					'--joy-palette-success-300': '#81c784',
					'--joy-palette-success-400': '#66bb6a',
					'--joy-palette-success-500': '#4caf50',
					'--joy-palette-success-600': '#43a047',
					'--joy-palette-success-700': '#388e3c',
					'--joy-palette-success-800': '#2e7d32',
					'--joy-palette-success-900': '#1b5e20',
					'--joy-palette-success-950': '#0d4f12',
					
					'--joy-palette-warning-50': '#fff8e1',
					'--joy-palette-warning-100': '#ffecb3',
					'--joy-palette-warning-200': '#ffe082',
					'--joy-palette-warning-300': '#ffd54f',
					'--joy-palette-warning-400': '#ffca28',
					'--joy-palette-warning-500': '#ffc107',
					'--joy-palette-warning-600': '#ffb300',
					'--joy-palette-warning-700': '#ffa000',
					'--joy-palette-warning-800': '#ff8f00',
					'--joy-palette-warning-900': '#ff6f00',
					'--joy-palette-warning-950': '#e65100',
					
					// Joy UI Spacing Variables
					'--joy-spacing-xs': '4px',
					'--joy-spacing-sm': '8px',
					'--joy-spacing-md': '16px',
					'--joy-spacing-lg': '24px',
					'--joy-spacing-xl': '32px',
					'--joy-spacing-2xl': '48px',
					'--joy-spacing-3xl': '64px',
					
					// Joy UI Typography Variables
					'--joy-fontSize-xs': '0.75rem',
					'--joy-fontSize-sm': '0.875rem',
					'--joy-fontSize-md': '1rem',
					'--joy-fontSize-lg': '1.125rem',
					'--joy-fontSize-xl': '1.25rem',
					'--joy-fontSize-2xl': '1.5rem',
					'--joy-fontSize-3xl': '1.875rem',
					'--joy-fontSize-4xl': '2.25rem',
					
					// Joy UI Border Radius Variables
					'--joy-radius-xs': '2px',
					'--joy-radius-sm': '4px',
					'--joy-radius-md': '8px',
					'--joy-radius-lg': '12px',
					'--joy-radius-xl': '16px',
					'--joy-radius-2xl': '24px',
					'--joy-radius-full': '9999px',
					
					// Joy UI Shadow Variables
					'--joy-shadow-xs': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
					'--joy-shadow-sm': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
					'--joy-shadow-md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
					'--joy-shadow-lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
					'--joy-shadow-xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
					'--joy-shadow-2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
					
					// Joy UI Z-Index Variables
					'--joy-zIndex-focusVisible': '1000',
					'--joy-zIndex-tooltip': '1100',
					'--joy-zIndex-popup': '1200',
					'--joy-zIndex-modal': '1300',
					'--joy-zIndex-drawer': '1400',
					'--joy-zIndex-snackbar': '1500',
				},
			},
		},
	},
});

// Demo sidebar links
const demoLinks: SidebarLink[] = [
	{
		text: 'Dashboard',
		path: '/dashboard',
		icon: <DashboardIcon />
	},
	{
		text: 'Analytics',
		path: '/analytics',
		icon: <AnalyticsIcon />
	},
	{
		text: 'Users',
		path: '/users',
		icon: <PeopleIcon />
	},
	{
		text: 'Settings',
		path: '/settings',
		icon: <SettingsIcon />
	}
];

// Demo content component with Joy UI CSS variables
const DemoContent = () => (
	<div>
		<h1>NovaWrapper Component Demo</h1>
		<p>This is a demonstration of the NovaWrapper component with:</p>
		<ul>
			<li>Consistent header and sidebar layout</li>
			<li>Configurable navigation links with icons</li>
			<li>Customizable header title and logo</li>
			<li>Conditional rendering (hide header/sidebar)</li>
			<li>Custom styling for all layout elements</li>
			<li>Responsive design (try resizing the window)</li>
			<li>Proactive token refresh logic (configurable via enableRefreshToken prop)</li>
			<li>MUI Material Design components</li>
			<li>Joy UI-style CSS variables for customization</li>
		</ul>
		<p>
			<strong>Note:</strong> The token refresh logic (enabled via <code>enableRefreshToken={true}</code>) 
			will check for a 'tokenExpiry' cookie and attempt to refresh the token if it expires within 10 minutes.
		</p>
		
		{/* Demo showing customization features */}
		<div style={{ 
			marginTop: 'var(--joy-spacing-lg)', 
			padding: 'var(--joy-spacing-md)', 
			backgroundColor: 'var(--joy-palette-primary-50)', 
			borderRadius: 'var(--joy-radius-md)',
			boxShadow: 'var(--joy-shadow-sm)'
		}}>
			<h3 style={{ color: 'var(--joy-palette-primary-700)', fontSize: 'var(--joy-fontSize-lg)' }}>
				New Customization Features
			</h3>
			<p style={{ fontSize: 'var(--joy-fontSize-sm)', color: 'var(--joy-palette-primary-700)' }}>
				The NovaWrapper now supports extensive customization:
			</p>
			<ul style={{ fontSize: 'var(--joy-fontSize-sm)', color: 'var(--joy-palette-primary-600)' }}>
				<li><strong>headerTitle:</strong> Custom header title (currently "My Custom App")</li>
				<li><strong>appLogo:</strong> Custom logo component (currently Adb icon)</li>
				<li><strong>showHeader/showSidebar:</strong> Toggle visibility of layout elements</li>
				<li><strong>enableRefreshToken:</strong> Enable/disable token refresh logic (currently enabled)</li>
				<li><strong>style props:</strong> Custom styling for header, sidebar, content, and root container</li>
				<li><strong>headerStyles:</strong> Custom header styling (currently dark background)</li>
			</ul>
		</div>
		
		{/* Demo showing Joy UI CSS variables usage */}
		<div style={{ 
			marginTop: 'var(--joy-spacing-lg)', 
			padding: 'var(--joy-spacing-md)', 
			backgroundColor: 'var(--joy-palette-neutral-100)', 
			borderRadius: 'var(--joy-radius-md)',
			boxShadow: 'var(--joy-shadow-sm)'
		}}>
			<h3 style={{ color: 'var(--joy-palette-primary-700)', fontSize: 'var(--joy-fontSize-lg)' }}>
				Joy UI CSS Variables Demo
			</h3>
			<p style={{ fontSize: 'var(--joy-fontSize-sm)', color: 'var(--joy-palette-neutral-700)' }}>
				This box uses Joy UI CSS variables for styling:
			</p>
			<ul style={{ fontSize: 'var(--joy-fontSize-sm)', color: 'var(--joy-palette-neutral-600)' }}>
				<li>Spacing: <code>var(--joy-spacing-*)</code></li>
				<li>Colors: <code>var(--joy-palette-*)</code></li>
				<li>Border radius: <code>var(--joy-radius-*)</code></li>
				<li>Shadows: <code>var(--joy-shadow-*)</code></li>
				<li>Typography: <code>var(--joy-fontSize-*)</code></li>
			</ul>
		</div>
		
		<div style={{ 
			marginTop: 'var(--joy-spacing-lg)', 
			padding: 'var(--joy-spacing-md)', 
			backgroundColor: 'var(--joy-palette-warning-50)', 
			borderRadius: 'var(--joy-radius-sm)',
			border: `1px solid var(--joy-palette-warning-200)`
		}}>
			<h3 style={{ color: 'var(--joy-palette-warning-800)', fontSize: 'var(--joy-fontSize-md)' }}>
				Testing Token Refresh:
			</h3>
			<p style={{ fontSize: 'var(--joy-fontSize-sm)', color: 'var(--joy-palette-warning-700)' }}>
				To test the token refresh functionality, you can set a test cookie in your browser's developer console:
			</p>
			<code style={{ 
				display: 'block', 
				marginTop: 'var(--joy-spacing-sm)', 
				padding: 'var(--joy-spacing-sm)', 
				backgroundColor: 'var(--joy-palette-neutral-200)',
				borderRadius: 'var(--joy-radius-xs)',
				fontSize: 'var(--joy-fontSize-xs)'
			}}>
				document.cookie = "tokenExpiry=" + new Date(Date.now() + 5 * 60 * 1000).toISOString() + "; path=/"
			</code>
			<p style={{ 
				marginTop: 'var(--joy-spacing-sm)', 
				fontSize: 'var(--joy-fontSize-xs)', 
				color: 'var(--joy-palette-warning-600)' 
			}}>
				This sets a token expiry 5 minutes from now, which should trigger the refresh logic.
			</p>
		</div>
	</div>
);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<NovaWrapper 
				sidebarLinks={demoLinks}
				headerTitle="My Custom App"
				appLogo={<AdbIcon />}
				headerStyles={{ backgroundColor: '#333' }}
				enableRefreshToken={true}
				// Uncomment the lines below to test conditional rendering:
				// showHeader={false}  // Hide the header completely
				// showSidebar={false} // Hide the sidebar completely
				// enableRefreshToken={false} // Disable token refresh logic
			>
				<DemoContent />
			</NovaWrapper>
		</ThemeProvider>
	</StrictMode>,
)
