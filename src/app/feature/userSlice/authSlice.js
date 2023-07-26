import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  signup: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  },
  login: {
    email: '',
    password: '',
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signupAuth: {
      reducer(state, action) {
        state.signup = action.payload;
      },
    },
    loginAuth: {
      reducer(state, action) {
        state.login = action.payload;
      },
    },
  },
});

export const { signupAuth, loginAuth } = authSlice.actions;

export default authSlice.reducer;
