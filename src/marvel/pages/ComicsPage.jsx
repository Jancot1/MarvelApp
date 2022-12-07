import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { getComics } from "../../store";
import { ComicCard, SkeletonCard } from "../components";

export const ComicsPage = () => {
  const dispatch = useDispatch();
  const { comics, isLoading } = useSelector((state) => state.comics);

  useEffect(() => {
    if (comics.length === 0) {
      dispatch(getComics());
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
    </>
  );
};
