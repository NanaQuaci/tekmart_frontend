import React from 'react';
import Card from 'react-bootstrap/Card';
import Input from './Input';
const AddAddress = () => {
  return (
    <div className="wrapper row">
      <div className="col-3"></div>
      <div className=" col-6 ">
        <Card className="momo_card m-1 border-0 align-items-center ">
          <div>
            <p className="fw-bold" style={{ color: 'red' }}>
              ADD NEW ADDRESS
            </p>
          </div>
          <div>
            <label>Name</label> <br />
            <Input
              type="text"
              placeholder="Seth Gyan"
              className="form-control"
            />
            <p></p>
          </div>

          <div>
            <label>Address (Hall/Hostel etc)</label> <br />
            <Input
              type="text"
              placeholder="Continental Hostel"
              className="form-control"
            />
            <br />
          </div>

          <div>
            <label>Vicinity</label> <br />
            <Input type="text" placeholder="Kotei" className="form-control" />
            <br />
          </div>

          <div>
            <label>Phone Number</label> <br />
            <Input
              type="text"
              placeholder="0555155455"
              className="form-control"
            />
            <br />
          </div>
          <br />
          <div>
            <button
              className=" text-decoration  d-flex justify-content-center border-0 p-2 px-4 rounded-pill "
              style={{ color: 'white', backgroundColor: 'red' }}
            >
              {' '}
              ADD ADDRESS{' '}
            </button>
          </div>
        </Card>
      </div>
      <div className="col-3"></div>
    </div>
  );
};

export default AddAddress;
