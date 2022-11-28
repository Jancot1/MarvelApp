import { createSlice } from '@reduxjs/toolkit'

export const comicSlice = createSlice({
  name: 'comic',
  initialState: {
    comics: [],
    isLoading: false,
  },
  reducers: {
    startLoadingComics: (state) => {
      state.isLoading = true;
    },
    setComics: (state, action) => {
      state.isLoading = false;
      state.comics = action.payload.comics;
    }
  },
})

// Action creators are generated for each case reducer function
export const { startLoadingComics, setComics } = comicSlice.actions