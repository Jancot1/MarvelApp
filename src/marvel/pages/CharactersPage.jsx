import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../../store/slices/thunks";
import { HeroCard } from "../components/HeroCard";

export const CharactersPage = () => {

  const dispatch = useDispatch();
  const { characters } = useSelector( state => state.characters );

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
            characters.map( (characters, index) => (
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
