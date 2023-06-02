import Card from 'react-bootstrap/Card';
import React from 'react';
//import { Input, Label } from 'reactstrap';
import Input from './Input';

const AddMomo = () => {
  return (
    <div className='wrapper row'>
    <div className='col-3'>
    </div>
    <div className=' col-6 '>
    <Card className="momo_card m-1 border-0 align-items-center ">
      <div>
        <p className="fw-bold" style={{ color: 'red' }}>
          ADD MOMO ACCOUNT
        </p>
      </div>
      <div>
        <label>Account Number</label> <br/>
        <Input
          type="text"
          placeholder="0554346908"
          className="form-control"
        />
        <p></p>
      </div>
      <div>
        <label>Account Type</label>
        <br/>
        <div className="flex">
        <Input type='radio'/>
        <img src="src/assets/png/mtn-momo.jpg" alt=" " className='px-3'/>
        <Input type='radio'/>
        <img src="src/assets/png/airtel-tigo.png" alt=" " className='px-3'/>
        <Input type='radio'/>
        <img src="src/assets/png/vodacash.png" alt=" " className='px-3' />
        </div>
        <p></p>
        
      </div>

      <div>
        <label>Account Name</label> <br/>
        <Input
          type="text"
          placeholder="Seth Gyan"
          className="form-control"
        />
        <br/>
      </div>
      <br/>
      <div>
              <button
                className=" text-decoration  d-flex justify-content-center border-0 p-2 px-4 rounded-pill "
                style={{ color: 'white', backgroundColor: 'red' }}
              >
                {' '}
                ADD ACCOUNT{' '}
              </button>
            </div>
    </Card>
    </div>
    <div className='col-3'>
    </div>
    </div>
  );
};

export default AddMomo;
