import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Jumbotron from '../components/general/Jumbotron';
import ProductCard from '../components/product/ProductCard';
import Carts from '../components/Carts';

const Home = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      <Jumbotron />

      <div className='container-sm'>
        <ProductCard />
      </div>

      {/*FOOTER*/}
      <div>
        <Footer />
      </div>
    </div>

  );
};

export default Home;
