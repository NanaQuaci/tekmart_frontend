import React from 'react'
import { Link } from 'react-router-dom';
import prod from '../../assets/imgs/prod.jpg'

const ProductCard = () => {
    return (
        <>
            <div className="col-2 border border-danger p-3">
                <Link className="text-decoration-none" to="/product-page">
                    <div>
                        <img src={prod} className='w-100' alt='' />
                    </div>
                    <div className="text-black">
                        <span className="space">Gas Smoker For Big Mansions.</span><br />
                        <span>Brand - Sahil</span>
                        <p className="price">GHC 200.00</p>

                        <div className="paymentmode d-flex justify-content-between mx-2">
                            <span>Paid Delivery</span>
                            <span className="addtocart">Add to Cart</span>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default ProductCard
