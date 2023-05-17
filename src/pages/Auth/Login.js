import React from 'react';
import Input from '../../components/Input';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import logo from '../../assets/png/Aser.png';

const Login = () => {
  return (
    <div className="main-container">
      <div className="d-flex">
        <div className="left">
          <img src={logo} alt="" className="img-fluid" width="200" />
        </div>
        <div className="right">
          <div className="card border-0 login_card">
            <h5>LOG INTO YOUR ACCOUNT</h5>
            <h6>Welcome back</h6>
            <Input
              type="email"
              placeholder="Email Address"
              className=" mt-4"
            />
            <Input type="password" placeholder="Password" className=" mt-4" />
            <div className="d-flex justify-content-between">
              <div></div>
              <a href="" className="text-decoration-none text-secondary my-2">
                Forgot Password
              </a>
            </div>
            <Button btnName="Sign in" />
            <p className="my-3">
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="text-decoration-none my-2"
                style={{ color: 'red' }}
              >
                Sign up Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
