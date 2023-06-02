import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="header py-1" >
      
      <div className="wrapper d-flex justify-content-between">
        <div></div>
        <div className="d-flex">
          <Link to="/businessaccountsignup" className="text-decoration-none px-4 text-black">
            <strong>Sell on tekmart</strong>
          </Link>
          <Link to="" className="text-decoration-none text-black">
            <strong>Help</strong>
          </Link>
        </div>
      </div>
    </div>


  );
};

export default Header;
