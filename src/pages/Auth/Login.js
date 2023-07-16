import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/png/Aser.png';
import axios from '../../api/axios';
import server from '../../server';

const Login = () => {
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
      const response = await axios.post(`${server}user/login`, {
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
        
        {/* Logo */}
        <div className="left">
          <img src={logo} alt="" className="img-fluid" width="200" />
        </div>

        {/*  */}
        <div className="right">
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ isSubmitting }) => (
              <Form>
                <div className="bg-white p-4 p-md-5">
                  <div className='bg-danger d-flex justify-content-center mb-3'>
                    <div>
                      <img src={logo} alt="" className="img-fluid" width="200" />
                    </div>
                  </div>
                  <h5>LOG INTO YOUR ACCOUNT</h5>
                  <h6>Welcome back</h6>

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
                    <Link to="" className="text-decoration-none text-secondary my-2">
                      Forgot Password
                    </Link>
                  </div>

                  <button type="submit" disabled={isSubmitting} className='w-100 py-2 text-white auth-btn'>Sign in</button>

                  <div className="my-3">
                    Don't have an account? {' '}
                    <Link to="/signup" className="text-decoration-none my-2" style={{ color: 'red' }}>
                      Sign up Now
                    </Link>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;