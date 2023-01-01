import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "react-haiku";
import { getCharacterByName, getComicByName, getEventByName, clearResults, startLogout } from "../../store";

import { 
  Box, Toolbar, IconButton, Typography, InputBase, AppBar, Autocomplete, 
  Tooltip, Avatar, Menu, MenuItem, Divider, ListItemIcon
} from "@mui/material";
import { Logout } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, alpha } from "@mui/material/styles";
import { SideBar } from "./SideBar";

export const NavBar = ({ open, setOpen, drawerwidth }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { results } = useSelector((state) => state.search);
  const { displayName, photoURL } = useSelector(state => state.auth);

  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 1000);

  const navigate = useNavigate();

  const headerNavbar = {
    "/comics": "Comics",
    "/characters": "Characters",
    "/colections": "My Colections",
    "/": "Home",
  };

  const handleDrawer = () => {
    setOpen(!open);
  };

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  const handdleClick = (result) => {
    if (location.pathname === "/characters") {
      localStorage.setItem("characterSelected", JSON.stringify(result));
      navigate(`/character/${result.id}`);
    } else if (location.pathname === "/comics") {
      localStorage.setItem("comicSelected", JSON.stringify(result));
      navigate(`/comic/${result.id}`);
    } else {
      localStorage.setItem("eventSelected", JSON.stringify(result));
      navigate(`/event/${result.id}`);
    }
  };

  useEffect(() => {
    setValue("");
    dispatch(clearResults());
  }, [location]);

  useEffect(() => {
    if (debouncedValue.length >= 3) {
      if (location.pathname === "/characters") {
        dispatch(getCharacterByName(debouncedValue));
      } else if (location.pathname === "/comics") {
        dispatch(getComicByName(debouncedValue));
      } else if (location.pathname === "/") {
        dispatch(getEventByName(debouncedValue));
      }
    }
  }, [debouncedValue]);

  const [anchorEl, setAnchorEl] = useState(null);
  const openend = Boolean(anchorEl);
  const onClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogout = () => {
    dispatch(startLogout())
  }

  return (
    <Box sx={{ display: "flex" }}>
      <AppBarComponent position="fixed" open={open} drawerwidth={drawerwidth}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={handleDrawer}
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            color="inherit"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              textDecoration: "none",
            }}
          >
            MarvelApp / {headerNavbar[location.pathname]}
          </Typography>
          <Search>
            <Autocomplete
              disableClearable
              options={results}
              freeSolo={!value?.length > 0}
              getOptionLabel={(result) => result.name || result.title}
              renderOption={(props, result) => (
                <Box
                  component="li"
                  {...props}
                  key={result.id}
                  onClick={() => handdleClick(result)}
                >
                  {result.name || result.title}
                </Box>
              )}
              renderInput={(params) => (
                <div ref={params.InputProps.ref}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    {...params}
                    placeholder="Buscar…"
                    name="value"
                    value={value}
                    onChange={handleChange}
                  />
                </div>
              )}
            />
          </Search>
          <Box>
            <Tooltip title="Account settings">
              <IconButton
                onClick={onClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={openend ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openend ? "true" : undefined}
              >
                <Avatar src={photoURL ? photoURL : ''} sx={{ width: 32, height: 32 }} />
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={openend}
            onClick={handleClose}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <Typography sx={{ padding: 1, ml: 1, mr: 1 }}>
             {displayName}
            </Typography>
            <Divider />
            <MenuItem sx={{
                mt: 1, 
                ':hover': { color: '#ef5350'}
              }} 
              onClick={onLogout}>
              <ListItemIcon>
                <Logout color="error" fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBarComponent>
      <SideBar open={open} drawerwidth={drawerwidth} />
    </Box>
  );
};

const AppBarComponent = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open, drawerwidth }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerwidth}px)`,
    marginLeft: `${drawerwidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "25ch",
      "&:focus": {
        width: "30ch",
      },
    },
  },
}));
