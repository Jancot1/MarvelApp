import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const HeroCard = ({ character }) => {
  const navigate = useNavigate();

  const handdleClick = () => {
    localStorage.setItem("characterSelected", JSON.stringify(character));
    navigate(`/character/${character.id}`);
  };

  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea onDoubleClick={handdleClick}>
        <CardMedia
          component="img"
          image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          height="250"
        />
        <CardContent>
          <Typography variant="h6" component="div">
            {character.name}
          </Typography>
          <Typography variant="subtitle2">
            N° de comics: {`${character.comics.returned}`}
          </Typography>
          <Typography variant="body">Marvel Comics</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
