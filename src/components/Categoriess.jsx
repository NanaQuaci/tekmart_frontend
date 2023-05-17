import React from 'react';
import { Link } from 'react-router-dom';

const Categoriess = () => {
  return (
    <div className="card categories border-0 rounded-0 p-3">
      <ul className="list d-flex flex-column ">
        {/* <li>Categories</li> */}
        <Link to="" className='item_link'>Computing</Link>
        <Link to="" className='item_link'>Food</Link>
        <Link to="" className='item_link'>Fashion</Link>
        <Link to="" className='item_link'>Shoes</Link>
        <Link to="" className='item_link'>Shirts</Link>
        <Link to="" className='item_link'>Tablets</Link>
        <Link to="" className='item_link'>Phones</Link>
        <Link to="" className='item_link'>Health</Link>
        <Link to="" className='item_link'>Sports</Link>
        <Link to="" className='item_link'>Farm</Link>
        <Link to="" className='item_link'>Electronics</Link>
        <Link to="" className='item_link'>Stationery</Link>
        <Link to="" className='item_link'>Provisions</Link>
      </ul>
    </div>


  );
};

export default Categoriess;
