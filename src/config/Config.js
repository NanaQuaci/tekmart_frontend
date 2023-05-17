import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Auth/Login';
import SignUp from '../pages/Auth/SignUp';
import SellerPage from '../pages/SellerPage';
import ProductPage from '../pages/ProductPage';

const Config = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/store" element={<SellerPage />} />
        <Route path="/product-page" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Config;
