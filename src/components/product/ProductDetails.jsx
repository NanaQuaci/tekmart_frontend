import React from 'react'
import { Link } from 'react-router-dom'
import prod from '../../assets/imgs/prod.jpg'
import '../../styles/product.css'

const ProductDetails = () => {
    return (
        <>
            <div className="py-5 my-2">
                <div className="container-sm shadow p-5 bg-white">
                    <div className="row gx-5">

                        {/* Image left */}
                        <div className="col-lg-4">
                            <div className="shadow  border border-danger mb-3 d-flex justify-content-center">
                                <img style={{ maxWidth: '100%', maxHeight: '100vh', margin: 'auto' }} className="fit" src={prod} />
                            </div>
                            <div className="d-flex justify-content-center mb-3">
                                <div className="border mx-1 border-danger item-thumb" >
                                    <img width="60" height="60" src={prod} />
                                </div>
                                <div className="border mx-1 border-danger item-thumb" >
                                    <img width="60" height="60" src={prod} />
                                </div>
                                <div className="border mx-1 border-danger item-thumb" >
                                    <img width="60" height="60" src={prod} />
                                </div>
                                <div className="border mx-1 border-danger item-thumb" >
                                    <img width="60" height="60" src={prod} />
                                </div>
                            </div>


                        </div>

                        {/* Details */}
                        <div className="col-lg-8">
                            <div className="ps-lg-3">
                                <h4 className="text-dark">
                                    Quality Men's Hoodie for Winter, Men's Fashion
                                    Casual Hoodie
                                </h4>

                                {/* Price */}
                                <div className="mb-3">
                                    <span className="h5">GHc 75.00</span>
                                </div>

                                {/* Description */}
                                <p>
                                    Modern look and quality demo item is a streetwear-inspired collection that continues to break
                                    away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for
                                    men.
                                </p>

                                {/* Category, brand and color */}
                                <div className="row">
                                    <dt className="col-2">Color:</dt>
                                    <dd className="col-10">Black</dd>

                                    <dt className="col-2">Category:</dt>
                                    <dd className="col-10">Cotton, Jeans</dd>

                                    <dt className="col-2">Brand:</dt>
                                    <dd className="col-10">Reebook</dd>
                                </div>

                                {/* Divider */}
                                <hr />

                                {/* Quantity */}
                                <div className="row mb-5">
                                    <div className="col-md-4 col-6">
                                        <label className="mb-2 d-block">Quantity</label>
                                        <div className="input-group" style={{ width: '150px' }}>

                                            <button className="btn btn-white border border-secondary rounded-0 px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                                    <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                                                </svg>
                                            </button>

                                            <input type="text" className="form-control text-center border rounded-0 border-secondary"
                                                placeholder="14" aria-label="Example text with button addon" aria-describedby="button-addon1" />

                                            <button className="btn btn-white border border-secondary rounded-0 px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                                                </svg>
                                            </button>

                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <button type="button" className="px-3 py-2 me-md-3 btnPrimary">
                                        Buy now
                                    </button>

                                    <button type="button" className="px-3 py-2 btnSecondary">
                                        Add to cart
                                    </button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails
