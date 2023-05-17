import React from 'react';
import Input from './Input';
import { Link } from 'react-router-dom';

const Stores = () => {
  return (
    <div className="main-header bg-danger d-flex justify-content-between align-items-center py-4 mx-auto">
      <div className="">
        <Link to="" className="text-decoration">
          Category
        </Link>
        <Link to="" className="text-decoration">
          Sale Items
        </Link>
        <Link to="" className="text-decoration">
          Auctions
        </Link>
        <Link to="" className="text-decoration">
          Feedback
        </Link>
      </div>

      <div className="mx-auto">
        <Input
          type="text"
          placeholder="Search"
          className=" searchbar"
        />
        </div>
    </div>
  );
};

export default Stores;
