import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import redLogo from '../../assets/imgs/logo-red.svg';
import whiteLogo from '../../assets/imgs/logo-white.svg';
import axios from '../../api/axios';
import server from '../../server';
import '../../styles/auth.css';
import { useForgotPasswordAuthMutation } from '../../app/feature/userSlice/authApiSlice';
import { ToastContainer, toast } from 'react-toastify';
import { Spinner } from 'reactstrap';

const ForgotPassword = ({ btnName, ...rest }) => {
  const isSubmitting = useFormikContext();

  const initialValues = {
    email: '',
  };

  const [forgotpassword] = useForgotPasswordAuthMutation();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const notify = (message) => toast(message);

  const handleSubmit = async (values, { setSubmitting }) => {
    setIsLoading(true);
    try {
      const response = await forgotpassword({ ...values }).unwrap();
      if (response.success) {
        setIsLoading(false);
        notify(response.message);
        navigate('/');
      } else {
        setIsLoading(false);
        notify(response.message);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
  });

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
                <div className="d-flex justify-content-center mb-3 mb-md-0  red-logo">
                  <img src={redLogo} alt="" className="img-fluid" width="200" />
                </div>
                <div className="bg-white p-4 p-md-5 shadow cardReset">
                  <div className="d-flex flex-column text-center">
                    <div className="text-bold">RESET PASSWORD</div>
                    <div className="text-muted">
                      Enter your email to continue
                    </div>
                  </div>

                  <div className="form-group my-4">
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

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-100 py-2 auth-btn"
                  >
                    {isLoading ? (
                      <>
                        <Spinner /> Sending Email
                      </>
                    ) : (
                      'Send Email'
                    )}
                  </button>
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

export default ForgotPassword;
