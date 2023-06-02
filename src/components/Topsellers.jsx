import React from 'react';
import Item from './Item';

const Topsellers = () => {
  return (
    <div className="card my-2 border-0 rounded-0">
      <h3 className="h3">TOP SELLERS</h3>
      <div className="top_grid mx-auto py-2">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default Topsellers;
