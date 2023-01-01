import { createSlice } from '@reduxjs/toolkit';

const tempAlbum = {
  _id: new Date().getTime(),
  title: 'Favoritos',
  type: 'Comics',
}

export const albumSlice = createSlice({
  name: 'album',
  initialState: {
    album: [ tempAlbum ],
    activeAlbum: null
  },
  reducers: {
    onSetActiveAlbum: ( state, { payload } ) => {
      state.activeAlbum = payload;
    },
    onAddNewAlbum: ( state, { payload } ) => {
      state.album.push(payload);
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
      state.activeAlbum = null;
    },
    onClearCurrentAlbum: (state) => {
      state.activeAlbum = null;
    },
  }
});
      

// Action creators are generated for each case reducer function
export const {
  onSetActiveAlbum,
  onAddNewAlbum,
  onUpdateAlbum,
  onDeleteAlbum,
  onClearCurrentAlbum,
} = albumSlice.actions;