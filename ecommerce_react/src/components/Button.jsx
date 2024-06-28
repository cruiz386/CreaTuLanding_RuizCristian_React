import React from 'react';

const Button = ({ onClick, textButton }) => {
  return (
    <button onClick={onClick} className="btn btn-outline-secondary">
      {textButton}
    </button>
  );
};

export default Button;
