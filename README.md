# Lumora Wrapper Component

A flexible and customizable React wrapper component built with Material-UI that provides a consistent layout structure for authenticated pages. The component includes a header, sidebar navigation, and main content area, along with built-in automatic token refresh logic to prevent unexpected session logouts.

## Installation

Since this is a private package hosted on GitHub Packages, you must first configure your `.npmrc` file to authenticate with GitHub Packages.

Create or update your `.npmrc` file in your project root with the following content:

```
@volenday:registry=https://npm.pkg.github.com
```

Then install the package using npm:

```bash
npm install @volenday/lumora-wrapper-component
```

## Usage

Import and use the LumoraWrapper component to wrap your page content:

```tsx
import React from 'react';
import { LumoraWrapper } from '@volenday/lumora-wrapper-component';
import { Home, Settings, Dashboard } from '@mui/icons-material';

const App = () => {
	const sidebarLinks = [
		{ text: 'Home', path: '/', icon: <Home /> },
		{ text: 'Dashboard', path: '/dashboard', icon: <Dashboard /> },
		{ text: 'Settings', path: '/settings', icon: <Settings /> }
	];

	return (
		<LumoraWrapper
			headerTitle='My Application'
			sidebarLinks={sidebarLinks}
			appLogo={<img src='/logo.png' alt='Logo' />}
		>
			<div>
				<h1>Welcome to your application</h1>
				<p>Your page content goes here...</p>
			</div>
		</LumoraWrapper>
	);
};

export default App;
```

## Props API

### Core Props

| Prop                    | Type              | Default Value | Description                                     |
| ----------------------- | ----------------- | ------------- | ----------------------------------------------- |
| `children`              | `React.ReactNode` | -             | The main content to be displayed in the wrapper |
| `sidebarLinks`          | `SidebarLink[]`   | `[]`          | Array of navigation links for the sidebar       |
| `secondarySidebarLinks` | `SidebarLink[]`   | `[]`          | Array of secondary navigation links             |

### Header Props

| Prop         | Type      | Default Value | Description                          |
| ------------ | --------- | ------------- | ------------------------------------ |
| `appName`    | `string`  | `'Dashboard'` | Application name displayed in header |
| `pageName`   | `string`  | `'Home'`      | Current page name in breadcrumbs     |
| `showHeader` | `boolean` | `true`        | Whether to display the header bar    |

### Sidebar Props

| Prop          | Type      | Default Value | Description                      |
| ------------- | --------- | ------------- | -------------------------------- |
| `showSidebar` | `boolean` | `true`        | Whether to display the sidebar   |
| `activePath`  | `string`  | -             | Currently active navigation path |

### User Profile Props

| Prop              | Type       | Default Value | Description                       |
| ----------------- | ---------- | ------------- | --------------------------------- |
| `userName`        | `string`   | -             | User's display name               |
| `userEmail`       | `string`   | -             | User's email address              |
| `userAvatar`      | `string`   | -             | URL to user's avatar image        |
| `onLogout`        | `function` | -             | Callback when logout is clicked   |
| `onProfileClick`  | `function` | -             | Callback when profile is clicked  |
| `onAccountClick`  | `function` | -             | Callback when account is clicked  |
| `onSettingsClick` | `function` | -             | Callback when settings is clicked |

### Notification Props

| Prop                | Type      | Default Value | Description                        |
| ------------------- | --------- | ------------- | ---------------------------------- |
| `showNotifications` | `boolean` | `false`       | Whether to show notification badge |
| `notificationCount` | `number`  | `0`           | Number of notifications to display |

### Styling Props

| Prop            | Type             | Default Value | Description                                  |
| --------------- | ---------------- | ------------- | -------------------------------------------- |
| `style`         | `SxProps<Theme>` | -             | Custom styles for the main wrapper container |
| `headerStyles`  | `SxProps<Theme>` | -             | Custom styles for the header component       |
| `sidebarStyles` | `SxProps<Theme>` | -             | Custom styles for the sidebar component      |
| `contentStyles` | `SxProps<Theme>` | -             | Custom styles for the main content area      |

### Other Props

| Prop                 | Type       | Default Value | Description                              |
| -------------------- | ---------- | ------------- | ---------------------------------------- |
| `enableRefreshToken` | `boolean`  | `false`       | Enable automatic token refresh           |
| `onLinkClick`        | `function` | -             | Callback when navigation link is clicked |
| `alertProps`         | `object`   | -             | Alert card configuration                 |

### SidebarLink Type

The `SidebarLink` type is defined as:

```tsx
type SidebarLink = {
	text: string; // Display text for the navigation link
	path: string; // URL path for navigation
	icon: React.ReactNode; // Icon component to display next to the text
};
```

## Styling Customization

The LumoraWrapper component provides extensive styling customization through four main style props that accept MUI `SxProps` objects. This allows you to leverage the full power of Material-UI's styling system, including theme access, responsive breakpoints, and pseudo-selectors.

### Available Style Props

- **`style`** - Styles for the main wrapper container (root Box component)
- **`headerStyles`** - Styles for the header/AppBar component
- **`sidebarStyles`** - Styles for the sidebar/Drawer component
- **`contentStyles`** - Styles for the main content area

### Basic Styling Examples

#### Customizing the Header

```tsx
import { LumoraWrapper } from '@volenday/lumora-wrapper-component';

const App = () => {
	return (
		<LumoraWrapper
			appName='My Application'
			pageName='Dashboard'
			headerStyles={{
				backgroundColor: '#1976d2',
				color: 'white',
				boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
				'& .MuiToolbar-root': {
					justifyContent: 'space-between',
					padding: '0 16px'
				}
			}}
		>
			<div>Your content here</div>
		</LumoraWrapper>
	);
};
```

#### Customizing the Sidebar

```tsx
const App = () => {
	return (
		<LumoraWrapper
			sidebarStyles={{
				'& .MuiDrawer-paper': {
					backgroundColor: '#2c3e50',
					color: 'white',
					width: 280, // Custom width
					'& .MuiListItemButton-root': {
						borderRadius: '8px',
						margin: '4px 8px',
						'&:hover': {
							backgroundColor: '#34495e'
						},
						'&.Mui-selected': {
							backgroundColor: '#3498db',
							'&:hover': {
								backgroundColor: '#2980b9'
							}
						}
					}
				}
			}}
		>
			<div>Your content here</div>
		</LumoraWrapper>
	);
};
```

#### Customizing the Content Area

```tsx
const App = () => {
	return (
		<LumoraWrapper
			contentStyles={{
				backgroundColor: '#f8f9fa',
				padding: 3,
				backgroundImage:
					'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
				'& > *': {
					backgroundColor: 'white',
					borderRadius: '12px',
					padding: 3,
					boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
				}
			}}
		>
			<div>Your content here</div>
		</LumoraWrapper>
	);
};
```

#### Customizing the Root Container

```tsx
const App = () => {
	return (
		<LumoraWrapper
			style={{
				height: '100vh',
				background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
				'&::before': {
					content: '""',
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					background: 'rgba(255, 255, 255, 0.1)',
					backdropFilter: 'blur(10px)'
				}
			}}
		>
			<div>Your content here</div>
		</LumoraWrapper>
	);
};
```

### Advanced Styling Examples

#### Responsive Styling

```tsx
const App = () => {
	return (
		<LumoraWrapper
			headerStyles={{
				height: { xs: '60px', md: '50px' },
				backgroundColor: {
					xs: '#e3f2fd',
					md: '#1976d2'
				},
				'& .MuiToolbar-root': {
					padding: { xs: '8px 16px', md: '4px 16px' }
				}
			}}
			sidebarStyles={{
				'& .MuiDrawer-paper': {
					width: { xs: '100%', sm: 280, md: 320 },
					backgroundColor: {
						xs: 'rgba(0, 0, 0, 0.8)',
						md: '#2c3e50'
					}
				}
			}}
		>
			<div>Your content here</div>
		</LumoraWrapper>
	);
};
```

#### Theme-Aware Styling

```tsx
const App = () => {
	return (
		<LumoraWrapper
			headerStyles={theme => ({
				backgroundColor:
					theme.palette.mode === 'dark' ? '#1a1a1a' : '#ffffff',
				borderBottom: `1px solid ${theme.palette.divider}`,
				'& .MuiTypography-root': {
					color: theme.palette.text.primary
				}
			})}
			sidebarStyles={theme => ({
				'& .MuiDrawer-paper': {
					backgroundColor: theme.palette.background.paper,
					borderRight: `1px solid ${theme.palette.divider}`,
					'& .MuiListItemButton-root': {
						'&:hover': {
							backgroundColor: theme.palette.action.hover
						}
					}
				}
			})}
		>
			<div>Your content here</div>
		</LumoraWrapper>
	);
};
```

#### Complete Custom Styling Example

```tsx
const App = () => {
	return (
		<LumoraWrapper
			appName='Custom App'
			pageName='Dashboard'
			sidebarLinks={[
				{ text: 'Home', path: '/', icon: <HomeIcon /> },
				{ text: 'Settings', path: '/settings', icon: <SettingsIcon /> }
			]}
			style={{
				background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
				minHeight: '100vh'
			}}
			headerStyles={{
				background: 'rgba(255, 255, 255, 0.1)',
				backdropFilter: 'blur(10px)',
				borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
				boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
				'& .MuiToolbar-root': {
					color: 'white',
					fontWeight: 600
				}
			}}
			sidebarStyles={{
				'& .MuiDrawer-paper': {
					background: 'rgba(255, 255, 255, 0.1)',
					backdropFilter: 'blur(10px)',
					borderRight: '1px solid rgba(255, 255, 255, 0.2)',
					'& .MuiListItemButton-root': {
						color: 'white',
						borderRadius: '12px',
						margin: '4px 12px',
						'&:hover': {
							background: 'rgba(255, 255, 255, 0.1)'
						},
						'&.Mui-selected': {
							background: 'rgba(255, 255, 255, 0.2)',
							'&:hover': {
								background: 'rgba(255, 255, 255, 0.3)'
							}
						}
					}
				}
			}}
			contentStyles={{
				background: 'rgba(255, 255, 255, 0.05)',
				backdropFilter: 'blur(5px)',
				padding: 4,
				'& > *': {
					background: 'rgba(255, 255, 255, 0.1)',
					borderRadius: '16px',
					padding: 3,
					backdropFilter: 'blur(10px)',
					border: '1px solid rgba(255, 255, 255, 0.2)',
					boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
				}
			}}
		>
			<div>
				<h1>Welcome to Your Custom Styled App</h1>
				<p>
					This demonstrates the full styling capabilities of
					LumoraWrapper.
				</p>
			</div>
		</LumoraWrapper>
	);
};
```

### Style Prop Types

All style props accept the `SxProps<Theme>` type, which means you can use:

- **Object syntax**: `{ backgroundColor: 'red', padding: 2 }`
- **Function syntax**: `(theme) => ({ color: theme.palette.primary.main })`
- **Responsive values**: `{ xs: 'red', md: 'blue' }`
- **Pseudo-selectors**: `{ '&:hover': { backgroundColor: 'blue' } }`
- **Nested selectors**: `{ '& .MuiButton-root': { color: 'red' } }`
- **Theme functions**: `{ spacing: 2, palette: { primary: { main: 'red' } } }`

## Core Features

- **Responsive Design**: Automatically adapts to mobile and desktop screen sizes
- **Flexible Layout**: Optional header and sidebar components that can be toggled on/off
- **Customizable Styling**: Full MUI SxProps support for complete visual customization
- **Automatic Token Refresh**: Built-in logic that proactively refreshes authentication tokens before they expire, preventing unexpected session logouts and ensuring a seamless user experience
- **TypeScript Support**: Full TypeScript definitions included for better development experience
- **Material-UI Integration**: Built on top of Material-UI components for consistent design and theming
