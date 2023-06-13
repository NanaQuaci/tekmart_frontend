import React from 'react';
import logo from '../assets/png/Aser.png';
import logo1 from '../assets/png/cart.png';
import logo2 from '../assets/png/account.png';
import Input from './Input';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="navbar_color">
      <div className=" col-4 wrapper main-header d-flex justify-content-between align-items-center py-3">
        <div className="logo ">
          <img src={logo} alt="" className="img-fluid" width="140" />
        </div>

        <div className=" col-7">
          <div className="mx-auto input-group">
            <Input
              type="text"
              placeholder="Search products, categories and brands.."
              className=" searchbar"
            />
          </div>
        </div>
        

        <div className="col-1">
          <Link to="" className="text-decoration px-3">
            <img src={logo2} alt="" className="img-fluid" width="20" />
          </Link>
          {/*
          <Link to="" className="text-decoration">
            Auctions
          </Link> */}
          
          <Link to="/cart" className="text-decoration">
            <img src={logo1} alt="" className="img-fluid" width="20" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
