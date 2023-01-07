import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComics } from "../../store";
import { ComicCard, SkeletonCard } from "../components";
import { Grid, Pagination } from "@mui/material";
import { animateScroll as scroll } from "react-scroll";
import Slide from '@mui/material/Slide';
import Stack from "@mui/material/Stack";

export const ComicsPage = () => {

  const { comics, isLoading } = useSelector((state) => state.comics);
  const [page, setPage] = useState(1);
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (comics.length === 0) {
      dispatch(getComics(page));
    }
  }, [comics]);

  useEffect(() => {
    setCheck(true);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Grid container spacing={1} marginTop={5}>
        {isLoading
          ? Array.from({ length: 20 }).map((_, index) => (
              <Grid item key={index}>
                <SkeletonCard />
              </Grid>
            ))
          : comics.map((comic, index) => (
              <Slide
                key={index}
                in={check} 
                style={{ transformOrigin: '0 0 0' }}
                {...(check ? {timeout: 1000} : {})}
              >
                <Grid item>
                  <ComicCard comic={comic} />
                </Grid>
              </Slide>
            ))}
      </Grid>
      <Grid container marginTop={4} justifyContent={"center"}>
        <Stack spacing={2}>
          <Pagination
            count={10}
            color="primary"
            page={page}
            onChange={(_, value) => {
              setPage(value);
              dispatch(getComics(value));
            }}
            onClick={scrollToTop}
          />
        </Stack>
      </Grid>
    </>
  );
};
