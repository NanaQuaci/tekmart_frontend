import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductPurchase from './ProductPurchase';


const Item = (size, color) => {
    const style ={
        width: '5rem',
        height: '5rem',
        backgroundColor: "khaki",

    }

    const App =() => {
      const[selectedItem, setSelectedItem] = useState(null);
    }

  return (

    <div style={style}>
        
    </div>
  );
};

export default Item;
