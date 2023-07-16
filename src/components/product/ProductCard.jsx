import React from 'react'
import { Link } from 'react-router-dom';
import prod from '../../assets/imgs/prod.jpg'

const ProductCard = () => {
    return (
        <>
            <Link className="navbar-item text-decoration-none" to="/product-page">

                <div className="card m-1 border-0 rounded-0 item_card_container p-3">
                    <div>
                        <img src={ prod} width={300} />
                    </div>
                    <div className="text-decoration-none text-black">
                        <span className="space">Gas Smoker For Big Mansions.</span><br />
                        <span>Brand - Sahil</span>
                        <p className="price">GHC 200.00</p>

                        <div className="paymentmode d-flex justify-content-between mx-2">
                            <span>Paid Delivery</span>
                            <span className="addtocart">Add to Cart</span>
                        </div>
                    </div>
                </div>
            </Link></>
    );
}

export default ProductCard
