import React from 'react';
import logo from '../../assets/imgs/logo-white.svg';
import { Link,  } from 'react-router-dom';
import '../../styles/header.css';



const SecondHeader = () => {
  return (
    <div className="bgRed">
      <div className='container-sm'>
        <div className=" col d-flex flex-column flex-md-row justify-content-md-between align-items-md-center py-3">
          <div className="logo col-12 col-md-3">
            <Link to='/'>
              <img src={logo} alt="" className="img-fluid" width="140" />
            </Link>
          </div>

          <div className=" col-12 col-md-7">
            <div className="mx-auto input-group d-flex">
              <input type="text" className="search-input px-3 py-2  border-0" style={{ width: '85%' }}
                placeholder="Search products, categories and brands.." aria-label="Recipient's username" aria-describedby="button-addon2" />
              
              <button class="btn bgGrey border border-white rounded-0" style={{ width: '15%' }} type="button" id="button-addon2">
                <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" fill='#fff' viewBox="0 0 512 512">
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="col-12 col-md-2 d-flex justify-content-md-end">
            <div className=" mx-md-4 me-4">
              <Link to="/userdashboard" >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" class="bi bi-person" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                </svg>
              </Link>
            </div>
            <div>
              <Link to="/cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#fff" class="bi bi-cart2" viewBox="0 0 16 16">
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondHeader;
