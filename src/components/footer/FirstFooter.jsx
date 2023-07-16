import React from 'react';
import logo from '../../assets/png/Aser.png';

const FirstFooter = () => {
    return (
        <>
            <div className="bgPrimary">
                <div className=' container-sm'>
                    <div className="d-flex flex-column justify-content-between align-items-center
                     py-3 border-bottom flex-md-row">
                        <div className="logo my-4 my-md-0">
                            <img src={logo} alt="" className="img-fluid" width="140" />
                        </div>
                        <div className="paymentmethods my-4 my-md-0">
                            <p>PAYMENT METHODS</p>
                            <div className="d-flex justify-content-around align-items-center my-3">
                                <div className="d-flex flex-column me-2">
                                    <div className="minicircles"></div>
                                </div>
                                <div className="d-flex flex-column me-2">
                                    <div className="minicircles"></div>
                                </div>
                                <div className="d-flex flex-column me-2">
                                    <div className="minicircles"></div>
                                </div>
                                <div className="d-flex flex-column me-2">
                                    <div className="minicircles"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FirstFooter;
