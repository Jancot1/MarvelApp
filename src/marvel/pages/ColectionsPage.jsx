import { useSelector } from "react-redux";
import { AddOutlined } from "@mui/icons-material"
import { Grid, IconButton } from "@mui/material"

import { ColectionModal } from "../components"
import { useModal } from "../../hooks";
import { ColectCard } from "../components";

export const ColectionsPage = () => {

  const { openTypeModal } = useModal();
  const { album } = useSelector( (state) => state.albums );

  const handleClick = () => {
    openTypeModal();
  }

  return (
    <>
      <IconButton
        size="large"
        onClick={handleClick}
        sx={{
          color: 'white',
          backgroundColor: 'secondary.main',
          ':hover': {backgroundColor: 'secondary.main', opacity: 0.8},
          position: 'fixed',
          right: 90,
          bottom: 80,
          zIndex: 10
        }}
      >
        <AddOutlined sx={{ fontSize: 35 }} />
      </IconButton>
      <Grid container spacing={2} marginTop={5}>
        {
          album.map( (album, index) => (
            <Grid item key={index} xs={10} sm={6} md={4} lg={3} marginBottom={3}>
              <ColectCard album={album} />
            </Grid>
          ))
        }
      </Grid>
      <ColectionModal />
    </>
  )
}
