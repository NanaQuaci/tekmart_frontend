import React from 'react';
import logo from '../../assets/png/Aser.png';
import profile from '../../assets/imgs/person-circle.svg';
import cart from '../../assets/imgs/cart.svg';
import { Link } from 'react-router-dom';


const SecondHeader = () => {
  return (
    <div className="bg-danger">
      <div className='container-sm'>
        <div className=" col d-flex flex-column flex-md-row justify-content-md-between align-items-md-center py-3">
          <div className="logo col-12 col-md-3">
            <img src={logo} alt="" className="img-fluid" width="140" />
          </div>

          <div className=" col-12 col-md-7">
            <div className="mx-auto input-group">
              <input
                type="text"
                placeholder="Search products, categories and brands.."
                className=" search-input px-3 py-2 w-100 border-0 "
              />
            </div>
          </div>

          <div className="col-12 col-md-2 d-flex justify-content-md-end">
            <div className=" mx-md-4 me-4">
              <Link to="/user-dashboard" >
                <img src={profile} alt="" className="img-fluid fill" width={30} />
              </Link>
            </div>
            <div>
              <Link to="/cart">
                <img src={cart} alt="" className="img-fluid" width={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondHeader;
