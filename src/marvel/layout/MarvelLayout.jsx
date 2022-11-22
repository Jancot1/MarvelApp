import { useState } from "react";
import { styled } from "@mui/material";
import { Box } from "@mui/system"
import { Outlet } from "react-router-dom";
import { NavBar } from "../../ui";

const drawerwidth = 220;

export const MarvelLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex'}}>
      <NavBar open={open} setOpen={setOpen} drawerwidth={drawerwidth} />
      <Main
        component='main'
        open={open}
      >
        <Outlet />
      </Main>
    </Box>
  )
}

const Main = styled(Box, { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: `-${drawerwidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    })
  })
);