import {
  Box,
  Card,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getCharacterByName } from "../helpers/getCharacterByName";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const CharacterView = () => {
  const { id } = useParams();

  const character = getCharacterByName(id);

  const stories = character.stories.items;

  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(-1);
  };

  if (!character) {
    return <Navigate to="/characters" />;
  }

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
          <h1 className="animate__animated animate__fadeIn">
            {character.name}
          </h1>
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
                image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              />
            </StyledBox>
          </Card>
        </Grid>
        <Grid item md={8}>
          <Typography variant="h4">Description</Typography>
          <Divider />
          <Typography style={{ marginTop: 15 }}>
            {character.description
              ? `${character.description}`
              : `There is no description.`}
          </Typography>
          <Typography variant="h4" style={{ marginTop: 20 }}>
            Appearances
          </Typography>
          <Divider />
          <Typography
            style={{ marginTop: 15, marginLeft: stories.length > 0 ? 15 : 0 }}
          >
            {stories.length > 0
              ? stories.map((value, index) => <li key={index}>{value.name}</li>)
              : "There is no apearences."}
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
