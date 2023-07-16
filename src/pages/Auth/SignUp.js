import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import logo from '../../assets/png/Aser.png';
import * as Yup from 'yup';
import axios from '../../api/axios';
import server from '../../server';

const SignUp = ({ btnName, ...rest }) => {
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

  const handleSubmit = async (values, { setSubmitting }) => {
    /*e.preventDefault();
    axios
      .post('http://localhost:3000/signup', {
        firstname,
        lastname,
        email,
        password,
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err)); */
    console.log(values);
    try {
      const response = await axios.post(`${server}user/register`, {
        // firstname: values.firstname,
        // lastname: values.lastname,
        // email: values.email,
        // password: values.password,
        ...values,
      });
      console.log(response.data);
      setSubmitting(false);
      // Handle successful response here
    } catch (error) {
      console.log(error);
      //Handle error here

      setSubmitting(false);
    } finally {
      setSubmitting(false);
    }
  };
  const validationSchema = Yup.object({
    firstname: Yup.string().required('First Name is required'),
    lastname: Yup.string().required('Last Name is required'),
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
                <div className="bg-white p-4 p-md-5">
                  <div className='bg-danger d-flex justify-content-center mb-3'>
                    <div>
                      <img src={logo} alt="" className="img-fluid" width="200" />
                    </div>
                  </div>
                  <h5>CREATE AN ACCOUNT</h5>
                  <h6>Join now to enjoy exclusiveness</h6>
                  {/* <div className="d-flex gap-2"> */}

                  <div className="form-group mt-4">
                    <Field type="text" name="firstname" placeholder="First name" className="px-3 py-2 w-100" />
                    <ErrorMessage name="firstname" component="div" className="text-danger" />
                  </div>

                  <div className="form-group mt-4">
                    <Field type="text" name="lastname" placeholder="Last name" className="px-3 py-2 w-100" />
                    <ErrorMessage name="lastname" component="div" className="text-danger" />
                  </div>

                  {/* </div> */}

                  <div className="form-group mt-4">
                    <Field type="email" name="email" placeholder="Email Address" className="px-3 py-2 w-100" />
                    <ErrorMessage name="email" component="div" className="text-danger" />
                  </div>

                  <div className="form-group mt-4">
                    <Field type="password" name="password" placeholder="Password" className="px-3 py-2 w-100" />
                    <ErrorMessage name="password" component="div" className="text-danger" />
                  </div>

                  <div>
                    <p></p>
                  </div>

                  <div className="d-flex justify-content-between">
                    <div className="my-3">
                      <Field type="checkbox" name="terms" />
                      <span>
                        {' '} I have read the {' '}
                        <a href="www.google.com" className="text-decoration-none "  >
                          Terms and Conditions
                        </a>
                      </span>
                      <ErrorMessage name="terms" component="div" className="text-danger" />
                    </div>
                  </div>

                  <button type="submit" disabled={isSubmitting} className='w-100 py-2 text-white auth-btn'>Sign in</button>

                  <p className="my-3">
                    Already have an account?{' '}
                    <Link
                      to="/login" className="text-decoration-none my-2" style={{ color: 'red' }}
                    >
                      Sign in Now
                    </Link>
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        {/* Logo */}
        <div className="left">
          <img src={logo} alt="" className="img-fluid" width="200" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
