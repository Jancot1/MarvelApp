import { marvelApi } from "../../api/marvelApi";
import { loginWithEmailPassword, logoutFirebase, registerUserData, signInWithGoogle } from "../../firebase";
import { checkingCredentials, login, logout } from "../auth/authSlice";
import { onAddNewAlbum, onDeleteAlbum, onDeleteItem, onDeleteItemSelected, onSavingItem, onUpdateAlbum } from "./albumSlice";
import { setCharacters, startLoadingCharacters } from "./characterSlice";
import { setComics, startLoadingComics } from "./comicSlice"
import { setEvents, startLoadingEvents } from "./eventSlice";
import { setResults, startSearching } from "./searchSlice";

const apikey = "6a318defb82780bfc0e9da9331e5c136";
const hash = "9c4e070b256ef507ec59fde2ab8e4ea1";

// Login / Register
export const checkingAuth = () => {
    return async(dispatch) => {

        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return async(dispatch) => {

        dispatch(checkingCredentials());
        
        const result = await signInWithGoogle();
        if ( !result.ok ) return dispatch(logout( result.errorMessage) );

        dispatch( login(result) );
    }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
    return async (dispatch) => {

        dispatch(checkingCredentials());

        const {ok, uid, photoURL, errorMessage} = await registerUserData({email, password, displayName});

        if (!ok) return dispatch(logout({errorMessage}));

        dispatch(login({ uid, displayName, email, photoURL }));
    }
}

export const startLoginUserWithEmailPassword = ({email, password}) => {
    return async(dispatch) => {

        dispatch(checkingCredentials());
        const result = await loginWithEmailPassword({email, password});

        if (!result.ok) return dispatch(logout(result));
        dispatch(login(result));
    }
}

export const startLogout = () => {
    return async(dispatch) => {

        await logoutFirebase();
        dispatch(logout());
    }
}

// Peticiones

export const getComics = ( page = 0 ) => {
    return async (dispatch) => {

        dispatch(startLoadingComics());

        const {data} = await marvelApi.get(`/comics?apikey=${apikey}&hash=${hash}&ts=3&offset=${page * 20}`);

        dispatch(setComics({ comics: data.data.results, page }));
    }
}

export const getCharacters = ( page = 0 ) => {
    return async (dispatch) => {

        dispatch(startLoadingCharacters());

        const {data} = await marvelApi.get(`/characters?apikey=${apikey}&hash=${hash}&ts=3&offset=${page * 20}`);

        dispatch(setCharacters({ characters: data.data.results, page }));
    }
}

export const getEvents = ( page = 0) => {
    return async (dispatch) => {

        dispatch(startLoadingEvents());

        const {data} = await marvelApi.get(`/events?apikey=${apikey}&hash=${hash}&ts=3&offset=${page * 10}`);

        dispatch(setEvents({ events: data.data.results, page }));
    }
}

export const getCharacterByName = (name) => {
    return async (dispatch) => {

        dispatch(startSearching());
        
        const {data} = await marvelApi.get(`/characters?apikey=${apikey}&hash=${hash}&ts=3&nameStartsWith=${name}`);
        dispatch(setResults(data.data.results));
    }
}

export const getComicByName = (title) => {
    return async (dispatch) => {

        dispatch(startSearching());

        const {data} = await marvelApi.get(`/comics?apikey=${apikey}&hash=${hash}&ts=3&titleStartsWith=${title}`);
        dispatch(setResults(data.data.results));
    }
}
export const getEventByName = (title) => {
    return async (dispatch) => {

        dispatch(startSearching());

        const {data} = await marvelApi.get(`/events?apikey=${apikey}&hash=${hash}&ts=3&nameStartsWith=${title}`);
        dispatch(setResults(data.data.results));
    }
}

// Colecciones

export const startSavingAlbum = (event) => {
    return async(dispatch) => {

        if (event._id) {
            dispatch(onUpdateAlbum({ ...event }));
        } else {
            dispatch(onAddNewAlbum({ ...event, _id: new Date().getTime() }));
        }
    }
}

export const deleteAlbum = (album) => {
    return async(dispatch) => {
        dispatch(onDeleteAlbum(album));
    }
}

export const startSavingItem = (item, value) => {
    return async(dispatch) => {
        dispatch(onSavingItem({item, value}));
    }
}

export const deleteItem = (item, value) => {
    return async(dispatch) => {
        dispatch(onDeleteItem({item, value}));
    }
}
export const deleteItemSelected = (item, value) => {
    return async(dispatch) => {
        dispatch(onDeleteItemSelected({item, value}));
    }
}