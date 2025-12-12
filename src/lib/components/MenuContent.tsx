import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import * as React from 'react';
import type { SidebarLink } from './LumoraWrapper';

interface MenuContentProps {
	mainLinks: SidebarLink[];
	secondaryLinks?: SidebarLink[];
	activePath?: string;
	onLinkClick?: (path: string) => void;
	accentColor?: string;
}

const MenuContent: React.FC<MenuContentProps> = ({
	mainLinks,
	secondaryLinks = [],
	activePath,
	onLinkClick,
	accentColor = '#01584f'
}) => {
	const handleLinkClick = (path: string) => {
		if (onLinkClick) {
			onLinkClick(path);
		}
	};

	return (
		<Stack
			sx={{
				flexGrow: 1,
				justifyContent: 'flex-start',
				alignItems: 'center',
				pt: 2,
				gap: 1
			}}
		>
			{mainLinks.map((link, index) => (
				<React.Fragment key={index}>
					<Tooltip title={link.text} placement='right' arrow>
						<IconButton
							component='a'
							href={link.path}
							onClick={e => {
								e.preventDefault();
								e.stopPropagation();
								handleLinkClick(link.path);
							}}
							sx={{
								width: 44,
								height: 44,
								color:
									activePath === link.path
										? '#ffffff'
										: accentColor,
								backgroundColor:
									activePath === link.path
										? accentColor
										: 'transparent',
								borderRadius:
									activePath === link.path ? '4px' : '50%',
								'&:hover': {
									backgroundColor:
										activePath === link.path
											? accentColor
											: 'action.hover',
									borderRadius: '4px'
								}
							}}
						>
							{link.icon}
						</IconButton>
					</Tooltip>
					{index < mainLinks.length - 1 && (
						<Box
							sx={{
								width: '100%',
								display: 'flex',
								justifyContent: 'center'
							}}
						>
							<Divider
								sx={{ width: '60%', borderColor: 'divider' }}
							/>
						</Box>
					)}
				</React.Fragment>
			))}
			{secondaryLinks.length > 0 && (
				<>
					<Box
						sx={{
							width: '100%',
							my: 2,
							display: 'flex',
							justifyContent: 'center'
						}}
					>
						<Divider
							sx={{ width: '60%', borderColor: 'divider' }}
						/>
					</Box>
					<Box sx={{ mt: 'auto', pb: 2 }}>
						<Stack gap={1} alignItems='center'>
							{secondaryLinks.map((link, index) => (
								<React.Fragment key={index}>
									<Tooltip
										title={link.text}
										placement='right'
										arrow
									>
										<IconButton
											component='a'
											href={link.path}
											onClick={e => {
												e.preventDefault();
												e.stopPropagation();
												handleLinkClick(link.path);
											}}
											sx={{
												width: 48,
												height: 48,
												color:
													activePath === link.path
														? '#ffffff'
														: 'text.secondary',
												backgroundColor:
													activePath === link.path
														? '#01584F'
														: 'transparent',
												borderRadius:
													activePath === link.path
														? '4px'
														: '50%',
												'&:hover': {
													backgroundColor:
														activePath === link.path
															? '#01584F'
															: 'action.hover',
													borderRadius: '4px'
												}
											}}
										>
											{link.icon}
										</IconButton>
									</Tooltip>
									{index < secondaryLinks.length - 1 && (
										<Box
											sx={{
												width: '100%',
												display: 'flex',
												justifyContent: 'center'
											}}
										>
											<Divider
												sx={{
													width: '60%',
													borderColor: 'divider'
												}}
											/>
										</Box>
									)}
								</React.Fragment>
							))}
						</Stack>
					</Box>
				</>
			)}
		</Stack>
	);
};

export default MenuContent;
