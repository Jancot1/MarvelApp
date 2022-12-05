import { configureStore } from '@reduxjs/toolkit'
import { characterSlice } from './slices/characterSlice'
import { comicSlice } from './slices/comicSlice'
import { searchSlice } from './slices/searchSlice'

export const store = configureStore({
  reducer: {
    comics: comicSlice.reducer,
    characters: characterSlice.reducer,
    search: searchSlice.reducer,
  },
})