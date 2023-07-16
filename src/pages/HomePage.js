import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Jumbotron from '../components/general/Jumbotron';
import ProductCard from '../components/product/ProductCard';

const Home = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      <Jumbotron />

      <ProductCard />

      {/*FOOTER*/}
      <div>
        <Footer />
      </div>
    </div>

  );
};

export default Home;