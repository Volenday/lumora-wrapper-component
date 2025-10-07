import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MuiToolbar from '@mui/material/Toolbar';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import IconButton from '@mui/material/IconButton';
import NavbarBreadcrumbs from './NavbarBreadcrumbs';

const Toolbar = styled(MuiToolbar)({
	width: '100%',
	padding: '8px',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'start',
	justifyContent: 'center',
	gap: '8px',
	flexShrink: 0,
});

interface AppNavbarProps {
	appName?: string;
	pageName?: string;
	onMenuClick?: () => void;
	showMenuButton?: boolean;
}

const AppNavbar: React.FC<AppNavbarProps> = ({
	appName = 'Dashboard',
	pageName = 'Home',
	onMenuClick,
	showMenuButton = true
}) => {
	return (
		<AppBar
			position='fixed'
			sx={{ 
				boxShadow: 0,
				background: 'white',
				backgroundImage: 'none',
				top: 'var(--template-frame-height, 0px)',
				left: { xs: 0, md: '240px' }, // Full width on mobile, right of sidebar on desktop
				width: { xs: '100%', md: 'calc(100% - 240px)' }, // Full width on mobile, excluding sidebar on desktop
				zIndex: 1, // Lower z-index so sidebar appears above,
				height: '50px'
			}}
		>
			<Toolbar variant='dense'>
				<Stack
					direction='row'
					sx={{
						alignItems: 'center',
						flexGrow: 1,
						width: '100%',
						gap: 1,
					}}
				>
					<Box sx={{ mr: 'auto' }}>
						<NavbarBreadcrumbs appName={appName} pageName={pageName} />
					</Box>
					{showMenuButton && (
						<IconButton
							aria-label='menu'
							onClick={onMenuClick}
							sx={{ 
								color: 'text.primary',
								'&:hover': {
									backgroundColor: 'action.hover',
								}
							}}
						>
							<MenuRoundedIcon />
						</IconButton>
					)}
				</Stack>
			</Toolbar>
		</AppBar>
	);
};


export default AppNavbar;
