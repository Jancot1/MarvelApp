import { Grid, IconButton, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { getAlbumById } from '../';
import { ComicCard, DeleteButton, HeroCard } from '../components';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect, useState } from 'react';

export const AlbumView = () => {
	
	const { id } = useParams();

	const album = getAlbumById(id) || JSON.parse(localStorage.getItem("albumSelected"));
	
	const navigate = useNavigate();
	
	const { colections } = useSelector((state) => state.albums);
	
	const [arrayItems, setArrayItems] = useState([]);

	useEffect(() => {
		if (colections[album.id] !== undefined) {
			setArrayItems([...colections[album.id]]);
		}
	}, [colections])
	
	const onClickBack = () => {
		localStorage.removeItem('albumSelected');
		navigate(-1);
	};

	return (
		<>
			<Grid container direction={'row'} spacing={5}>
				<Grid item sm={2}>
					<IconButton
						color="secondary"
						onClick={onClickBack}
						style={{ marginTop: 25 }}
					>
						<ArrowBackIcon />
					</IconButton>
				</Grid>
				<Grid item sm={8}>
					<Typography variant="h4" align="center" marginTop={4}>
						{album?.title} | {album?.type}
					</Typography>
				</Grid>
			</Grid>
			<hr />
			<Grid container spacing={2} marginTop={2}>
				{colections 
					? arrayItems.map((element, index) => {
						if (album.type === 'Characters') {
							return (
								<Grid item key={index}>
									<HeroCard character={element} />
								</Grid>
							);
						} else {
							return (
								<Grid item key={index}>
									<ComicCard comic={element} />
								</Grid>
							);
						}
					})
					: <h1>There is no items</h1>
				}
			</Grid>
			<DeleteButton />
		</>
	);
};
