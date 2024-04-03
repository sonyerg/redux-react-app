import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthenticanted: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticanted = true;
    },
    logout(state) {
      state.isAuthenticanted = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
