import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComics } from "../../store";
import { ComicCard, SkeletonCard } from "../components";
import { Grid, Pagination } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useState } from "react";

export const ComicsPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { comics, isLoading } = useSelector((state) => state.comics);

  useEffect(() => {
    if (comics.length === 0) {
      dispatch(getComics(page));
    }
  }, [comics]);

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
              <Grid item key={index}>
                <ComicCard key={comic.id} comic={comic} />
              </Grid>
            ))}
      </Grid>
      <Grid container marginTop={4}>
        <Stack spacing={2}>
          <Pagination
            count={10}
            color="primary"
            page={page}
            onChange={(_, value) => {
              setPage(value);
              dispatch(getComics(value));
            }}
          />
        </Stack>
      </Grid>
    </>
  );
};
