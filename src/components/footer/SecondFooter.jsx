import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/footer.css'

const SecondFooter = () => {
  return (
    <>
      <div className='bgPrimary'>
        <div className='container-sm'>
          <div className='py-md-5 text-white d-flex flex-column justify-content-between flex-md-row'>

            {/* FIrst Links */}
            <div className='d-flex flex-column mb-3 mt-5 mt-md-3'>
              <div>
                Quick Link
              </div>
              <div className='flex flex-column text-info'>
                <div>
                  <Link to={'/'} className="text-decoration-none" style={{ color: "grey" }} >Home</Link>
                </div>
                <div>
                  <Link to={'/'} className="text-decoration-none" style={{ color: "grey" }}>Who We Are</Link>
                </div>
                <div>
                  <Link to={'/'} className="text-decoration-none" style={{ color: "grey" }}>Sevices</Link>
                </div>
              </div>
            </div>

            {/* Second Links */}
            <div className='d-flex flex-column my-3'>
              <div>
                Quick Link
              </div>
              <div className='flex flex-column text-info'>
              <div>
                  <Link to={'/'} className="text-decoration-none" style={{ color: "grey" }} >Home</Link>
                </div>
                <div>
                  <Link to={'/'} className="text-decoration-none" style={{ color: "grey" }}>Who We Are</Link>
                </div>
                <div>
                  <Link to={'/'} className="text-decoration-none" style={{ color: "grey" }}>Sevices</Link>
                </div>
              </div>
            </div>

            {/* Third Links */}
            <div className='d-flex flex-column my-3'>
              <div>
                Quick Link
              </div>
              <div className='flex flex-column text-info'>
              <div>
                  <Link to={'/'} className="text-decoration-none" style={{ color: "grey" }} >Home</Link>
                </div>
                <div>
                  <Link to={'/'} className="text-decoration-none" style={{ color: "grey" }}>Who We Are</Link>
                </div>
                <div>
                  <Link to={'/'} className="text-decoration-none" style={{ color: "grey" }}>Sevices</Link>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className='d-flex flex-column my-3'>
              <div>
                Subscribe to our newsletter for the latest update
              </div>
              <div className='d-flex flex-row mt-2'>
                <div className='me-1'>
                  <input type='text' placeholder='Email address' className='p-2' />
                </div>
                <div>
                  <button className='py-2 px-3 subscribe'>Subscribe</button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      
      {/* Copyright #020617*/}

      <div className='bgTertiary'>
        <div className='container-sm'>
          <div div className="text-white py-4 text-center align-items-center">
            All rights reserved and copyrighted &copy;2023
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondFooter;
