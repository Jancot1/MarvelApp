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
    onSetActiveAlbum: ( state, { payload } ) => {
      state.activeAlbum = payload;
    },
    onAddNewAlbum: ( state, { payload } ) => {
      state.album.push(payload);
      state.colections[payload._id] = [];
    },
    onUpdateAlbum: (state, { payload } ) => {
      state.album = state.album.map( event => {
        if (event._id === payload._id) {
          return payload;
        }

        return event;
      });
      state.activeAlbum = null;
    },
    onDeleteAlbum: ( state, { payload } ) => {
      state.album = state.album.filter( album => album._id !== payload._id);
      delete state.colections[payload._id];
      state.activeAlbum = null;
    },
    onClearCurrentAlbum: (state) => {
      state.activeAlbum = null;
    },
    onSetActiveItem: ( state, { payload } ) => {
      state.activeItem = payload;
    },
    onSavingItem: ( state, { payload } ) => {
      if (state.colections[payload.value._id]) {
        state.colections[payload.value._id] = [...state.colections[payload.value._id], payload.item];
      } else {
        state.colections = {
          ...state.colections,
          [payload.value._id]: [payload.item]
        };
      }
      state.activeItem = null;
    },
    onDeleteItem: ( state, { payload } ) => {
      state.colections[payload.value._id] = state.colections[payload.value._id].filter( item => item.id !== payload.item.id);
    },
    onDeleteItemSelected: (state, {payload}) => {
      if (state.activeItem) {
        state.colections[payload.value] = state.colections[payload.value].filter( item => item.id !== payload.item.id);
        state.activeItem = null;
      }
    }
  }
});
      

// Action creators are generated for each case reducer function
export const {
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