import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Jumbotron from '../components/general/Jumbotron';
import ProductCard from '../components/product/ProductCard';
import Carts from '../components/Carts';
import ShoppingCart from '../components/ShoppingCart';
import { useSelector } from 'react-redux';

const Home = () => {
  
  return (
    <div>
      {/* Header */}
      <Header />

      <Jumbotron />

      <div className='container-sm d-flex flex-wrap gap-3 p-3'>
        <ProductCard />
        {/* <ProductCard /> */}
      </div>

      {/*FOOTER*/}
      <div>
        <Footer />
      </div>
    </div>

  );
};

export default Home;
