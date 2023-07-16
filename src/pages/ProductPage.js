import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import ProductDetails from '../components/product/ProductDetails'
import ProductSpecs from '../components/product/ProductSpecs'

const ProductPage = () => {
  return (
    <>
      <Header />
      <ProductDetails />
      <ProductSpecs />
      <Footer />
    </>
  )
}

export default ProductPage;
