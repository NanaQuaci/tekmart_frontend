import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="header py-2" >
      
      <div className="wrapper d-flex justify-content-between">
        <div></div>
        <div className="d-flex">
          <Link to="" className="text-decoration-none">
            Sell on tekmart
          </Link>
          <Link to="" className="text-decoration-none">
            Help
          </Link>
        </div>
      </div>
    </div>


  );
};

export default Header;
