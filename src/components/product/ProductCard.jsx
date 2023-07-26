import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import prod from '../../assets/imgs/prod.jpg';
import '../../styles/product.css';
// import { useDispatch } from 'react-redux';

const ProductCard = ({ product }) => {
  //const { data, error, isLoading } = useGetAllProductsQuery();
  // const dispatch = useDispatch();

  return (
    <>
      <div className="col-6 col-md-2 shadow p-3">
        <Link to={'/product-page'} className="text-decoration-none text-black">
          <div>
            <img src={prod} className="w-100" alt="" />
          </div>
          <div className="pt-2">
            <div className="price">GHC 200.00</div>
            <div className="title pt-1">Gas Smoker For Big Mansions...</div>
            <div className="brand text-muted pt-1">Brand - Sahil</div>
          </div>
        </Link>

        <div className="my-2">
          <button className="w-100 py-1 btnPrimary">Add to cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
