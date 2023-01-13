import { Grid } from '@mui/material';

export const LoadingScreen = () => {

	return (
		<Grid
			container
			spacing={0}
			direction="column"
			alignItems="center"
			justifyContent="center"
			sx={{ minHeight: '100vh', backgroundColor: 'secondary.main', padding: 4 }}
		>
			<Grid 
				container
				direction='row'
				justifyContent='center'
			>
				<img className='img' src='../Gif.gif'/>
			</Grid>
		</Grid>
	);
};
