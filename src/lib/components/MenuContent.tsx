import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import type { SidebarLink } from './NovaWrapper';

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
		<Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
			<List dense>
				{mainLinks.map((link, index) => (
					<ListItem key={index} disablePadding sx={{ display: 'block' }}>
						<ListItemButton 
							selected={activePath === link.path}
							onClick={() => handleLinkClick(link.path)}
							component="a"
							href={link.path}
							sx={{
								borderRadius: '10px',
								'&:hover': {
									backgroundColor: 'action.hover',
									'& .MuiListItemText-primary': {
										color: 'text.primary',
									},
									'& .MuiListItemIcon-root': {
										color: 'text.primary',
									},
								},
								'&.Mui-selected': {
									backgroundColor: 'action.selected',
									'& .MuiListItemText-primary': {
										color: 'text.primary',
									},
									'& .MuiListItemIcon-root': {
										color: 'text.primary',
									},
								},
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
					<ListItem key={index} disablePadding sx={{ display: 'block' }}>
						<ListItemButton 
							selected={activePath === link.path}
							onClick={() => handleLinkClick(link.path)}
							component="a"
							href={link.path}
							sx={{
								borderRadius: '10px',
								'&:hover': {
									backgroundColor: 'action.hover',
									'& .MuiListItemText-primary': {
										color: 'text.primary',
									},
									'& .MuiListItemIcon-root': {
										color: 'text.primary',
									},
								},
								'&.Mui-selected': {
									backgroundColor: 'action.selected',
									'& .MuiListItemText-primary': {
										color: 'text.primary',
									},
									'& .MuiListItemIcon-root': {
										color: 'text.primary',
									},
								},
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
