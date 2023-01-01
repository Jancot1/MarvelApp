import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/AuthSlice';
import { albumSlice } from './slices/albumSlice';
import { characterSlice } from './slices/characterSlice';
import { comicSlice } from './slices/comicSlice';
import { eventSlice } from './slices/eventSlice';
import { searchSlice } from './slices/searchSlice';
import { uiSlice } from './ui/uiSlice';

const combinedReducer = combineReducers({
  auth: authSlice.reducer,
  comics: comicSlice.reducer,
  characters: characterSlice.reducer,
  events: eventSlice.reducer,
  search: searchSlice.reducer,
  ui: uiSlice.reducer,
  albums: albumSlice.reducer
})

const rootReducer = ( state, action) => {
  if (action.type === 'auth/logout') {
    state = undefined;    
  }
  return combinedReducer(state, action);
}

export const store = configureStore({
  reducer: rootReducer,
  // {
  //   auth: authSlice.reducer,
  //   comics: comicSlice.reducer,
  //   characters: characterSlice.reducer,
  //   events: eventSlice.reducer,
  //   search: searchSlice.reducer,
  //   ui: uiSlice.reducer,
  //   albums: albumSlice.reducer
  // },
})