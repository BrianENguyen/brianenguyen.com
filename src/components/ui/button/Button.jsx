import React from 'react';
import './Buttons.css';
const Button = (props) => {
  return (
    <button
      className={`btn  ${props.disabled ? 'btn-disabled' : props.className}`}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
