import React from 'react';
import Item1 from './Item1';
import { Link, NavLink } from 'react-router-dom';
const Pricedproduct = () => {
  return (
    <Link
      className="navbar-item"
      activeClasssName ="is-active"
      to="/product-page">

    <div className="card m-1 border-0 rounded-0 item_card_container p-3">
      <div>
        <Item1 />
      </div>
      <div>
        <p className="price">GHC 200.00</p>
        <p className="space">Gas Smoker For Big Mansions...</p>

        <div className="paymentmode d-flex justify-content-between mx-2">
          <p>Paid Delivery</p>
          <p>Pick Up</p>
        </div>
      </div>
      <p></p>
      <p></p>
    </div>
    </Link>
  );
};

export default Pricedproduct;
