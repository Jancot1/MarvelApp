import { Link } from 'react-router-dom';
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled } from '@mui/material';
import ImportContactsSharpIcon from '@mui/icons-material/ImportContactsSharp';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import { useState } from 'react';

export const SideBar = ({ drawerwidth, open }) => {

	const [selectedIndex, setSelectedIndex] = useState(1);

	const handleClick = (event, index) => {
		setSelectedIndex(index);
	};

	return (
		<Box>
			<Drawer
				sx={{
					width: `${drawerwidth}px`,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerwidth,
						boxSizing: 'border-box',
					},
				}}
				variant="persistent"
				anchor="left"
				open={open}
			>
				<DrawerHeader>
					<Grid className="navbar-brand logo" >
						<img src="../marvel.png" width="150" height="95" />
					</Grid>
				</DrawerHeader>
				<Divider />
				<List>
					<ListItem disablePadding>
						<ListItemButton 
							color="inherit" 
							component={Link} to="/" 
							selected={selectedIndex === 1}
							onClick={(event) => handleClick(event, 1)}
						>
							<ListItemIcon>
								<HomeIcon />
							</ListItemIcon>
							<ListItemText primary="Home" color="primary.contrastText" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton 
							color="inherit" 
							component={Link} 
							to="/comics" 
							selected={selectedIndex === 0}
							onClick={(event) => handleClick(event, 0)}>
							<ListItemIcon>
								<ImportContactsSharpIcon />
							</ListItemIcon>
							<ListItemText primary="Comics" color="primary.contrastText" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton 
							color="inherit" 
							component={Link} 
							to="/characters" 
							selected={selectedIndex === 2}
							onClick={(event) => handleClick(event, 2)}
						>
							<ListItemIcon>
								<StarIcon />
							</ListItemIcon>
							<ListItemText primary="Characters" />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton 
							color="inherit" 
							component={Link} 
							to="/colections" 
							selected={selectedIndex === 3}
							onClick={(event) => handleClick(event, 3)}
						>
							<ListItemIcon>
								<FavoriteIcon />
							</ListItemIcon>
							<ListItemText primary="My colections" />
						</ListItemButton>
					</ListItem>
				</List>
				<Divider />
			</Drawer>
		</Box>
	);
};

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
	justifyContent: 'center',
}));
