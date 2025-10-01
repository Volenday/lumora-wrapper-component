PRD: Nova Wrapper Component

Goal: Create a reusable NovaWrapper component.
UI Layout: The component must render a standard page layout using MUI Material UI components:
A persistent Header (AppBar).
A persistent Sidebar (Drawer).
A Main Content area that renders children.
Token Refresh Logic:
On component mount, read the tokenExpiry value from the browser's cookies.
If the token expires in 10 minutes or less, call the API to refresh it.
If the refresh fails, log the user out.
Tech Stack:
Framework: React
Language: TypeScript
UI: MUI Material UI (Joy UI can be used for optional custom styling).
