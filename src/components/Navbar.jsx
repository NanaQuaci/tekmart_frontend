import React from 'react';
import logo from '../assets/png/Aser.png';
import Input from './Input';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-danger">
      <div className="wrapper main-header d-flex justify-content-between align-items-center py-3">
        <div className="logo ">
          <img src={logo} alt="" className="img-fluid" width="140" />
        </div>

        <div className="mx-auto">
          <Input
            type="text"
            placeholder="Search products, categories and brands.."
            className=" searchbar"
          />
        </div>
        <div className="">
          <Link to="" className="text-decoration">
            Account
          </Link>
          <Link to="" className="text-decoration">
            Auctions
          </Link>
          <Link to="" className="text-decoration">
            Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
