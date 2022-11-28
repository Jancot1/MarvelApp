import { marvelApi } from "../../api/marvelApi";
import { setComics, startLoadingComics } from "./comicSlice"

export const getComics = () => {
    return async (dispatch, getState) => {
        dispatch(startLoadingComics());

        const {data} = await marvelApi.get('/comics?apikey=6a318defb82780bfc0e9da9331e5c136&hash=0b93016450e830dbfce37fdf2368cf34&ts=1');      
        console.log(data);

        dispatch(setComics({ comics: data.results }));
    }
}