import { useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import { Box, Card, CardMedia, Divider, Grid, IconButton, styled, Typography} from '@mui/material';
import { getCharacterById } from '../';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { SaveButton } from '../components';

export const CharacterView = () => {

	const { album } = useSelector( (state) => state.albums );
  
	const { id } = useParams();
  
	const navigate = useNavigate();
  
	const character = getCharacterById(id) || JSON.parse(localStorage.getItem('characterSelected'));

	const onClickBack = () => {
		localStorage.removeItem('characterSelected');
		navigate(-1);
	};

	if (!character) {
		return <Navigate to="/characters" />;
	}

	const stories = character.stories.items;

	return (
		<>
			<Grid container spacing={2}>
				<Grid item>
					<IconButton
						color="secondary"
						onClick={onClickBack}
						style={{ marginTop: 25 }}
					>
						<ArrowBackIcon />
					</IconButton>
				</Grid>
				<Grid item>
					<h1 className="animate__animated animate__fadeIn">
						{character.name}
					</h1>
				</Grid>
			</Grid>

			<Grid
				container
				direction="row"
				spacing={2}
				className="animate__animated animate__fadeIn"
			>
				<Grid item md={3}>
					<Card>
						<StyledBox>
							<CardMedia
								component="img"
								image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
							/>
						</StyledBox>
					</Card>
				</Grid>
				<Grid item md={8}>
					<Typography variant="h4">Description</Typography>
					<Divider />
					<Typography style={{ marginTop: 15 }}>
						{character.description
							? `${character.description}`
							: 'There is no description.'}
					</Typography>
					<Typography variant="h4" style={{ marginTop: 20 }}>
            Appearances
					</Typography>
					<Divider />
					<Typography
						style={{ marginTop: 15, marginLeft: stories.length > 0 ? 15 : 0 }}
					>
						{stories.length > 0
							? stories.map((value, index) => <li key={index}>{value.name}</li>)
							: 'There is no information.'}
					</Typography>
				</Grid>
				<Grid item>
					<SaveButton album={ album.filter((element) => element.type === 'Characters' ) } item={character} />
				</Grid>
			</Grid>
		</>
	);
};

const StyledBox = styled(Box)(() => ({
	padding: '5px',
	border: '1px solid #ccd1d1',
	borderRadius: '5px',
}));
