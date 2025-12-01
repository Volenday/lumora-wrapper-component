import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';

interface SidebarBrandProps {
	title: string;
	logoSrc?: string;
}

const SidebarBrand: React.FC<SidebarBrandProps> = ({
	title,
	logoSrc = '/lumora-logo-dark.svg'
}) => {
	return (
		<Stack
			direction='row'
			sx={{
				alignItems: 'center',
				gap: 1.5,
				minWidth: 0
			}}
		>
			<Box
				component='img'
				src={logoSrc}
				alt='Lumora'
				sx={{
					height: { xs: 20, md: 24 }
				}}
			/>
			<Typography
				variant='h6'
				sx={{
					fontWeight: 700,
					whiteSpace: 'nowrap',
					textOverflow: 'ellipsis',
					overflow: 'hidden',
					color: '#01584f'
				}}
			>
				{title}
			</Typography>
		</Stack>
	);
};

export default SidebarBrand;


