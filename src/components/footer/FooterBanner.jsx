import React from 'react'

const FooterBanner = () => {
    return (
        <div className='bgSecondary mt-5'>
            <div className='container-sm d-flex text-white flex-column justify-content-between
          flex-md-row'>
                <div className='d-flex flex-column align-items-center p-4'>
                    <div className='minicircle'></div>
                    <div>
                        Excelent Services
                    </div>
                    <div className='text-center' style={{ color: "grey" }}>
                        Some quick example text to build on the
                        card title and make up the bulk of the card's content.
                    </div>
                </div>

                <div className='d-flex flex-column align-items-center p-4'>
                    <div className='minicircle'></div>
                    <div>
                        Grow your market
                    </div>
                    <div className='text-center' style={{ color: "grey" }}>
                        Some quick example text to build on the
                        card title and make up the bulk of the card's content.
                    </div>
                </div>

                <div className='d-flex flex-column align-items-center p-4'>
                    <div className='minicircle'></div>
                    <div>
                        Launch time
                    </div>
                    <div className='text-center' style={{ color: "grey" }}>
                        Some quick example text to build on the
                        card title and make up the bulk of the card's content.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterBanner
