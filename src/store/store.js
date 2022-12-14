import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/AuthSlice';
import { characterSlice } from './slices/characterSlice';
import { comicSlice } from './slices/comicSlice';
import { eventSlice } from './slices/eventSlice';
import { searchSlice } from './slices/searchSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    comics: comicSlice.reducer,
    characters: characterSlice.reducer,
    events: eventSlice.reducer,
    search: searchSlice.reducer,
  },
})