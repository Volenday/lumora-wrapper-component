import Breadcrumbs, { breadcrumbsClasses } from '@mui/material/Breadcrumbs';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
	margin: theme.spacing(1, 0),
	[`& .${breadcrumbsClasses.separator}`]: {
		color: (theme.vars || theme).palette.action.disabled,
		margin: 1
	},
	[`& .${breadcrumbsClasses.ol}`]: {
		alignItems: 'center'
	}
}));

interface NavbarBreadcrumbsProps {
	appName?: string;
	pageName?: string;
	accentColor?: string;
}

const NavbarBreadcrumbs: React.FC<NavbarBreadcrumbsProps> = ({
	appName = 'Dashboard',
	pageName = 'Home',
	accentColor = '#01584f'
}) => {
	return (
		<StyledBreadcrumbs aria-label='breadcrumb'>
			<Typography
				variant='body1'
				sx={{
					fontWeight: 600,
					fontSize: theme => theme.typography.pxToRem(24),
					color: accentColor
				}}
			>
				{appName}
			</Typography>
		</StyledBreadcrumbs>
	);
};

export default NavbarBreadcrumbs;
