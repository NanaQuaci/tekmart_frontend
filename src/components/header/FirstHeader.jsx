import React from 'react';
import { Link } from 'react-router-dom';


const FirstHeader = () => {
  return (
    <div className="header py-1 bg-white" >
      <div className="container-sm d-flex justify-content-between">
        <div></div>
        <div className="d-flex">
          <div>
            <Link to="/vendor-signup" className="text-decoration-none px-4 text-black">
              Sell on tekmart
            </Link>
          </div>
          <div>
            <Link to="/help" className="text-decoration-none text-black">
              Help
            </Link>
          </div>
        </div>
      </div>
    </div>


  );
};

export default FirstHeader;
