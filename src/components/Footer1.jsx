import React from 'react';
import logo from '../assets/png/Aser.png';

const Footer1 = () => {
  return (
    <div className="bg-black footer ">
      <div className="d-flex justify-content-between align-items-center py-3 container">
        <div className="logo">
          <img src={logo} alt="" className="img-fluid" width="140" />
        </div>
        <div className="paymentmethods">
          <p>PAYMENT METHODS</p>
          <div className="d-flex justify-content-around align-items-center my-3">
            <div className="d-flex flex-column mx-2">
                <div className="minicircles"></div>
            </div>
            <div className="d-flex flex-column mx-2">
                <div className="minicircles"></div>
            </div>
            <div className="d-flex flex-column mx-2">
                <div className="minicircles"></div>
            </div>
            <div className="d-flex flex-column mx-2">
                <div className="minicircles"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
