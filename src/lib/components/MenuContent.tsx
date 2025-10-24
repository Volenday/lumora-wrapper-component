import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import type { SidebarLink } from './LumoraWrapper';

interface MenuContentProps {
	mainLinks: SidebarLink[];
	secondaryLinks?: SidebarLink[];
	activePath?: string;
	onLinkClick?: (path: string) => void;
}

const MenuContent: React.FC<MenuContentProps> = ({
	mainLinks,
	secondaryLinks = [],
	activePath,
	onLinkClick
}) => {
	const handleLinkClick = (path: string) => {
		if (onLinkClick) {
			onLinkClick(path);
		}
	};

	return (
		<Stack sx={{ flexGrow: 1, justifyContent: 'space-between' }}>
			<List dense sx={{ p: 0 }}>
				{mainLinks.map((link, index) => (
					<ListItem
						key={index}
						disablePadding
						sx={{ display: 'block' }}
					>
						<ListItemButton
							selected={activePath === link.path}
							onClick={() => handleLinkClick(link.path)}
							component='a'
							href={link.path}
							sx={{
								px: 1.5,
								py: 1,
								mb: 0.5,
								'& .MuiListItemIcon-root': {
									minWidth: 36,
									color: 'text.secondary'
								},
								'& .MuiListItemText-primary': {
									color: 'text.primary'
								},
								'&:hover': {
									backgroundColor: 'action.hover'
								},
								'&.Mui-selected, &.Mui-selected:hover': {
									backgroundColor: '#01584F',
									color: '#ffffff',
									'& .MuiListItemText-primary': {
										color: '#ffffff',
										fontWeight: 600
									},
									'& .MuiListItemIcon-root': {
										color: '#ffffff'
									}
								}
							}}
						>
							<ListItemIcon>{link.icon}</ListItemIcon>
							<ListItemText primary={link.text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			{secondaryLinks.length > 0 && (
				<List dense>
					{secondaryLinks.map((link, index) => (
						<ListItem
							key={index}
							disablePadding
							sx={{ display: 'block' }}
						>
							<ListItemButton
								selected={activePath === link.path}
								onClick={() => handleLinkClick(link.path)}
								component='a'
								href={link.path}
								sx={{
									borderRadius: '10px',
									px: 1.5,
									py: 1,
									mb: 0.5,
									'& .MuiListItemIcon-root': {
										minWidth: 36,
										color: 'text.secondary'
									},
									'& .MuiListItemText-primary': {
										color: 'text.primary'
									},
									'&:hover': {
										backgroundColor: 'action.hover'
									},
									'&.Mui-selected, &.Mui-selected:hover': {
										backgroundColor: '#01584F',
										color: '#ffffff',
										'& .MuiListItemText-primary': {
											color: '#ffffff',
											fontWeight: 600
										},
										'& .MuiListItemIcon-root': {
											color: '#ffffff'
										}
									}
								}}
							>
								<ListItemIcon>{link.icon}</ListItemIcon>
								<ListItemText primary={link.text} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			)}
		</Stack>
	);
};

export default MenuContent;
