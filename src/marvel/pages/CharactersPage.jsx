import { Grid, Link } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../../store/slices/thunks";
import { HeroCard } from "../components/HeroCard";
import { SkeletonCard } from "../components/SkeletonCard";

export const CharactersPage = () => {

  const dispatch = useDispatch();
  const { characters, isLoading } = useSelector(state => state.characters);

  useEffect(() => {
    dispatch(getCharacters());

  }, [])

  return (
    <>
      <h1>Characters</h1>

      <Grid
        container
        spacing={1}
      >
        {
          isLoading ? Array.from({ length: 20 }).map((_, index) => (
            <Grid
              item
              key={index}
            >
              <SkeletonCard />
            </Grid>
          )) :
            characters.map((characters, index) => (
              <Grid
                item
                key={index}
              >
                <HeroCard
                  key={characters.id}
                  {...characters}
                />
              </Grid>
            ))
        }
      </Grid>
    </>
  )
}
