import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../../store";
import { HeroCard, SkeletonCard } from "../components";
import { Grid, Pagination } from "@mui/material";
import Stack from '@mui/material/Stack';

export const CharactersPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { characters, isLoading} = useSelector((state) => state.characters);

  useEffect(() => {
    if (characters.length === 0) {
      dispatch(getCharacters(page));
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
      <Grid container marginTop={4}>
        <Stack>
          <Pagination
            count={20}
            color="primary"
            page={page}
            onChange={(_, value) => {
              setPage(value);
              dispatch(getCharacters(value));
            }}
          />
        </Stack>
      </Grid>
    </>
  );
};
