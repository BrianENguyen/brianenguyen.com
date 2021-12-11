import { Link } from 'react-router-dom';
import { useState } from 'react';

import './Navbar.css';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileButton, setMobileButton] = useState(false);

  const showMobileButton = () => {
    if (window.innerWidth <= 732) setMobileButton(true);
    else setMobileButton(false);
  };

  const showMobileMenu = () => {
    if (mobileMenu) setMobileMenu(false);
    else setMobileMenu(true);
  };

  const mobileButtonContent = (
    <div className='navbar__toggle-btn' onClick={showMobileMenu}>
      <span className='navbar__toggle-btn--bar'></span>
      <span className='navbar__toggle-btn--bar'></span>
      <span className='navbar__toggle-btn--bar'></span>
    </div>
  );

  window.addEventListener('resize', showMobileButton);

  return (
    <nav className='navbar'>
      <div>
        <Link className='navbar__brand' to='/'>
          Brian Nguyen
        </Link>
      </div>
      {mobileButton && mobileButtonContent}
      <div className={mobileMenu ? 'navbar__links active' : 'navbar__links'}>
        <ul>
          <li>
            <Link className='navbar__link' to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link className='navbar__link' to='/portfolio'>
              Portfolio
            </Link>
          </li>
          <li>
            <Link className='navbar__link' to='/resume'>
              Resume
            </Link>
          </li>
          <li>
            <Link className='navbar__link' to='/contact'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
