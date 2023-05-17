import React from 'react'
import ProductPurchase from '../components/ProductPurchase'
import Footer1 from '../components/Footer1'
import Footer2 from '../components/Footer2'
import Footer3 from '../components/Footer3'
import Navbar from '../components/Navbar'

const ProductPage = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <ProductPurchase />
      </div>
      <Footer1/>
      <Footer2/>
      <Footer3/>
    </div>
  )
}

export default ProductPage;
