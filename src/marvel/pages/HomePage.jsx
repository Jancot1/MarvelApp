import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getEvents } from "../../store";
import { EventCard, SkeletonCard } from "../components";
import { Grid, Typography, Pagination } from "@mui/material";
import Stack from '@mui/material/Stack';

export const HomePage = () => {

  const { events, isLoading } = useSelector( (state) => state.events);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    if (events.length === 0) {
      dispatch(getEvents(page));
    }
  }, [events]);

  return (
    <>
      <Typography variant="h4" align="center" marginTop={4}>
        Especial Events
      </Typography>
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
      <Grid container marginTop={4}>
        <Stack spacing={2}>
          <Pagination
            count={6}
            color="primary"
            page={page}
            onChange={(_, value) => {
              setPage(value);
              dispatch(getEvents(value))
            }}
          />
        </Stack>
      </Grid>
    </>
  );
}
