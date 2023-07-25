import React from 'react';
import Cart from '../pages/Cart';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/carts.css';
const Carts = () => {
  const cartItems = useSelector((state) => state.carts);

  if (!cartItems) {
    return <div>Loading...</div>;
  }

  if (!cartItems || cartItems.length === 0) {
    <div className="carts-container">
      <h2>Cartsss</h2>
        <div className="carts-empty">
          <p>Your cart is currrently empty</p>
          <div className="start-shopping">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>Start Shopping</span>
            </Link>
          </div>
          </div>
          </div>
  };

  return (
    <div className="carts-container">
        <h2>Cartsss</h2>
       <div> 
        <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <div className="total">Total</div>
          </div>
          <div className="carts-items">
            {cartItems.map((cartItem) => (
              <div className="carts-item" key={cartItem.id}>
                <div className="carts-product">
                  <img src={cartItem.image} alt={cartItem.name} />
                  <div>
                    <h3>{cartItem.name}</h3>
                    <p>{cartItem.desc}</p>
                    <button>Remove</button>
                  </div>
                </div>
                <div className="carts-product-price">${cartItem.price}</div>
                <div className="carts-product-quantity">
                  <button>-</button>
                  <div className="count">{cartItem.cartQuantity}</div>
                  <button>+</button>
                </div>
                <div className="carts-product-totao-price">
                  ${cartItem.price * cartItem.cartQuantity}
                </div>
              </div>
            ))}
          </div>
          <Carts cartItems={cartItems}/>

          <div className="carts-summary">
            <button className="clear-carts">Clear Cart</button>
            <div className="ckeckout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${cartItems.cartTotalAmount}</span>
              </div>
              <button>Checkout</button>

              <div className="start-shopping">
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Carts;
