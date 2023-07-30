import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import redLogo from '../../assets/imgs/logo-red.svg';
import whiteLogo from '../../assets/imgs/logo-white.svg';
import axios from '../../api/axios';
import server from '../../server';
import '../../styles/auth.css';
import { ToastContainer, toast } from 'react-toastify';
import { useVendorLoginAuthMutation } from '../../app/feature/userSlice/authApiSlice';
import { Spinner } from 'reactstrap';

const BusinessAccLogin = ({ btnName, ...rest }) => {
  const isSubmitting = useFormikContext();

  const initialValues = {
    email: '',
    password: '',
  };

  const [vendorlogin] = useVendorLoginAuthMutation();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const notify = (message) => toast(message);

  const handleSubmit = async (values, { setSubmitting }) => {
    setIsLoading(true);
    try {
      const response = await vendorlogin({ ...values }).unwrap();
      if (response.success) {
        setIsLoading(false);
        notify(response.message);
        console.log(response);
        navigate('/');
      } else {
        setIsLoading(false);
        notify(response.message);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  const AutoSubmitToken = () => {
    const { values, submitForm } = useFormikContext();
    React.useEffect(() => {
      if (values?.token?.length === 6) {
        submitForm();
      }
    }, [values, submitForm]);
    return null;
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });
  //     console.log(response.data);
  //     if (response.data) {
  //       // Authentication successful
  //       // Perform your login logic here using values.email and values.password
  //       console.log('Login success');
  //       // navigate('/');
  //     } else {
  //       // Authentication failed
  //       const error = await response.data();
  //       console.log('Login failed:', error);
  //       alert('Invalid email or password');
  //     }
  //   } catch (error) {
  //     console.error('Login error:', error);
  //     alert('An error occurred during login');
  //   } finally {
  //     setSubmitting(false);
  //   }

  // };

  return (
    <div className="main-container">
      <div className="d-flex">
        {/*  */}
        <div className="right">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="d-flex justify-content-center mb-3 mb-md-0 red-logo">
                  <img src={redLogo} alt="" className="img-fluid" width="200" />
                </div>

                <div className="bg-white p-4 p-md-5 shadow">
                  <div className="d-flex flex-column text-center">
                    {isLoading ? <p>Loading...</p> : ''}
                    <div className="text-bold">
                      LOG INTO YOUR BUSINESS ACCOUNT
                    </div>
                    <div className="text-muted">Welcome back</div>
                  </div>

                  <div className="form-group mt-4">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="px-3 py-2 w-100"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </div>

                  <div className="form-group mt-4">
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="px-3 py-2 w-100"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-danger"
                    />
                  </div>

                  <div className="d-flex justify-content-between">
                    <div></div>
                    <Link
                      to="/forgot-password"
                      className="text-decoration-none text-secondary my-2"
                    >
                      Forgot Password
                    </Link>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-100 py-2 auth-btn"
                  >
                    {isLoading ? (
                      <>
                        <Spinner /> Logging in
                      </>
                    ) : (
                      'Sign in'
                    )}
                  </button>

                  <div className="mt-3 text-end">
                    Don't have a businnes account?{' '}
                    <Link
                      to="/vendor-signup"
                      className="text-decoration-none mt-2 textRed"
                    >
                      Sign up
                    </Link>
                  </div>

                  <p className="mt-3 text-end">
                    Not a seller?{' '}
                    <Link
                      to="/signup"
                      className="text-decoration-none mt-2 textRed"
                    >
                      Sign up here
                    </Link>
                  </p>
                </div>
                 <AutoSubmitToken />
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
  );
};

export default BusinessAccLogin;
