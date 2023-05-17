import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/png/Aser.png';
import { Container, Input } from 'reactstrap';

const Footer2 = () => {
  return (
    <div className="row bg-dark  help-and-info">
      <div className="col">
        <span className="help-and-info">HELP AND INFORMATION</span>
        <Link to="" className=" help-and-info">
          Some Link
        </Link>
        <br />
        <Link to="" className="help-and-info">
          Some Link
        </Link>
        <br />
        <Link to="" className="help-and-info">
          Some Link
        </Link>
        <br />
        <Link to="" className="help-and-info">
          Some Link
        </Link>
        <br />
        <Link to="" className="help-and-info">
          Some Link
        </Link>
        <br />
        <p></p>
        <Link to="" className="help-and-info">
          Some Link
        </Link>
        <br />
        <Link to="" className="help-and-info">
          Some Link
        </Link>
        <br />
        <Link to="" className="help-and-info">
          Some Link
        </Link>
        <br />
        <Link to="" className="help-and-info">
          Some Link
        </Link>
        <br />
        <Link to="" className="help-and-info">
          Some Link
        </Link>
        <br />
      </div>
      <div className="col">
        <div className="bg-dark help-and-info">
          <span className="help-and-info">REFERENCES</span>
          <br />
          <Link to="" className="help-and-info">
            Some Link
          </Link>
          <br />
          <Link to="" className="help-and-info">
            Some Link
          </Link>
          <br />
          <Link to="" className="help-and-info">
            Some Link
          </Link>
          <br />
          <Link to="" className="help-and-info">
            Some Link
          </Link>
          <br />
          <Link to="" className="help-and-info">
            Some Link
          </Link>
          <br />
          <Link to="" className="help-and-info">
            Some Link
          </Link>
          <br />
          <Link to="" className="help-and-info">
            Some Link
          </Link>
          <br />
        </div>
        <br />
        <div className="col">
          <span className="help-and-info">ACCOUNT</span>
          <br />
          <Link to="" className="help-and-info">
            Some Link
          </Link>
          <br />
          <Link to="" className="help-and-info">
            Some Link
          </Link>
          <br />
        </div>
      </div>

      <div className="col">
        <div className="help-and-info">
          <Container className="w-75">
            <div className="help-and-info">SOCIAL MEDIA</div>
            <div className="d-flex justify-content-between align-items-center py-3 container">
              <div className="paymentmethods">
                <div className="d-flex justify-space-between align-items-center my-3">
                  <div className="d-flex flex-column mx-2">
                    <div className="minicircles"></div>
                  </div>
                  <div className="d-flex flex-column mx-2">
                    <div className="minicircles"></div>
                  </div>
                  <div className="d-flex flex-column mx-2">
                    <div className="minicircles"></div>
                  </div>
                  <div className="d-flex flex-column mx-2">
                    <div className="minicircles"></div>
                  </div>
                </div>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              consequuntur sunt pariatur. Ipsa tenetur commodi fugit. Similique
              quia unde repellat eius!
            </p>
            <div className="d-flex">
              <Input />
              <button className="btn btn-outline-light mx-2 px-4
              
              
              
              ">Send</button>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
