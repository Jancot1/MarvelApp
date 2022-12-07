import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Grid, Typography } from "@mui/material";
import { getEvents } from "../../store";
import { EventCard, SkeletonCard } from "../components";

export const HomePage = () => {

  const { events, isLoading } = useSelector( (state) => state.events);

  const dispatch = useDispatch();

  useEffect(() => {
    if (events.length === 0) {
      dispatch(getEvents());
    }
  }, [events]);

  return (
    <>
      <Typography variant="h4" align="center" marginTop={4}>Especial Events</Typography>
      <Grid container spacing={1} marginTop={4}>
        {isLoading
          ? Array.from({ length: 20 }).map((_, index) => (
              <Grid item key={index}>
                <SkeletonCard />
              </Grid>
            ))
          : events.map((event, index) => (
              <Grid item key={index}>
                <EventCard key={event.id} event={event} />
              </Grid>
            ))}
      </Grid>
    </>
  )
}
