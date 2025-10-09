import { default as default_2 } from 'react';
import { SxProps } from '@mui/material';
import { Theme } from '@mui/material';

/**
 * LumoraWrapper component provides a consistent layout structure for authenticated pages
 * and handles proactive token refresh to prevent session expiry during active use.
 */
declare const LumoraWrapper: default_2.FC<LumoraWrapperProps>;
export { LumoraWrapper }
export default LumoraWrapper;

export declare interface LumoraWrapperProps {
    children: default_2.ReactNode;
    sidebarLinks?: SidebarLink[];
    secondarySidebarLinks?: SidebarLink[];
    appName?: string;
    pageName?: string;
    showHeader?: boolean;
    showSidebar?: boolean;
    enableRefreshToken?: boolean;
    activePath?: string;
    onLinkClick?: (path: string) => void;
    userName?: string;
    userEmail?: string;
    userAvatar?: string;
    onLogout?: () => void;
    onProfileClick?: () => void;
    onAccountClick?: () => void;
    onSettingsClick?: () => void;
    showNotifications?: boolean;
    notificationCount?: number;
    alertProps?: {
        title?: string;
        message?: string;
        buttonText?: string;
        onButtonClick?: () => void;
        show?: boolean;
    };
    style?: SxProps<Theme>;
    headerStyles?: SxProps<Theme>;
    sidebarStyles?: SxProps<Theme>;
    contentStyles?: SxProps<Theme>;
}

export declare type SidebarLink = {
    text: string;
    path: string;
    icon: default_2.ReactNode;
};

export { }
