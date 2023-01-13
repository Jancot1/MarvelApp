import { useNavigate } from 'react-router-dom';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { onSetActiveItem } from '../../../store';
import { useDispatch } from 'react-redux';

export const EventCard = ({ event }) => {
  
	const navigate = useNavigate();
	const dispatch = useDispatch();
  
	const handdleDobleClick = () => {
		localStorage.setItem('eventSelected', JSON.stringify(event));
		navigate(`/event/${event.id}`);
	};

	const onClick = () => {
		dispatch(onSetActiveItem(event));
	};

	return (
		<Card sx={{ maxWidth: 200 }}>
			<CardActionArea onClick={onClick} onDoubleClick={handdleDobleClick}>
				<CardMedia
					component="img"
					image={`${event.thumbnail.path}.${event.thumbnail.extension}`}
					height="250"
				/>
				<CardContent>
					<Typography variant="h6" component="div">
						{event.title}
					</Typography>
					<Typography variant="body">Marvel Comics</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};
