import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
	name: 'search',
	initialState: {
		results: [],
		isSearching: false,
	},
	reducers: {
		startSearching: (state) => {
			state.isSearching = true;
		},
		setResults: (state, action) => {
			state.isSearching = false,
			state.results = action.payload;
		},
		clearResults: (state) => {
			state.results = [];
		}
	}
});
      

// Action creators are generated for each case reducer function
export const { startSearching, setResults, clearResults } = searchSlice.actions;