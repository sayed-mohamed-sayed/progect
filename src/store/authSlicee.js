import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isloadings: false,
    name: "sayed mohamed",
  },
  reducers: {
    logout: (state) => {
state.isloadings=!state.isloadings
        console.log("lolo");
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
