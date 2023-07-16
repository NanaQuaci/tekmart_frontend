import React from 'react';

const MakePaymentButton = () => {
  return (
    <button
      className=" text-decoration rounded-pill btn btn-danger w-100 mx-lg-3"
      style={{ color: 'white', backgroundColor: 'red', width: '100%' }}
    >
      Make Payment
    </button>
  );
};

export default MakePaymentButton;
