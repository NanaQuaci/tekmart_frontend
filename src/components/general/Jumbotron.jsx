import React from 'react'

const Jumbotron = () => {
    return (
        <div className="bg-danger text-white jumbo d-flex">
            <div className="container-sm py-5 d-flex align-self-center">
                <div className=''>
                    <h1>
                        Best products & <br />
                        brands in our store
                    </h1>
                    <p>
                        Trendy Products, Factory Prices, Excellent Service
                    </p>
                    <button type="button" className="me-3 btn btn-outline-light">
                        Learn more
                    </button>
                    <button type="button" className="btn btn-light shadow-0 text-primary pt-2 border border-white">
                        Purchase now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron
