import React from 'react'
import Input from '../../components/Input';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import logo from '../../assets/png/Aser.png';


const BusinessAccSignup = () => {
  return (
    <div className="main-container">
      <div className="d-flex">
        <div className="right">
          <div className="card border-0 login_card">
            <h5>HELLO!</h5>
            <h6>Create your business account</h6>
            <div className="d-flex signup_input">
              <Input
                type="text"
                placeholder="First Name"
                className=" mt-4 inp"
              />
              <Input
                type="text"
                placeholder="Last Name"
                className=" mt-4 inp"
              />
            </div>
            <Input type="email" placeholder="Email Address" className=" mt-4" />
            <Input type="password" placeholder="Password" className=" mt-4" />
            <div className="d-flex justify-content-between">
              <div className="my-3">
                <Input type="checkbox" /> I have read the{' '}
                <a
                  href="www.google.com"
                  className="text-decoration-none text-secondary"
                >
                  Terms and Conditions
                </a>
              </div>
            </div>
            <Button btnName="Sign up" />
            <p className="my-3">
              Already got a business account?{' '}
              <Link
                to="/businessaccountlogin"
                className="text-decoration-none my-2"
                style={{ color: 'red' }}
              >
                Sign in to Business Account
              </Link>
            </p>
          </div>
        </div>
        <div className="left">
          <img src={logo} alt="" className="img-fluid" width="200" />
        </div>
      </div>
    </div>
  )
}

export default BusinessAccSignup
