import { configureStore } from '@reduxjs/toolkit'
import { characterSlice } from './slices/characterSlice'
import { comicSlice } from './slices/comicSlice'

export const store = configureStore({
  reducer: {
    comics: comicSlice.reducer,
    characters: characterSlice.reducer,
  },
})