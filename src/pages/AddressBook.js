import React, { useState } from 'react';
import Header from '../components/header/Header';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userinfo } from '../app/feature/userSlice/authSlice';
const AddressBook = () => {
    const userInfo = useSelector(userinfo);
    const { firstname, lastname, address, additionalinfo } = userinfo;
  return (
    <div>
      <Header />
      <div className="d-flex flex-row gap-2">
        <Container className="card col-3">
          <div>
            <div className="flex p-2">
              <Link
                to={'/profilemanager'}
                className="text-decoration-none text-body-secondary d-flex gap-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#ff0000"
                  class="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                </svg>
                My Terkmart Account
              </Link>
            </div>
            <div className="flex p-2 gap-1">
              <Link className="text-decoration-none text-body-secondary d-flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#ff0000"
                  class="bi bi-box2"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.95.4a1 1 0 0 1 .8-.4h8.5a1 1 0 0 1 .8.4l2.85 3.8a.5.5 0 0 1 .1.3V15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4.5a.5.5 0 0 1 .1-.3L2.95.4ZM7.5 1H3.75L1.5 4h6V1Zm1 0v3h6l-2.25-3H8.5ZM15 5H1v10h14V5Z" />
                </svg>
                Orders
              </Link>
            </div>
            <div className="flex p-2">
              <Link className="text-decoration-none text-body-secondary d-flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#ff0000"
                  class="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>
                Inbox
              </Link>
            </div>
            <div className="flex p-2">
              <Link className="text-decoration-none text-body-secondary d-flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#ff0000"
                  class="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
                Saved Items
              </Link>
            </div>

            <div className="flex p-2">
              <Link className="text-decoration-none text-body-secondary border-bottom pb-2 d-flex gap-3">
                <svg viewBox="0 0 24 24" fill="#ff0000" height="30" width="30">
                  <path d="M12 8v5h5v-2h-3V8z" />
                  <path d="M21.292 8.497a8.957 8.957 0 00-1.928-2.862 9.004 9.004 0 00-4.55-2.452 9.09 9.09 0 00-3.626 0 8.965 8.965 0 00-4.552 2.453 9.048 9.048 0 00-1.928 2.86A8.963 8.963 0 004 12l.001.025H2L5 16l3-3.975H6.001L6 12a6.957 6.957 0 011.195-3.913 7.066 7.066 0 011.891-1.892 7.034 7.034 0 012.503-1.054 7.003 7.003 0 018.269 5.445 7.117 7.117 0 010 2.824 6.936 6.936 0 01-1.054 2.503c-.25.371-.537.72-.854 1.036a7.058 7.058 0 01-2.225 1.501 6.98 6.98 0 01-1.313.408 7.117 7.117 0 01-2.823 0 6.957 6.957 0 01-2.501-1.053 7.066 7.066 0 01-1.037-.855l-1.414 1.414A8.985 8.985 0 0013 21a9.05 9.05 0 003.503-.707 9.009 9.009 0 003.959-3.26A8.968 8.968 0 0022 12a8.928 8.928 0 00-.708-3.503z" />
                </svg>
                Recently Viewed
              </Link>
            </div>

            <div className="flex p-2">
              <Link className="text-decoration-none text-body-secondary d-flex py-2 gap-3">
                Account Management
              </Link>
            </div>

            <div className="flex p-2">
              <Link className="text-decoration-none text-body-secondary d-flex py-2 gap-3">
                Address Book
              </Link>
            </div>

            <div className="flex p-2">
              <Link className="text-decoration-none text-body-secondary d-flex py-2 gap-3">
                NewsLetter Preference
              </Link>
            </div>

            <div className="flex p-2">
              <Link className="text-decoration-none text-body-secondary border-bottom pb-3  d-flex py-2 gap-3">
                Close Account
              </Link>
            </div>

            <div className="d-flex p-2">
              <Link
                to="/login"
                className="text-decoration-none text-body-secondary d-flex gap-3 mx-auto"
              >
                <Button variant="secondary">LOGOUT</Button>{' '}
              </Link>
            </div>
          </div>
        </Container>
        <Container className="card p-0 vh-74">
          <div className="row-8">
            <div className="">
              <div className="d-flex border-bottom p-3">
                <h5>Address Book</h5>
                <div></div>
                <div>
                  <Link to="/customeraddress">
                    <Button type="button" className="btn btn-danger">
                      {' '}
                      ADD NEW ADDRESS
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="card col-5">
              <div className="">
              <div className="p-2 " style={{ minHeight: '150px' }}>
                    <p class="">
                      {firstname || ""} {lastname || ""}
                    </p>
                    <p class="">{address || ""}</p>
                    <p></p>

                    <p style={{color: 'green'}}>Default Address</p>
                  </div>
                  <hr />
                  <h5 style={{color: 'grey'}}> SET AS DEFAULT</h5>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AddressBook;
