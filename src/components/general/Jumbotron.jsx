import React from 'react'

const Jumbotron = () => {
    return (
        <div className="bgRed text-white jumbo d-flex">
            <div className="container-sm py-5 d-flex align-self-center">
                <div className=''>
                    <h1>
                        Best products & <br />
                        brands in our store
                    </h1>
                    <p>
                        Trendy Products, Factory Prices, Excellent Service
                    </p>
                    <button className="me-3 py-2 px-3 jumboPriBtn">
                        Learn more
                    </button>
                    <button className="py-2 px-3 jumboSecBtn">
                        Purchase now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron
