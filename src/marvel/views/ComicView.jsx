import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Box, Card, CardMedia, Divider, Grid, IconButton, styled, Typography } from "@mui/material";
import { getComicById } from "../";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const ComicView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
      </Grid>
    </>
  );
};

const StyledBox = styled(Box)(() => ({
  padding: "5px",
  border: "1px solid #ccd1d1",
  borderRadius: "5px",
}));
