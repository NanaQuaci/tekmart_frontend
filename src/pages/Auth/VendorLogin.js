import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import redLogo from '../../assets/imgs/logo-red.svg';
import whiteLogo from '../../assets/imgs/logo-white.svg';
import axios from '../../api/axios';
import server from '../../server';


const BusinessAccLogin = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {

    try {
      const response = await axios.post(`${server}vendor/login`, {
        // method: 'POST',
        // headers: {
        //   'Content-Type': 'application/json',
        // },
        // body: JSON.stringify(values),
        ...values,
      });
      console.log(response.data);
      if (response.data) {
        // Authentication successful
        // Perform your login logic here using values.email and values.password
        console.log('Login success');
        // navigate('/');
      } else {
        // Authentication failed
        const error = await response.data();
        console.log('Login failed:', error);
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login');
    } finally {
      setSubmitting(false);
    }

  };


  return (
    <div className="main-container">
      <div className="d-flex">
        {/*  */}
        <div className="right my-5 my-md-0">
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ isSubmitting }) => (
              <Form>
                
                <div className='d-flex justify-content-center mb-3 mb-md-0 red-logo'>
                  <img src={redLogo} alt="" className="img-fluid" width="200" />
                </div>

                <div className="bg-white p-4 p-md-5 shadow">
                  <div className='d-flex flex-column text-center'>
                    <div className='text-bold'>LOG INTO YOUR ACCOUNT</div>
                    <div className='text-muted'>Welcome back</div>
                  </div>

                  <div className="form-group mt-4">
                    <Field type="email" name="email" placeholder="Email Address" className="px-3 py-2 w-100" />
                    <ErrorMessage name="email" component="div" className="text-danger" />
                  </div>

                  <div className="form-group mt-4">
                    <Field type="password" name="password" placeholder="Password" className="px-3 py-2 w-100" />
                    <ErrorMessage name="password" component="div" className="text-danger" />
                  </div>

                  <div className="d-flex justify-content-between">
                    <div></div>
                    <Link to="/forgot-password" className="text-decoration-none text-secondary my-2">
                      Forgot Password
                    </Link>
                  </div>

                  <button type="submit" disabled={isSubmitting} className='w-100 py-2 auth-btn'>
                    Sign in
                  </button>

                  <div className="mt-3 text-end">
                    Don't have an account? {' '}
                    <Link to="/vendor-signup" className="text-decoration-none mt-2 textRed">
                      Sign up
                    </Link>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        {/* Logo */}
        <div className="left">
          <img src={whiteLogo} alt="" className="img-fluid" width="200" />
        </div>

      </div>
    </div>
  )
}

export default BusinessAccLogin
