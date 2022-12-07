import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const EventCard = ({ event }) => {
  const navigate = useNavigate();
  
  const handdleClick = () => {
    localStorage.setItem("eventSelected", JSON.stringify(event));
    navigate(`/event/${event.id}`);
  };

  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea onDoubleClick={handdleClick}>
        <CardMedia
          component="img"
          image={`${event.thumbnail.path}.${event.thumbnail.extension}`}
          height="250"
        />
        <CardContent>
          <Typography variant="h6" component="div">
            {event.title}
          </Typography>
          <Typography variant="body">Marvel Comics</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
