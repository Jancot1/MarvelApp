import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
      isModalOpen: false
    },
    reducers: {
      onOpenTypeModal: (state) => {
        state.isModalOpen = true;
      },

      onCloseTypeModal: (state) => {
        state.isModalOpen = false;
      },
    }
});
      

// Action creators are generated for each case reducer function
export const { onOpenTypeModal, onCloseTypeModal } = uiSlice.actions;