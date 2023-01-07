import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
      isModalOpen: false,
      isSnackOpen: false
    },
    reducers: {
      onOpenTypeModal: (state) => {
        state.isModalOpen = true;
      },

      onCloseTypeModal: (state) => {
        state.isModalOpen = false;
      },

      onOpenSnackBar: (state) => {
        state.isSnackOpen = true;
      },

      onClouseSnackBar: (state) => {
        state.isSnackOpen = false;
      }
    }
});
      

// Action creators are generated for each case reducer function
export const { onOpenTypeModal, onCloseTypeModal, onOpenSnackBar, onClouseSnackBar } = uiSlice.actions;