import React from 'react'
import Input from '../../components/Input';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import logo from '../../assets/png/Aser.png';
import { useNavigate } from 'react-router-dom';
const BusinessAccLogin = () => {
    const navigate= useNavigate()
  return (
    <div className="main-container">
      <div className="d-flex">
        <div className="left">
          <img src={logo} alt="" className="img-fluid" width="200" />
        </div>
        <div className="right">
          <div className="card border-0 login_card">
            <h5>LOG INTO YOUR ACCOUNT</h5>
            <h6>Welcome back</h6>
            <Input
              type="email"
              placeholder="Email Address"
              className=" mt-4"
            />
            <Input type="password" placeholder="Password" className=" mt-4" />
            <div className="d-flex justify-content-between">
              <div></div>
              <a href="" className="text-decoration-none text-secondary my-2">
                Forgot Password
              </a>
            </div>
            <Button btnName="Sign in" onClick={()=>navigate("/")}>
            
            </Button>
            <p className="my-3">
              Haven't got a business account?{' '}
              <Link
                to="/businessaccountsignup"
                className="text-decoration-none my-2"
                style={{ color: 'red' }}
              >
                Become a seller Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessAccLogin
