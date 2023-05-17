import React from 'react';
import { Container } from 'reactstrap';

const AddressInfo = () => {
  return (
    <div
      className="row mx-auto card gx-5 g-4 my-4"
      style={{ backgroundColor: 'grey' }}
    >
      <Container className="p-4 row mx-4">
        <div className="col-3 card mx-4" style={{ position: 'relative' }}>
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
              <p style={{ color: 'red' }}>Primary Address</p>
              <br />
              <label>Name</label>
              <br />
              <input type="text" placeholder="Seth Gyan"></input>
              <br />
              <label>Address</label>
              <br />
              <input type="text" placeholder="Continental Hostel"></input>
              <br />
              <div className="row">
                <div className="col">
                  <label>Town</label>
                  <br />
                  <input />
                </div>
              </div>

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

        <div className="col-3 card " style={{ position: 'relative' }}>
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

export default AddressInfo;
