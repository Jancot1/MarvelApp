import { configureStore } from '@reduxjs/toolkit'
import { comicSlice } from './slices/comicSlice'

export const store = configureStore({
  reducer: {
    comics: comicSlice.reducer,
  },
})