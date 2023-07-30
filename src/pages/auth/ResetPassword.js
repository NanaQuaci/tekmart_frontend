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
import { Spinner } from 'reactstrap';
import { useResetPasswordAuthMutation } from '../../app/feature/userSlice/authApiSlice';

const ResetPassword = ({ btnName, ...rest }) => {
  const isSubmitting = useFormikContext();

  const initialValues = {
    password: '',
    confirmpassword: '',
  };

  const [resetpassword] = useResetPasswordAuthMutation();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const notify = (message) => toast(message);

  const handleSubmit = async (values, { setSubmitting }) => {
    setIsLoading(true);

    try {
      const response = await resetpassword({ ...values }).unwrap();
      if (response.success) {
        setIsLoading(false);
        notify(response.message);
        console.log(response);
        // navigate('/');
      } else {
        setIsLoading(false);
        notify(response.message);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  const validationSchema = Yup.object({
    password: Yup.string().required('Password is required'),
    confirmpassword: Yup.string()
      .matches('Password does not match')
      .required('Confirm password'),
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
                <div className="d-flex justify-content-center mb-3 mb-md-0 red-logo">
                  <img src={redLogo} alt="" className="img-fluid" width="200" />
                </div>

                <div className="bg-white p-4 p-md-5 shadow cardReset">
                  <div className="d-flex flex-column text-center">
                    <div className="text-bold">RESET PASSWORD</div>
                    <div className="text-muted">Enter a new password</div>
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

                  <div className="form-group my-4">
                    <Field
                      type="password"
                      name="confirmpassword"
                      placeholder="Confirm password"
                      className="px-3 py-2 w-100"
                    />
                    <ErrorMessage
                      name="confirmpassword"
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
                        <Spinner /> Loading...
                    </>
                  ) : (
                    'Reset password'
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

export default ResetPassword;
