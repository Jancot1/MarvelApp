import { createSlice } from '@reduxjs/toolkit';

export const eventSlice = createSlice({
    name: 'event',
    initialState: {
      events: [],
      isLoading: false,
    },
    reducers: {
        startLoadingEvents: (state) => {
          state.isLoading = true;
        },
        setEvents: ( state, action ) => {
          state.isLoading = false,
          state.events = action.payload.events
        }
    }
});
      

// Action creators are generated for each case reducer function
export const { startLoadingEvents, setEvents } = eventSlice.actions;