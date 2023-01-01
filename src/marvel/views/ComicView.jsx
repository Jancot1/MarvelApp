import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import { Box, Button, Card, CardMedia, Divider, Grid, IconButton, styled, Typography } from "@mui/material";
import { getComicById } from "../";
import { ColectItem } from "../components";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const ComicView = () => {
  
  const { id } = useParams();

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const comic =
    getComicById(id) || JSON.parse(localStorage.getItem("comicSelected"));

  if (!comic) {
    return <Navigate to="/comics" />;
  }

  const creators = comic.creators.items;

  const onClickBack = () => {
    localStorage.removeItem("comicSelected");
    navigate(-1);
  };

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
          <h1 className="animate__animated animate__fadeIn">{comic.title}</h1>
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
                image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              />
            </StyledBox>
          </Card>
        </Grid>
        <Grid item md={8}>
          <Typography variant="h4">Description</Typography>
          <Divider />
          <Typography style={{ marginTop: 15 }}>
            {comic.description
              ? `${comic.description}`
              : `There is no description.`}
          </Typography>
          <Typography variant="h4" style={{ marginTop: 20 }}>
            Creators
          </Typography>
          <Divider />
          <Typography style={{ marginTop: 15, marginLeft: 15 }}>
            {creators.length > 0
              ? creators.map((value, index) => (
                  <li key={index}>{value.name}</li>
                ))
              : "There is no information."}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={handleOpen}
            sx={{
              color: 'white',
              backgroundColor: 'green',
              ':hover': {backgroundColor: 'green', opacity: 0.8},
              position: 'fixed',
              right: 200,
              top: 90
            }}
          >
            Save
          </Button>
          <ColectItem open={open} setOpen={setOpen}/>
        </Grid>
      </Grid>
    </>
  );
};

const StyledBox = styled(Box)(() => ({
  padding: "5px",
  border: "1px solid #ccd1d1",
  borderRadius: "5px",
}));
