import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
        state.cartItems.push(action.payload)
      // Logic to add item to cart
    },
    removeFromCart: (state, action) => {
      // Logic to remove item from cart
    },
    // Other cart-related actions
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
