import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import cartReducer from './feature/userSlice/cartSlice';
import authReducer from './feature/userSlice/authSlice';
import cartSlice from './feature/userSlice/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
