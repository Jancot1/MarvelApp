import { marvelApi } from "../../api/marvelApi";
import { setCharacters, startLoadingCharacters } from "./characterSlice";
import { setComics, startLoadingComics } from "./comicSlice"
import { setEvents, startLoadingEvents } from "./eventSlice";
import { setResults, startSearching } from "./searchSlice";

export const getComics = () => {
    return async (dispatch, getState) => {
        dispatch(startLoadingComics());

        const {data} = await marvelApi.get('/comics?apikey=6a318defb82780bfc0e9da9331e5c136&hash=9c4e070b256ef507ec59fde2ab8e4ea1&ts=3&limit=100');

        dispatch(setComics({ comics: data.data.results }));
    }
}

export const getCharacters = () => {
    return async (dispatch, getState) => {

        dispatch(startLoadingCharacters());

        const {data} = await marvelApi.get('/characters?apikey=6a318defb82780bfc0e9da9331e5c136&hash=9c4e070b256ef507ec59fde2ab8e4ea1&ts=3&limit=60');

        dispatch(setCharacters({ characters: data.data.results }));
    }
}

export const getEvents = () => {
    return async (dispatch) => {

        dispatch(startLoadingEvents());

        const {data} = await marvelApi.get('/events?apikey=6a318defb82780bfc0e9da9331e5c136&hash=9c4e070b256ef507ec59fde2ab8e4ea1&ts=3&limit=60');

        dispatch(setEvents({ events: data.data.results }));
    }
}

export const getCharacterByName = (name) => {
    return async (dispatch) => {

        dispatch(startSearching());
        
        const {data} = await marvelApi.get(`/characters?apikey=6a318defb82780bfc0e9da9331e5c136&hash=9c4e070b256ef507ec59fde2ab8e4ea1&ts=3&nameStartsWith=${name}`);
        dispatch(setResults(data.data.results));
    }
}

export const getComicByName = (title) => {
    return async (dispatch) => {

        dispatch(startSearching());

        const {data} = await marvelApi.get(`/comics?apikey=6a318defb82780bfc0e9da9331e5c136&hash=9c4e070b256ef507ec59fde2ab8e4ea1&ts=3&titleStartsWith=${title}`);
        dispatch(setResults(data.data.results));
    }
}
export const getEventByName = (title) => {
    return async (dispatch) => {

        dispatch(startSearching());

        const {data} = await marvelApi.get(`/events?apikey=6a318defb82780bfc0e9da9331e5c136&hash=9c4e070b256ef507ec59fde2ab8e4ea1&ts=3&nameStartsWith=${title}`);
        dispatch(setResults(data.data.results));
    }
}