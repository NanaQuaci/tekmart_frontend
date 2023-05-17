import React from 'react';
import Stores from '../components/Stores';
import StoreDescription from '../components/StoreDescription';
import PricedProducts1 from '../components/PricedProducts1';

const SellerPage = () => {
  const data = [1, 2, 3, 4, 5, , 6, 7, 8, 9, 10];

  return (
    <div className>
      <Stores />
      <StoreDescription />
      <div className="store_grid">
        {data.map((item) => (
          <PricedProducts1 />
        ))}
      </div>
      {/* {data.map((item) => (
        <span>
          <PricedProducts1 />
        </span>

      ))} */}
    </div>
  );
};

export default SellerPage;
