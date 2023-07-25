import React from 'react';
import ShoppingCart from '../components/ShoppingCart';
import Carts from '../components/Carts';
import Header from '../components/header/Header';
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {useSelector} from 'react-redux';


// const Cart = () => {
//   const cartItems = useSelector((state) => state.cart.cartItems); // Access cartItems from the Redux store

//   return (
//     <div>
//       <Header />
//       <ShoppingCart />
//       <Carts cartItems={cartItems} /> {/* Pass cartItems as a prop to the Carts component */}
//     </div>
//   );
// };
const initialState = {
  cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")): [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};
const Cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity = +1;
        toast.info(`Increased ${state.cartItems[itemIndex].name} cart quantity`, {
          position: "bottom-left"
        })
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.name} added to cart` , {
          position: "bottom-left",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

  },
}); //=> {

//   return (
//     <div>
//       <Header />
//       <ShoppingCart />
//     </div>
//   )
// }

export const { addToCart } = Cart.actions;

export default Cart.reducer;
