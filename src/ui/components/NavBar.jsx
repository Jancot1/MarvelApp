import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "react-haiku";
import { getCharacterByName, getComicByName, getEventByName, clearResults } from "../../store";
import { Box, Toolbar, IconButton, Typography, InputBase, AppBar, Autocomplete } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { SideBar } from "./SideBar";

export const NavBar = ({ open, setOpen, drawerwidth }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { results } = useSelector((state) => state.search);

  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 1000);

  const navigate = useNavigate();

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

    } else if(location.pathname === "/comics") {
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
      } else if(location.pathname === "/"){
        dispatch(getEventByName(debouncedValue));
      }
    }
  }, [debouncedValue]);

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
            component={Link}
            color="inherit"
            to="/"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              textDecoration: "none",
            }}
          >
            MarvelApp
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
