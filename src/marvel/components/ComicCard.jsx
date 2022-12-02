import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ComicCard = ({ comic }) => {
  const navigate = useNavigate();

  const handdleClick = () => {
    localStorage.setItem("comicSelected", JSON.stringify(comic));
    navigate(`/comic/${comic.id}`);
  };

  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea onDoubleClick={handdleClick}>
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
