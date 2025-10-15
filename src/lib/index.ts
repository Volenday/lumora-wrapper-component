// Export the LumoraWrapper component and its props interface
import LumoraWrapper from './components/LumoraWrapper';
import type {
	LumoraWrapperProps,
	SidebarLink
} from './components/LumoraWrapper';

// Export API client utilities
export { logoutUser } from './apiClient';

export { LumoraWrapper };
export type { LumoraWrapperProps, SidebarLink };

// Re-export for better tree-shaking
export default LumoraWrapper;
