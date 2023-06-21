import React, { useState } from 'react';
import Input from '../../components/Input';
import { Form, Link, useSubmit } from 'react-router-dom';
import { Formik, useFormik } from 'formik';
import Button from '../../components/Button';
import logo from '../../assets/png/Aser.png';
import { useNavigate, useHistory } from 'react-router-dom';

const Login = () => {
  const formik =useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      password: "",
    },
  })
  const navigate = useNavigate();

  const handleSubmit = () => {
    const username = document.getElementById('username')?.value;
    const password = document.getElementById('password')?.value;
    //const history = useHistory();
    // Check that username and password fields are not empty
    if (!username || !password) {
      alert('Please enter both a username and password.');
      return;
    }

    // Check that password meets complexity requirements
    if (
      password.length < 8 ||
      !/\d/.test(password) ||
      !/[a-zA-Z]/.test(password)
    ) {
      alert(
        'Password must be at least 8 characters long and contain both letters and numbers.'
      );

      console.log('Login succes');
      navigate('/');
    }
  };
  return (
    <div className="main-container">
      <div className="d-flex">
        <div className="left">
          <img src={logo} alt="" className="img-fluid" width="200" />
        </div>
        <div className="right ">
          <form onSubmit={handleSubmit}>
            <div className="card border-0 login_card">
              <h5>LOG INTO YOUR ACCOUNT</h5>
              <h6>Welcome back</h6>
              <Input
                type="email"
                placeholder="Email Address"
                className=" mt-4"
                onChange={() => formik.handleChange('email')}
              />
              <Input type="password" placeholder="Password" className=" mt-4" />
              <div className="d-flex justify-content-between">
                <div></div>
                <a href="" className="text-decoration-none text-secondary my-2">
                  Forgot Password
                </a>
              </div>
              <Button btnName="Sign in" type="submit" />
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
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
