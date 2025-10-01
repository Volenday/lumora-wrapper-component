# Nova Wrapper Component

A flexible and customizable React wrapper component built with Material-UI that provides a consistent layout structure for authenticated pages. The component includes a header, sidebar navigation, and main content area, along with built-in automatic token refresh logic to prevent unexpected session logouts.

## Installation

Since this is a private package hosted on GitHub Packages, you must first configure your `.npmrc` file to authenticate with GitHub Packages.

Create or update your `.npmrc` file in your project root with the following content:

```
@volenday:registry=https://npm.pkg.github.com
```

Then install the package using npm:

```bash
npm install @volenday/nova-wrapper-component
```

## Usage

Import and use the NovaWrapper component to wrap your page content:

```tsx
import React from "react";
import { NovaWrapper } from "@volenday/nova-wrapper-component";
import { Home, Settings, Dashboard } from "@mui/icons-material";

const App = () => {
  const sidebarLinks = [
    { text: "Home", path: "/", icon: <Home /> },
    { text: "Dashboard", path: "/dashboard", icon: <Dashboard /> },
    { text: "Settings", path: "/settings", icon: <Settings /> },
  ];

  return (
    <NovaWrapper
      headerTitle="My Application"
      sidebarLinks={sidebarLinks}
      appLogo={<img src="/logo.png" alt="Logo" />}
    >
      <div>
        <h1>Welcome to your application</h1>
        <p>Your page content goes here...</p>
      </div>
    </NovaWrapper>
  );
};

export default App;
```

## Props API

| Prop            | Type              | Default Value | Description                                     |
| --------------- | ----------------- | ------------- | ----------------------------------------------- |
| `children`      | `React.ReactNode` | -             | The main content to be displayed in the wrapper |
| `sidebarLinks`  | `SidebarLink[]`   | `[]`          | Array of navigation links for the sidebar       |
| `headerTitle`   | `string`          | -             | Title text to display in the header             |
| `appLogo`       | `React.ReactNode` | -             | Logo or icon component to display in the header |
| `showHeader`    | `boolean`         | `true`        | Whether to display the header bar               |
| `showSidebar`   | `boolean`         | `true`        | Whether to display the sidebar navigation       |
| `style`         | `SxProps<Theme>`  | -             | Custom styles for the main wrapper container    |
| `headerStyles`  | `SxProps<Theme>`  | -             | Custom styles for the header component          |
| `sidebarStyles` | `SxProps<Theme>`  | -             | Custom styles for the sidebar component         |
| `contentStyles` | `SxProps<Theme>`  | -             | Custom styles for the main content area         |

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

The component's layout can be customized using the `style`, `headerStyles`, `sidebarStyles`, and `contentStyles` props. Each of these props accepts an MUI `SxProps` object, allowing you to leverage the full power of Material-UI's styling system.

### Example: Customizing Header Background

```tsx
import { NovaWrapper } from "@volenday/nova-wrapper-component";

const App = () => {
  return (
    <NovaWrapper
      headerTitle="My App"
      headerStyles={{
        backgroundColor: "#1976d2",
        "& .MuiToolbar-root": {
          justifyContent: "space-between",
        },
      }}
      contentStyles={{
        backgroundColor: "#f5f5f5",
        padding: 4,
      }}
    >
      <div>Your content here</div>
    </NovaWrapper>
  );
};
```

### Example: Customizing Sidebar

```tsx
const App = () => {
  return (
    <NovaWrapper
      sidebarStyles={{
        "& .MuiDrawer-paper": {
          backgroundColor: "#2c3e50",
          color: "white",
          "& .MuiListItemButton-root": {
            "&:hover": {
              backgroundColor: "#34495e",
            },
          },
        },
      }}
    >
      <div>Your content here</div>
    </NovaWrapper>
  );
};
```

## Core Features

- **Responsive Design**: Automatically adapts to mobile and desktop screen sizes
- **Flexible Layout**: Optional header and sidebar components that can be toggled on/off
- **Customizable Styling**: Full MUI SxProps support for complete visual customization
- **Automatic Token Refresh**: Built-in logic that proactively refreshes authentication tokens before they expire, preventing unexpected session logouts and ensuring a seamless user experience
- **TypeScript Support**: Full TypeScript definitions included for better development experience
- **Material-UI Integration**: Built on top of Material-UI components for consistent design and theming
