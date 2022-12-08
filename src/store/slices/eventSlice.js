import { createSlice } from '@reduxjs/toolkit';

export const eventSlice = createSlice({
    name: 'event',
    initialState: {
      events: [],
      page: 0,
      isLoading: false,
    },
    reducers: {
        startLoadingEvents: (state) => {
          state.isLoading = true;
        },
        setEvents: ( state, action ) => {
          state.isLoading = false,
          state.page = action.payload.page
          state.events = action.payload.events
        }
    }
});
      

// Action creators are generated for each case reducer function
export const { startLoadingEvents, setEvents } = eventSlice.actions;