import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuContent from './MenuContent';
import CardAlert from './CardAlert';
import type { SidebarLink } from './NovaWrapper';

interface MobileSidebarProps {
	open: boolean;
	onClose: () => void;
	mainLinks: SidebarLink[];
	secondaryLinks?: SidebarLink[];
	activePath?: string;
	onLinkClick?: (path: string) => void;
	userName?: string;
	userEmail?: string;
	userAvatar?: string;
	onLogout?: () => void;
	showNotifications?: boolean;
	notificationCount?: number;
	alertProps?: {
		title?: string;
		message?: string;
		buttonText?: string;
		onButtonClick?: () => void;
		show?: boolean;
	};
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({
	open,
	onClose,
	mainLinks,
	secondaryLinks = [],
	activePath,
	onLinkClick,
	userName = 'User Name',
	userAvatar,
	onLogout,
	showNotifications = false,
	notificationCount = 0,
	alertProps
}) => {
	const handleLinkClick = (path: string) => {
		onLinkClick?.(path);
		onClose(); // Close mobile sidebar when link is clicked
	};

	return (
		<Drawer
			anchor="right"
			open={open}
			onClose={onClose}
			sx={{
				zIndex: (theme) => theme.zIndex.drawer + 1,
				'& .MuiDrawer-paper': {
					backgroundImage: 'none',
					backgroundColor: 'background.paper',
				},
			}}
		>
			<Stack
				sx={{
					maxWidth: '70dvw',
					height: '100%',
				}}
			>
				<Stack direction="row" sx={{ p: 2, pb: 0, gap: 1 }}>
					<Stack
						direction="row"
						sx={{ gap: 1, alignItems: 'center', flexGrow: 1, p: 1 }}
					>
						<Avatar
							sizes="small"
							alt={userName}
							src={userAvatar}
							sx={{ width: 24, height: 24 }}
						/>
						<Typography component="p" variant="h6">
							{userName}
						</Typography>
					</Stack>
					{showNotifications && (
						<Badge
							color="error"
							variant="dot"
							invisible={notificationCount === 0}
							sx={{ '& .MuiBadge-badge': { right: 2, top: 2 } }}
						>
							<IconButton size="small">
								<NotificationsRoundedIcon />
							</IconButton>
						</Badge>
					)}
				</Stack>
				<Divider />
				<Stack sx={{ flexGrow: 1 }}>
					<MenuContent
						mainLinks={mainLinks}
						secondaryLinks={secondaryLinks}
						activePath={activePath}
						onLinkClick={handleLinkClick}
					/>
					<Divider />
				</Stack>
				{alertProps?.show && <CardAlert {...alertProps} />}
				<Stack sx={{ p: 2 }}>
					<Button 
						variant="outlined" 
						fullWidth 
						startIcon={<LogoutRoundedIcon />}
						onClick={onLogout}
					>
						Logout
					</Button>
				</Stack>
			</Stack>
		</Drawer>
	);
};

export default MobileSidebar;
