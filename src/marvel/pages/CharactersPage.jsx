import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { getCharacters } from "../../store";
import { HeroCard, SkeletonCard } from "../components";

export const CharactersPage = () => {
  const dispatch = useDispatch();
  const { characters, isLoading } = useSelector((state) => state.characters);

  useEffect(() => {
    if (characters.length === 0) {
      dispatch(getCharacters());
    }
  }, [characters]);

  return (
    <>
      <Grid container spacing={1} marginTop={5}>
        {isLoading
          ? Array.from({ length: 20 }).map((_, index) => (
              <Grid item key={index}>
                <SkeletonCard />
              </Grid>
            ))
          : characters.map((character, index) => (
              <Grid item key={index}>
                <HeroCard key={character.id} character={character} />
              </Grid>
            ))}
      </Grid>
    </>
  );
};
