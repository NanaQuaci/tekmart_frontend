import React from 'react';
import Input from '../components/Input';
import Item2 from './Item2';
import MakePaymentButton from './MakePaymentButton';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './header/Header';

const ShoppingCart = () => {
  return (
    <div>
    <Header />
  
    <Container className="cart-dimension">
    <div className="wrapper">
      <div className="row">
        <div className="card col-8">
          <Container>
            <div className="px-5">
              <strong>SHOPPING CART(5)</strong>
            </div>
            <hr />
            <div className="cart px-5">
              <Input type="checkbox" />
              <strong> Shop One</strong>
            </div>
            <hr />
            <div className="d-flex px-5 justify-content-between align-items-start">
              <div className="d-flex align-items-center">
                <Input type="checkbox" />
                <Item2 />
                <div className="flex-column">
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing...
                  </div>
                  <div
                    className="rounded-pill"
                    style={{
                      backgroundColor: '#ededed',
                      width: 'fit-content',
                      padding: '0 10px',
                    }}
                  >
                    type
                  </div>
                  <div>GHC 200.00</div>
                </div>
              </div>
              <div className="d-flex align-items-end flex-column">
                <div className="">
                  <Input type="checkbox" />
                </div>
                <div>
                  <Link className="text-danger">Free Delivery</Link>
                </div>
              </div>
            </div>
            <hr />
            <div className="cart d-flex px-5 justify-content-between align-items-start">
              <div className="d-flex align-items-center">
                <Input type="checkbox" />
                <Item2 />
                <div className="flex-column">
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing...
                  </div>
                  <div
                    className="rounded-pill"
                    style={{
                      backgroundColor: '#ededed',
                      width: 'fit-content',
                      padding: '0 10px',
                    }}
                  >
                    types
                  </div>
                  <div>GHC 200.00</div>
                </div>
              </div>
              <div className="d-flex align-items-end flex-column">
                <div className="">
                  <Input type="checkbox" />
                </div>
                <div>
                  <Link className="text-danger">Free Delivery</Link>
                </div>
              </div>
            </div>
            <hr />
            <div className="cart px-5">
              <Input type="checkbox" />
              <strong> Shop Two</strong>
            </div>{' '}
            <hr />
            <div className="cart d-flex px-5 justify-content-between align-items-start">
              <div className="d-flex align-items-center">
                <Input type="checkbox" />
                <Item2 />
                <div className="flex-column">
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing...
                  </div>
                  <div
                    className="rounded-pill"
                    style={{
                      backgroundColor: '#ededed',
                      width: 'fit-content',
                      padding: '0 10px',
                    }}
                  >
                    types
                  </div>
                  <div>GHC 200.00</div>
                </div>
              </div>
              <div className="d-flex align-items-end flex-column">
                <div className="">
                  <Input type="checkbox" />
                </div>
                <div>
                  <Link className="text-danger">Delivery for GHC 20.00</Link>
                </div>
              </div>
            </div>
            <hr />
            <div className="cart px-5">
              <Input type="checkbox" />
              <strong> Shop Three</strong>
            </div>
            <hr />
            <div className="cart d-flex px-5 justify-content-between align-items-start">
              <div className="d-flex align-items-center">
                <Input type="checkbox" />
                <Item2 />
                <div className="flex-column">
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing...
                  </div>
                  <div
                    className="rounded-pill"
                    style={{
                      backgroundColor: '#ededed',
                      width: 'fit-content',
                      padding: '0 10px',
                    }}
                  >
                    types
                  </div>
                  <div>GHC 200.00</div>
                </div>
              </div>
              <div className="d-flex align-items-end flex-column">
                <div className="">
                  <Input type="checkbox" />
                </div>
                <div>
                  <Link className="text-danger">Free Delivery</Link>
                </div>
              </div>
            </div>
            <hr />
            <div className="cart d-flex px-5 justify-content-between align-items-start">
              <div className="d-flex align-items-center">
                <Input type="checkbox" />
                <Item2 />
                <div className="flex-column">
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing...
                  </div>
                  <div
                    className="rounded-pill"
                    style={{
                      backgroundColor: '#ededed',
                      width: 'fit-content',
                      padding: '0 10px',
                    }}
                  >
                    types
                  </div>
                  <div>GHC 200.00</div>
                </div>
              </div>
              <div className="d-flex align-items-end flex-column">
                <div className="">
                  <Input type="checkbox" />
                </div>
                <div>
                  <Link className="text-danger">Delivery for GHC 20.00</Link>
                </div>
              </div>
            </div>
          </Container>
        </div>

        <div className="border-0 col-4 d-flex flex-column justify-content-between">
          <Container className="card">
            <div className="cart px-5">
              <strong>SUMMARY(5)</strong>
            </div>{' '}
            <hr />
            <div className="d-flex justify-content-between">
              <div>
                <p>Subtotal</p>
                <p>Delivery Fee</p>
                <p>Discount</p>
                <p>Total</p>
              </div>
              <div className="text-end">
                <p>GHC 800.00</p>
                <p>GHC 100</p>
                <p className="text-danger">-62.00</p>
                <p>838.00</p>
              </div>
            </div>
            <div className="d-flex w-100 py-5">
              <MakePaymentButton />
            </div>
          </Container>

          <Container className="card my-3">
            <div>
              <p>
                <strong>Payment Methods</strong>
              </p>
              <div className="d-flex">
                <p>Type: </p>
                <div>
                  <span>
                    <span className="text-danger">MTN Mobile Money</span>
                  </span>{' '}
                  <br />
                  <span>0555 155 455</span>
                  <br />
                  <span>Seth Gyan</span>
                </div>
              </div>
              <div>
                <Link className="text-danger text-decoration-none">Change</Link>
              </div>
            </div>
            <br />
          </Container>

          <Container className="card my-3">
            <div>
              <span>
                <strong>Delivery Address</strong>
              </span>
              <div>
                <span>Seth Gyan</span> <br />
                <span>0555 155 455</span>
                <br />
                <span>Kentinkrono, Sports Academy</span>
              </div>
              <div>
                <Link className="text-danger text-decoration-none">Change</Link>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
    </Container>
    </div>
  );
};

export default ShoppingCart;
