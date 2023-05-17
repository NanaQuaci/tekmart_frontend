import React from 'react';
import Header from '../components/Head';
import Navbar from '../components/Navbar';
import Categoriess from '../components/Categoriess';
import CarouselBody from '../components/CarouselBody';
import Profilemanager from '../components/Profilemanager';
import Topsellers from '../components/Topsellers';
import Item from '../components/Item';
import Topcategories from '../components/Topcategories';
import Topdeals from '../components/Topdeals';
import Pricedproduct from '../components/Pricedproduct';
import Hotdeals from '../components/Hotdeals';
import Newarrivals from '../components/Newarrivals';
import Footer1 from '../components/Footer1';
import Footer2 from '../components/Footer2';
import Footer3 from '../components/Footer3';
import Stores from '../components/Stores';
import StoreDescription from '../components/StoreDescription';
import PricedProducts1 from '../components/PricedProducts1';
import ProductPurchase from '../components/ProductPurchase';
import AddPaymentMode from '../components/AddPaymentMode';

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <main className="container-fluid ">
        <div className=" wrapper">
          <div className="row pt-3">
            <div className="col-3">
              <Categoriess className="" />
            </div>
            <div className="col-6">
              <div className="d-flex flex-column">
                <div>
                  <CarouselBody />
                </div>
                <Topsellers />
              </div>
            </div>
            <div className="col-3">
              <Profilemanager />
            </div>
            <div>
              <Topcategories />
            </div>
          </div>
        </div>
        <div>
          <div>
            <Topdeals />
          </div>
          <div className=" wrapper d-flex">
            <Pricedproduct />
            <Pricedproduct />
            <Pricedproduct />
            <Pricedproduct />
            <Pricedproduct />
            <Pricedproduct />
          </div>
          <div>
            <Hotdeals />
          </div>
          <div className="wrapper d-flex">
            <Pricedproduct />
            <Pricedproduct />
            <Pricedproduct />
            <Pricedproduct />
            <Pricedproduct />
            <Pricedproduct />
          </div>

          <div>
            <Newarrivals />
          </div>

          <div className="wrapper d-flex">
            <Pricedproduct />
            <Pricedproduct />
            <Pricedproduct />
            <Pricedproduct />
            <Pricedproduct />
            <Pricedproduct />
          </div>
        </div>
      </main>

      {/*FOOTER*/}

      <div>
        <Footer1 />
      </div>
      <div>
        <Footer2 />
      </div>
      <div>
        <Footer3 />
      </div>

      <div>
        <Stores />
      </div>
      <div>
        <div>
          <StoreDescription />
        </div>
        <div>
          <div className="wrapper d-flex">
            <PricedProducts1 />
            <PricedProducts1 />
            <PricedProducts1 />
            <PricedProducts1 />
            <PricedProducts1 />
            <PricedProducts1 />
          </div>
        </div>
      </div>

      <div>
        <ProductPurchase />
      </div>
      <div>
        <AddPaymentMode />
      </div>
    </div>
  );
};

export default Home;
