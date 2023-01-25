import React from 'react';
const NavbarBrand = () => {
  return (
    <img
      src='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_110/v1662578878/BEN_Website/BEN-logo-navbar.webp'
      width={window.innerWidth <= 850 ? '100px' : '150px'}
      height={window.innerWidth <= 850 ? '70px' : '100px'}
      alt='BEN Logo'
    ></img>
  );
};

export default NavbarBrand;
