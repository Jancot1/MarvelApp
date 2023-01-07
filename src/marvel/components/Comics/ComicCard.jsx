import { useNavigate } from "react-router-dom";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { onSetActiveItem } from "../../../store";
import { useDispatch } from "react-redux";

export const ComicCard = ({ comic }) => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handdleDobleClick = () => {
    localStorage.setItem("comicSelected", JSON.stringify(comic));
    navigate(`/comic/${comic.id}`);
  };

  const onClick = () => {
    dispatch(onSetActiveItem(comic));
  }

  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea onClick={onClick} onDoubleClick={handdleDobleClick}>
        <CardMedia
          component="img"
          image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          height="250"
        />
        <CardContent>
          <Typography variant="h6" component="div">
            {comic.title}
          </Typography>
          <Typography variant="body">Marvel Comics</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
