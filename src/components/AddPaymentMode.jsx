import React from 'react';
import { Container } from 'reactstrap';

const AddPaymentMode = () => {
  return (
    <div className="row mx-auto card gx-5 g-4 my-4" style={{backgroundColor:"grey"}}>
    <Container className="p-4 row mx-4">
      <div
        className="col-3 card mx-4"
        style={{ position: 'relative', }}
      >
        <div
          style={{
            position: 'absolute',
            width: '10px',
            height: '10px',
            borderRadius: '11px',
            border: '1px solid black',
          }}
        ></div>
        <br />
        <Container>
          <div>
            <p style={{ color: 'red' }}>MTN MOBILE MONEY</p>
            <br />
            <label>Mobile Money Number</label>
            <br />
            <input type="text" placeholder="0555 155 455"></input>
            <br />
            <label>Account Name</label>
            <br />
            <input type="text" placeholder="Seth Gyan"></input>
            <br />
            <p></p>

            <div
              style={{
                position: 'absolute',
                width: '10px',
                height: '15px',
                border: '1px solid black',
                top: '0',
                right: '0',
              }}
            ></div>
          </div>
        </Container>
      </div>

      <div
        className="col-3 card "
        style={{ position: 'relative', }}
      >
        <div
          style={{
            position: 'absolute',
            width: '10px',
            height: '10px',
            borderRadius: '11px',
            border: '1px solid black',
          }}
        ></div>
        <br />
        <Container>
          <div>
            <p style={{ color: 'red' }}>Mastercard</p>
            <br />
            <label>Card Number</label>
            <br />
            <input type="text" placeholder="4401 5845 4256 9842"></input>
            <br />
            <div className="row">
            <div>
            <label>Card Holder Name</label>
            <br />
            <input type="text" placeholder="Seth Gyan"></input>
            </div>
            <div>
            <label>Expiry Date</label>
            <br />
            <input type="text" placeholder="06/24"></input>
            </div>
            </div>
            
            
            
            <br />
            <p></p>

            <div
              style={{
                position: 'absolute',
                width: '10px',
                height: '15px',
                border: '1px solid black',
                top: '0',
                right: '0',
              }}
            ></div>
          </div>
        </Container>
      </div>

    </Container>  
    </div>
  );
};

export default AddPaymentMode;
