import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import prod from '../../assets/imgs/prod.jpg';
import '../../styles/product.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import server from '../../server';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../app/feature/userSlice/cartSlice';
// import { useDispatch } from 'react-redux';


const ProductCard = ({product}) => {
  //const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();

  const handleAddToCart =() =>{
    dispatch(addToCart(product));
  }
  
  const [allProducts, setAllProducts] = useState([]);
  const addToCart = async () => {
    try {
      const response = await axios.post('api/cart/add-to-cart/${product.id}');
      setAllProducts(response.data?.data);
      // console.log(response.data);

      toast.success('Product added to cart successfully', {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.error(error);

      toast.error('Error adding product to cart', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  
  const getAllProducts = async () => {
    try {
      const response = await axios.get(`${server}product/new-arrivals`);
      // console.log(response.data?.data);
        setAllProducts(response.data?.data)
      toast.success('Product added to cart successfully', {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.error(error);

      toast.error('Error adding product to cart', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  useEffect(() => {
    getAllProducts();
  }, [])

 console.log(allProducts); 
  return (
    <>
      {allProducts.map((product) => (
      <div className=" col-6 col-md-2 shadow p-3">
        <Link to={'/product-page'} className="text-decoration-none text-black">
          <div>
            <img src={product.images[0] ?? prod} className="w-100" alt="" />
          </div>
          <div className="pt-2">
            <div className="price">GHC {product.price}</div>
            <div className="title pt-1">{product.name}</div>
            <div className="brand text-muted pt-1">Brand - {product.brand}</div>
          </div>
        </Link>

        <div className="my-2">
          <button className="w-100 py-1 btnPrimary" onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
      ))}
    </>
  );
};

export default ProductCard;
