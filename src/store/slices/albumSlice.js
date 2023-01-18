import { createSlice } from '@reduxjs/toolkit';

export const albumSlice = createSlice({
	name: 'album',
	initialState: {
		album: [],
		activeAlbum: null,
		colections: {},
		activeItem: null
	},
	reducers: {
		loadAlbums: ( state, { payload } ) => {
			state.album = [...payload];
			payload.map((album) => {
				state.colections[album.id] = album.items;
			})
		},
		onSetActiveAlbum: ( state, { payload } ) => {
			state.activeAlbum = payload;
		},
		onAddNewAlbum: ( state, { payload } ) => {
			state.album.push(payload);
			state.colections[payload.id] = [];
		},
		onUpdateAlbum: (state, { payload } ) => {
			state.album = state.album.map( album => {
				if (album.id === payload.id) {
					return payload;
				}

				return album;
			});
			state.activeAlbum = null;
		},
		onDeleteAlbum: ( state, { payload } ) => {
			state.album = state.album.filter( album => album.id !== payload.id);
			delete state.colections[payload.id];
			state.activeAlbum = null;
		},
		onClearCurrentAlbum: (state) => {
			state.activeAlbum = null;
		},
		onSetActiveItem: ( state, { payload } ) => {
			state.activeItem = payload;
		},
		onSavingItem: ( state, { payload } ) => {
			if (state.colections[payload.id]) {
				state.colections[payload.id] = [...payload.items];
				state.album = state.album.map((a) => a.id === payload.id ? payload : a)
			} else {
				state.colections = {
					...state.colections,
					[payload.id]: [...payload.items]
				};
			}
			state.activeItem = null;
		},
		onDeleteItem: ( state, { payload } ) => {
			state.album = state.album.map((album) => album.id === payload.id ? payload : album );
			state.colections[payload.id] = [...payload.items]
		},
		onDeleteItemSelected: (state, {payload}) => {
			if (state.activeItem) {
				state.album = state.album.map((album) => album.id === payload.id ? payload : album );
				state.colections[payload.id] = [...payload.items]
				state.activeItem = null;
			}
		}
	}
});
      

// Action creators are generated for each case reducer function
export const {
	loadAlbums,
	onSetActiveAlbum,
	onAddNewAlbum,
	onUpdateAlbum,
	onDeleteAlbum,
	onClearCurrentAlbum,
	onSetActiveItem,
	onSavingItem,
	onDeleteItem,
	onDeleteItemSelected
} = albumSlice.actions;