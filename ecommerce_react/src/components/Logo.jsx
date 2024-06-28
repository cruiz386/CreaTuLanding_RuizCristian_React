import React from 'react';

const Logo = ({ src, alt, style }) => {
  return (
    <div>
      <img src={src} alt={alt} style={style} />
    </div>
  );
};

export default Logo;


