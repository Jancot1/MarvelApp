import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComics } from "../../store/slices/thunks";
import { ComicCard } from "../components/ComicCard";
import { SkeletonCard } from "../components/SkeletonCard";

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
      <h1>Comics</h1>

      <Grid container spacing={1}>
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
