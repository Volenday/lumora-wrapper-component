import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import type { SxProps, Theme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import MuiToolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as React from 'react';
import NavbarBreadcrumbs from './NavbarBreadcrumbs';

const Toolbar = styled(MuiToolbar)({
	width: '100%',
	padding: '8px',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'start',
	justifyContent: 'center',
	gap: '8px',
	flexShrink: 0
});

interface AppNavbarProps {
	appName?: string;
	pageName?: string;
	onMenuClick?: () => void;
	showMenuButton?: boolean;
	headerStyles?: SxProps<Theme>;
	// Right side content
	userName?: string;
	userEmail?: string;
	userAvatar?: string;
	onProfileClick?: () => void;
	onLogout?: () => void;
	showNotifications?: boolean;
	notificationCount?: number;
}

const AppNavbar: React.FC<AppNavbarProps> = ({
	appName = 'Dashboard',
	pageName = 'Home',
	onMenuClick,
	showMenuButton = true,
	headerStyles,
	userName = 'User Name',
	userEmail,
	userAvatar,
	onProfileClick,
	onLogout,
	showNotifications = false,
	notificationCount = 0
}) => {
	const isUpMd = useMediaQuery(theme => theme.breakpoints.up('md'));
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<AppBar
			position='fixed'
			sx={{
				boxShadow: 0,
				background: '#ffffff',
				backgroundImage: 'none',
				top: 'var(--template-frame-height, 0px)',
				left: { xs: 0, md: '240px' }, // Full width on mobile, right of sidebar on desktop
				width: { xs: '100%', md: 'calc(100% - 240px)' }, // Full width on mobile, excluding sidebar on desktop
				zIndex: 1, // Lower z-index so sidebar appears above,
				height: '60px',
				...headerStyles
			}}
		>
			<Toolbar variant='dense' sx={{ height: '100%' }}>
				<Stack
					direction='row'
					sx={{
						alignItems: 'center',

						flexGrow: 1,
						width: '100%',
						gap: 1
					}}
				>
					{!isUpMd && (
						<Box sx={{ mr: 'auto' }}>
							<NavbarBreadcrumbs
								appName={appName}
								pageName={pageName}
							/>
						</Box>
					)}
					{showMenuButton && (
						<IconButton
							aria-label='menu'
							onClick={onMenuClick}
							sx={{
								color: 'text.primary',
								'&:hover': {
									backgroundColor: 'action.hover'
								}
							}}
						>
							<MenuRoundedIcon />
						</IconButton>
					)}
					{isUpMd && (
						<Stack
							direction='row'
							sx={{ ml: 'auto', alignItems: 'center', gap: 1.5 }}
						>
							{showNotifications && (
								<Badge
									color='error'
									variant='dot'
									invisible={notificationCount === 0}
									sx={{
										'& .MuiBadge-badge': {
											right: 2,
											top: 2
										}
									}}
								>
									<IconButton
										size='small'
										sx={{ color: 'text.secondary' }}
									>
										<NotificationsRoundedIcon />
									</IconButton>
								</Badge>
							)}
							<Button
								onClick={handleOpen}
								startIcon={
									userAvatar ? (
										<Avatar
											src={userAvatar}
											sx={{ width: 24, height: 24 }}
										/>
									) : (
										<AccountCircleRoundedIcon />
									)
								}
								sx={{
									textTransform: 'none',
									color: 'text.primary'
								}}
							>
								Profile
							</Button>
							<Menu
								anchorEl={anchorEl}
								open={open}
								onClose={handleClose}
								transformOrigin={{
									horizontal: 'right',
									vertical: 'top'
								}}
								anchorOrigin={{
									horizontal: 'right',
									vertical: 'bottom'
								}}
								sx={{
									'& .MuiList-root': { padding: '4px' },
									'& .MuiPaper-root': { padding: 0 }
								}}
							>
								<Box
									sx={{
										p: 1.5,
										display: 'flex',
										gap: 1,
										alignItems: 'center'
									}}
								>
									{userAvatar ? (
										<Avatar
											src={userAvatar}
											sx={{ width: 32, height: 32 }}
										/>
									) : (
										<AccountCircleRoundedIcon />
									)}
									<Box sx={{ minWidth: 0 }}>
										<Typography
											variant='body2'
											sx={{
												fontWeight: 600,
												lineHeight: '18px',
												overflow: 'hidden',
												textOverflow: 'ellipsis',
												whiteSpace: 'nowrap'
											}}
										>
											{userName}
										</Typography>
										{userEmail && (
											<Typography
												variant='caption'
												sx={{
													color: 'text.secondary',
													overflow: 'hidden',
													textOverflow: 'ellipsis',
													whiteSpace: 'nowrap',
													display: 'block'
												}}
											>
												{userEmail}
											</Typography>
										)}
									</Box>
								</Box>
								<Divider />
								<MenuItem
									onClick={() => {
										handleClose();
										onProfileClick?.();
									}}
								>
									Profile
								</MenuItem>
								<Divider />
								<MenuItem
									onClick={() => {
										handleClose();
										onLogout?.();
									}}
								>
									Logout
								</MenuItem>
							</Menu>
						</Stack>
					)}
				</Stack>
			</Toolbar>
		</AppBar>
	);
};

export default AppNavbar;
