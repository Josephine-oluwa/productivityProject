import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainState: "" || null,
  adminState: "" || null,
  toggle: false,
};

const GlobalState = createSlice({
  name: "state",
  initialState,
  reducers: {
    user: (state, { payload }) => {
      state.mainState = payload;
    },
    logOut: (state) => {
      state.mainState = null;
    },
    admin: (state, { payload }) => {
      state.adminState = payload;
    },
    adminlogOut: (state) => {
      state.adminState = null;
    },
    ontoggle: (state, { payload }) => {
      state.toggle = payload;
    },
  },
});

export const { user, logOut, ontoggle , adminlogOut, admin} = GlobalState.actions;

export default GlobalState.reducer;
