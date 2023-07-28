import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import redLogo from '../../assets/imgs/logo-red.svg';
import whiteLogo from '../../assets/imgs/logo-white.svg';
import * as Yup from 'yup';
import axios from '../../api/axios';
import server from '../../server';
import '../../styles/auth.css';
import { Spinner } from 'reactstrap';
import { useVendorAuthMutation } from '../../app/feature/userSlice/authApiSlice';

const BusinessAccSignup = ({ btnName, ...rest }) => {
  const isSubmitting = useFormikContext();
  /*const [firstname, setfName] = useState();
  const [lastname, setlName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState(); */
  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    terms: false,
  };

  const [vendorsignup] = useVendorAuthMutation();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    setIsLoading(true);
    console.log(values);
    try {
      const response = await vendorsignup({ ...values }).unwrap();
      if (response) {
        setIsLoading(false);
        navigate('/vendor-login');
      }
    } catch (error) {
      setIsLoading(false);
    }
  };
  const validationSchema = Yup.object({
    shopName: Yup.string().required('Shop name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
    terms: Yup.boolean().oneOf(
      [true],
      'You must accept the Terms and Conditions'
    ),
  });

  return (
    <div className="main-container">
      <div className="d-flex">
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
                    <div className="text-bold">CREATE A BUSINESS ACCOUNT</div>
                    <div className="text-muted">
                      Join now to enjoy exclusiveness
                    </div>
                  </div>

                  <div className="form-group mt-4">
                    <Field
                      type="text"
                      name="shopName"
                      placeholder="Shop name"
                      className="px-3 py-2 w-100"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-danger"
                    />
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
                    <div className="my-3">
                      <Field type="checkbox" name="terms" />
                      <span>
                        {' '}
                        I have read the{' '}
                        <a
                          href="www.google.com"
                          className="text-decoration-none "
                        >
                          Terms and Conditions
                        </a>
                      </span>
                      <ErrorMessage
                        name="terms"
                        component="div"
                        className="text-danger"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-100 py-2 text-white auth-btn"
                  >
                    {isLoading ? (
                      <>
                        <Spinner /> Loading...
                      </>
                    ) : (
                      'Signup'
                    )}
                  </button>

                  <p className="mt-3 text-end">
                    Already have a business account?{' '}
                    <Link
                      to="/vendor-login"
                      className="text-decoration-none mt-2 textRed"
                    >
                      Sign in
                    </Link>
                  </p>

                  <p className="mt-3 text-end">
                    Not a seller?{' '}
                    <Link
                      to="/login"
                      className="text-decoration-none mt-2 textRed"
                    >
                      Sign in here
                    </Link>
                  </p>
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
  );
};

export default BusinessAccSignup;
