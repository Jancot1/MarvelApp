import { createSlice } from '@reduxjs/toolkit'

export const comicSlice = createSlice({
  name: 'comic',
  initialState: {
    comics: [],
    page: 0,
    isLoading: false,
  },
  reducers: {
    startLoadingComics: (state) => {
      state.isLoading = true;
    },
    setComics: (state, action) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.comics = action.payload.comics;
    }
  },
})

// Action creators are generated for each case reducer function
export const { startLoadingComics, setComics } = comicSlice.actions