import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { onSetActiveItem } from "../../../store";

export const HeroCard = ({ character }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handdleDobleClick = () => {
    localStorage.setItem("characterSelected", JSON.stringify(character));
    navigate(`/character/${character.id}`);
  };
  
  const onClick = () => {
    dispatch(onSetActiveItem(character));
  }

  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea onClick={onClick} onDoubleClick={handdleDobleClick}>
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
