import { createSlice } from "@reduxjs/toolkit";

//setting up initial values

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

//destructuring that is we are exporting navslice and pulling out these three tings, exporting each action available
export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

//SELECTORS
export const selectOrigin = (state) => state.nav.origin;
//when using this selector, it goes to the select.nav.origin and then returns the data
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
