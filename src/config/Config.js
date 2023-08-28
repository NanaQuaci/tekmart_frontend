import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/HomePage';
import { ToastContainer } from 'react-toastify';
import Login from '../pages/auth/Login';
import SignUp from '../pages/auth/SignUp';
import VendorSignup from '../pages/auth/VendorSignup';
import VendorLogin from '../pages/auth/VendorLogin';
import ForgotPassword from '../pages/auth/ForgotPassword';
import ResetPassword from '../pages/auth/ResetPassword';
import VendorForgotPassword from '../pages/auth/VendorForgotPassword';
import VendorResetPassword from '../pages/auth/VendorResetPassword';
import SellerPage from '../pages/SellerPage';

import ProductPage from '../pages/ProductPage';
import Cart from '../pages/Cart';
import 'react-toastify/dist/ReactToastify.css';
import Userdashboard from '../pages/Userdashboard';
import CustomerAddress from '../pages/CustomerAddress';
import AddressBook from '../pages/AddressBook';
import ShoppingCart from '../components/ShoppingCart';

const Config = () => {
  return (
    <BrowserRouter>
    <ToastContainer/>
      <Routes>
        <Route path="/userdashboard" element ={<Userdashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/vendor-signup" element={<VendorSignup />} />
        <Route path="/vendor-login" element={<VendorLogin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/vendor-forgot-password" element={<VendorForgotPassword />} />
        <Route path="/customeraddress" element ={<CustomerAddress />} />
        <Route path="/addressbook" element={<AddressBook />} />
   
        <Route path="/vendor-reset-password" element={<VendorResetPassword />} />
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<SellerPage />} />
        <Route path="/product-page" element={<ProductPage />} />
        <Route path="/shopping-cart" element = {<ShoppingCart />} />
      </Routes>

    </BrowserRouter>
  );
};

export default Config;
