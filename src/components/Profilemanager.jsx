import React from 'react';

const Profilemanager = () => {
  return (
    <div className="profile_grid">
      <div className="card profile_card border-0">
        <div className="circle"></div>
        <div className="d-flex justify-content-around align-items-center my-3">
          <div className="d-flex flex-column">
            <div className="minicircle"></div>
            <p>Profile</p>
          </div>
          <div className="d-flex flex-column">
            <div className="minicircle"></div>
            <p>Messages</p>
          </div>
          <div className="d-flex flex-column">
            <div className="minicircle"></div>
            <p>Orders</p>
          </div>
        </div>
      </div>
     <div className="card border-0"></div> 
    </div>
  );
};

export default Profilemanager;
