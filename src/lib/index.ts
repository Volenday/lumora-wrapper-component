// Export the LumoraWrapper component and its props interface
import LumoraWrapper, {
	LumoraWrapperProps,
	SidebarLink
} from './components/LumoraWrapper';

export { LumoraWrapper };
export type { LumoraWrapperProps, SidebarLink };

// Re-export for better tree-shaking
export default LumoraWrapper;
