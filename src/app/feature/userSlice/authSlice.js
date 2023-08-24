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
  userauth: sessionStorage.getItem('credentials')
    ? JSON.parse(sessionStorage.getItem('credentials'))
    : null,
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
    setCredentials: {
      reducer(state, action) {
        state.userauth = action?.payload;
        sessionStorage.setItem('credentials', JSON.stringify(action?.payload));
      },
    },
  },
});

export const { signupAuth, loginAuth, setCredentials } = authSlice.actions;

export const userinfo = (state) => state?.auth?.userauth;
export const token = (state) => state?.auth?.userauth?.token;

export default authSlice.reducer;
