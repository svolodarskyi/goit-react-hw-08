import { createSlice } from '@reduxjs/toolkit';

import {
  loginThunk,
  logoutThunk,
  refreshUserThunk,
  registerThunk,
} from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggenIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        // state.email = action.payload.email;
        state.token = action.payload.token;
        state.isLoggenIn = true;
      })
      .addCase(logoutThunk.fulfilled, (state, action) => {
        return initialState;
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.name = action.payload.email;
        state.isRefreshing = false;
        state.isLoggenIn = true;
      })
      .addCase(refreshUserThunk.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUserThunk.rejected, (state, action) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = slice.reducer;
