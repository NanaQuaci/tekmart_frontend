import React from 'react';
import Input from '../../components/Input';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import logo from '../../assets/png/Aser.png';
import { useState } from 'react';
import axios from 'axios';

const SignUp = () => {

    const [firstname, setfName] = useState();
    const [lastname, setlName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const handleSubmit = (e) =>{
      e.preventDefault();
      axios.post('http://localhost:3000/signup', {firstname, lastname, email, password})
      .then(result => console.log(result))
      .catch(err => console.log(err))
    }
  return (
    <div className="main-container">
      <div className="d-flex">
        <div className="right">
          <div className="card border-0 login_card">
            <h5>CREATE AN ACCOUNT</h5>
            <h6>Join now to enjoy exclusiveness</h6>
            <div className="d-flex signup_input">
            <form onSubmit={handleSubmit} />
              <Input
                type="text"
                placeholder="First Name"
                className=" mt-4 inp"
                onChange={(e) => setfName(e.tartget.value)}
              />
              <Input
                type="text"
                placeholder="Last Name"
                className=" mt-4 inp"
                onChange={(e) => setlName(e.tartget.value)}
              />
            </div>
            <Input type="email" placeholder="Email Address" className=" mt-4" 
              onChange={(e) => setEmail(e.tartget.value)}
            />
            <Input type="password" placeholder="Password" className=" mt-4" 
              onChange={(e) => setPassword(e.tartget.value)}
            />
            <div className="d-flex justify-content-between">
              <div className="my-3">
                <Input type="checkbox" /> I have read the{' '}
                <a
                  href="www.google.com"
                  className="text-decoration-none text-secondary"
                >
                  Terms and Conditions
                </a>
              </div>
            </div>
            <Button btnName="Sign up" />
            <p className="my-3">
              Alreday have an account?{' '}
              <Link
                to="/login"
                className="text-decoration-none my-2"
                style={{ color: 'red' }}
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
        <div className="left">
          <img src={logo} alt="" className="img-fluid" width="200" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
