import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { animateScroll as scroll } from "react-scroll";
import { getCharacters } from "../../store";
import { HeroCard, SkeletonCard } from "../components";
import { Grid, Pagination } from "@mui/material";
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';

export const CharactersPage = () => {

  const { characters, isLoading} = useSelector((state) => state.characters);
  const [page, setPage] = useState(1);
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (characters.length === 0) {
      dispatch(getCharacters(page));
    }
  }, [characters]);

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
          : characters.map((character, index) => (
              <Slide
                key={index}
                in={check} 
                style={{ transformOrigin: '0 0 0' }}
                {...(check ? {timeout: 1000} : {})}
              >
                <Grid item>
                  <HeroCard character={character} />
                </Grid>
              </Slide>
            ))}
      </Grid>
      <Grid container marginTop={4} justifyContent={"center"}>
        <Stack>
          <Pagination
            count={20}
            color="primary"
            page={page}
            onChange={(_, value) => {
              setPage(value);
              dispatch(getCharacters(value));
            }}
            onClick={scrollToTop}
          />
        </Stack>
      </Grid>
    </>
  );
};
