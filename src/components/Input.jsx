import React from 'react';

const Input = (props) => {
  return <input type={props.type} placeholder={props.placeholder} className={'rounded-pill px-3 py-2 form-control' + props.className}></input>;
};

export default Input;
