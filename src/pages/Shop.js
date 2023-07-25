import React from 'react';
import { Products } from './Products';
import ProductCard from '../components/product/ProductCard';

const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <div className="products">
          {''}
          {Products.map((product) => (
            <ProductCard data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
