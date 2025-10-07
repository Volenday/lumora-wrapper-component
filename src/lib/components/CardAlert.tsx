import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';

interface CardAlertProps {
	title?: string;
	message?: string;
	buttonText?: string;
	onButtonClick?: () => void;
	show?: boolean;
}

const CardAlert: React.FC<CardAlertProps> = ({
	title = '',
	message = '',
	buttonText = '',
	onButtonClick,
	show = true
}) => {
	if (!show) return null;

	return (
		<Card variant='outlined' sx={{ m: 1.5, flexShrink: 0 }}>
			<CardContent>
				<AutoAwesomeRoundedIcon fontSize='small' />
				<Typography gutterBottom sx={{ fontWeight: 600 }}>
					{title}
				</Typography>
				<Typography
					variant='body2'
					sx={{ mb: 2, color: 'text.secondary' }}
				>
					{message}
				</Typography>
				<Button
					variant='contained'
					size='small'
					fullWidth
					onClick={onButtonClick}
				>
					{buttonText}
				</Button>
			</CardContent>
		</Card>
	);
};

export default CardAlert;
