import { createSlice } from "@reduxjs/toolkit";
let initialState = {
  groupSelected: ""
}

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    roomSelected: {
      reducer(state, action) {
        const roomSelected = action.payload;
        state.groupSelected = roomSelected
      },
    },
  },
});

export const selectRoom = (state) => state.room;

export const { roomSelected } = roomSlice.actions;

export default roomSlice.reducer;
