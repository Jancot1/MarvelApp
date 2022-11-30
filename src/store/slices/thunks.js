import { marvelApi } from "../../api/marvelApi";
import { setCharacters, startLoadingCharacters } from "./characterSlice";
import { setComics, startLoadingComics } from "./comicSlice"

export const getComics = () => {
    return async (dispatch, getState) => {
        dispatch(startLoadingComics());

        const {data} = await marvelApi.get('/comics?apikey=6a318defb82780bfc0e9da9331e5c136&hash=0b93016450e830dbfce37fdf2368cf34&ts=1&limit=100');

        dispatch(setComics({ comics: data.data.results }));
    }
}

export const getCharacters = () => {
    return async (dispatch, getState) => {

        dispatch(startLoadingCharacters());

        const {data} = await marvelApi.get('/characters?apikey=6a318defb82780bfc0e9da9331e5c136&hash=9c4e070b256ef507ec59fde2ab8e4ea1&ts=3&limit=100');

        dispatch(setCharacters({ characters: data.data.results }));
    }
}