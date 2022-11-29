import { createSlice } from '@reduxjs/toolkit';

export const characterSlice = createSlice({
    name: 'character',
    initialState: {
        characters: [],
        isLoading: false,
    },
    reducers: {
        startLoadingCharacters: (state) => {
            state.isLoading = true;
        },
        setCharacters: (state, action) => {
            state.isLoading = false;
            state.characters = action.payload.characters;
        }
    }
});
      

// Action creators are generated for each case reducer function
export const { startLoadingCharacters, setCharacters } = characterSlice.actions;