import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";

import ImportContactsSharpIcon from "@mui/icons-material/ImportContactsSharp";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

export const SideBar = ({ drawerwidth, open }) => {
  return (
    <Box>
      <Drawer
        sx={{
          width: `${drawerwidth}px`,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerwidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Link className="navbar-brand logo" to="/">
            <img src="../marvel.png" width="150" height="95" />
          </Link>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton color="inherit" component={Link} to="/comics">
              <ListItemIcon>
                <ImportContactsSharpIcon />
              </ListItemIcon>
              <ListItemText primary="Comics" color="primary.contrastText" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton color="inherit" component={Link} to="/characters">
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="Characters" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton color="inherit" component={Link} to="/colections">
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

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "center",
}));
