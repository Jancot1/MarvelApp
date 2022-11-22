import { Box, Divider, Drawer, List, ListItem, 
    ListItemButton, ListItemIcon, ListItemText, styled 
} from "@mui/material";

// import PersonSharpIcon from '@mui/icons-material/PersonSharp';
// import TurnedInNotSharpIcon from '@mui/icons-material/TurnedInNotSharp';
import ImportContactsSharpIcon from '@mui/icons-material/ImportContactsSharp';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";

export const SideBar = ({ drawerwidth, open }) => {

    const icons = [
        <ImportContactsSharpIcon />,
        <StarIcon />,
        // <PersonSharpIcon />,
        // <TurnedInNotSharpIcon />
        <FavoriteIcon />
    ];

    return (
        <Box sx={{
            backgroundColor: 'secondary.main'
        }}>
            <Drawer
                sx={{
                    width: `${drawerwidth}px`,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerwidth,
                        boxSizing: "border-box"
                    }
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <Link 
                        className="navbar-brand logo"
                        to="/"
                    >
                        <img src="../marvel.png" width="150" height="95"/>
                    </Link>
                </DrawerHeader>
                <Divider />
                <List>
                    {["Comics", "Characters", "My colections"].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {icons[index]}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
            </Drawer>
        </Box>
    )
}

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'center',
  }));
