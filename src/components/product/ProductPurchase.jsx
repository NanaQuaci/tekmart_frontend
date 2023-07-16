import React from 'react';
import Item2 from '../Item2';
import { Container } from 'reactstrap';
import RatingItem from '../RatingItem';
import RatingItem1 from '../RatingItem1';
import Specification from './ProductSpecs';
import { Link } from 'react-router-dom';

const ProductPurchase = () => {
  return (
    <div className="wrapper bg-white">
      <div className="row">
        <div className="col-4">
          <div className="purchase-card"></div>
          <br />
          <div className="top_grid1 mx-auto p-2">
            <Item2 />
            <Item2 />
            <Item2 />
            <Item2 />
            <Item2 />
          </div>
        </div>
        <div className="col-8">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            molestias quisquam repellat.
          </div>
          <div className="d-flex">
            <RatingItem />
            <RatingItem />
            <RatingItem />
            <RatingItem />
            <RatingItem1 />
            <span>(4.0)</span>
          </div>
          <p>
            <strong>GHC 1000.00</strong>
          </p>
          <div>
            <p>Quantity</p>
            <div className="d-flex">
              <div>
                <button className="btn btn-outline-primary rounded">-</button>
              </div>
              <input type="text" style={{ width: '40px' }} />
              <div>
                <button
                  className="btn btn-outline-primary rounded"
                  style={{ marginRight: '0.5rem' }}
                >
                  +
                </button>
              </div>
              <div style={{ color: 'red' }}>1 unit available</div>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe est
              laudantium ipsa necessitatibus quo mollitia aut dicta aliquid
              vitae illum dolorum nihil, dolor iste recusandae nam enim tempora
              debitis quod deleniti quos eaque? Voluptates ex, repudiandae
              pariatur itaque aut aspernatur!
            </p>
          </div>
          <div className="d-flex ">
            <div>
              <button
                className=" text-decoration  d-flex justify-content-center border-0 p-2 px-4 rounded-pill "
                style={{ color: 'white', backgroundColor: 'red' }}
              >
                {' '}
                Buy Now{' '}
              </button>
            </div>
            <div>
              <button
                className=" text-decoration  d-flex justify-content-center border-0 p-2 px-4 rounded-pill"
                style={{ color: 'red' }}
              >
                {' '}
                Add to Cart{' '}
              </button>
            </div>
          </div>
          <div className="text-decoration p-3" style={{ color: 'red' }}>
            <Link to="/Store">View Shop</Link>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <Specification />
      </div>
    </div>
  );
};

export default ProductPurchase;
