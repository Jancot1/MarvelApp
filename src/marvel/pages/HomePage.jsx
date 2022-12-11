import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getEvents } from "../../store";
import { EventCard, SkeletonCard } from "../components";
import { Grid, Typography, Pagination } from "@mui/material";
import { animateScroll as scroll } from "react-scroll";
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';

export const HomePage = () => {

  const { events, isLoading } = useSelector( (state) => state.events);
  const [page, setPage] = useState(1);
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (events.length === 0) {
      dispatch(getEvents(page));
    }
  }, [events]);

  useEffect(() => {
    setCheck(true);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Typography variant="h4" marginTop={4}>
        Especial Events
      </Typography>
      <hr />
      <Grid container spacing={1} marginTop={4}>
        {isLoading
          ? Array.from({ length: 20 }).map((_, index) => (
              <Grid item key={index}>
                <SkeletonCard />
              </Grid>
            ))
          : events.map((event, index) => (
              <Slide
                direction="down"
                in={check} 
                style={{ transformOrigin: '0 0 0' }}
                {...(check ? {timeout: 1000} : {})}
              >
                <Grid item key={index}>
                  <EventCard key={event.id} event={event} />
                </Grid>
              </Slide>
            ))}

      </Grid>
      <Grid container marginTop={4} justifyContent={"center"}>
        <Stack spacing={2}>
          <Pagination
            count={6}
            color="primary"
            page={page}
            onChange={(_, value) => {
              setPage(value);
              dispatch(getEvents(value))
            }}
            onClick={scrollToTop}
          />
        </Stack>
      </Grid>
    </>
  );
}
