// Export the LumoraWrapper component and its props interface
import type { LumoraWrapperProps, SidebarLink } from './components/LumoraWrapper';
import LumoraWrapper from './components/LumoraWrapper';

// Export authentication utilities
export * from './authUtils';

export { LumoraWrapper };
export type { LumoraWrapperProps, SidebarLink };

// Re-export for better tree-shaking
export default LumoraWrapper;
