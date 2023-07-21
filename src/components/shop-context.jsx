import React, { createContext, useState } from 'react'
import { Products } from '../pages/Products';
export const ShopContext = createContext();

const getInitialCart = () =>{
    let cart ={}
    for (let i=1; i<Products.length; i++){
        cart[i] =0;
    }
    return cart;
};
export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getInitialCart());

    const addToCart =(itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1  }))
    }

    const removeFromCart =(itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1  }))
    }

    const contextValue = {cartItems, addToCart, removeFromCart };

    console.log(cartItems)

  return (
    <ShopContext.Provider value={ contextValue }>
    
    {props.children}
  </ShopContext.Provider>
  );
};

//export default shop-context