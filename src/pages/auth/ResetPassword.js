import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import redLogo from '../../assets/imgs/logo-red.svg';
import whiteLogo from '../../assets/imgs/logo-white.svg';
import axios from '../../api/axios';
import server from '../../server';
import '../../styles/auth.css';

const ResetPassword = () => {
    const navigate = useNavigate();

    const initialValues = {
        password: '',
        confirmpassword: '',
    };

    const validationSchema = Yup.object({
        password: Yup.string().required('Password is required'),
        confirmpassword: Yup.string().matches('Password does not match').required('Confirm password'),
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
                <div className="right">
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                        {({ isSubmitting }) => (
                            <Form>

                                <div className='d-flex justify-content-center mb-3 mb-md-0 red-logo'>
                                    <img src={redLogo} alt="" className="img-fluid" width="200" />
                                </div>

                                <div className="bg-white p-4 p-md-5 shadow cardReset">
                                    <div className='d-flex flex-column text-center'>
                                        <div className='text-bold'>RESET PASSWORD</div>
                                        <div className='text-muted'>Enter a new password</div>
                                    </div>

                                    <div className="form-group mt-4">
                                        <Field type="password" name="password" placeholder="Password" className="px-3 py-2 w-100" />
                                        <ErrorMessage name="password" component="div" className="text-danger" />
                                    </div>

                                    <div className="form-group my-4">
                                        <Field type="password" name="confirmpassword" placeholder="Confirm password" className="px-3 py-2 w-100" />
                                        <ErrorMessage name="confirmpassword" component="div" className="text-danger" />
                                    </div>

                                    <button type="submit" disabled={isSubmitting} className='w-100 py-2 auth-btn'>
                                        Reset password
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
    )
}

export default ResetPassword
