import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './Navbar.css';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileButton, setMobileButton] = useState(false);
  const [background, setBackground] = useState(false);

  const showMobileButton = () => {
    if (window.innerWidth <= 732) setMobileButton(true);
    else setMobileButton(false);
  };

  const showMobileMenu = () => {
    if (mobileButton) {
      let show = !mobileMenu;
      setMobileMenu(show);
    }
  };

  const showBackground = () => {
    if (window.scrollY >= 100) setBackground(true);
    else setBackground(false);
  };

  const mobileButtonContent = (
    <div className='navbar__toggle-btn' onClick={showMobileMenu}>
      <span className='navbar__toggle-btn--bar'></span>
      <span className='navbar__toggle-btn--bar'></span>
      <span className='navbar__toggle-btn--bar'></span>
    </div>
  );
  useEffect(() => {
    showMobileButton();
  }, []);
  window.addEventListener('resize', showMobileButton);
  window.addEventListener('scroll', showBackground);

  return (
    <nav className={background ? 'navbar navbar--scroll' : 'navbar'}>
      <div>
        <Link className='navbar__brand' to='/'>
          Brian Nguyen
        </Link>
      </div>
      {mobileButton && mobileButtonContent}
      <div className={mobileMenu ? 'navbar__links' : 'navbar__links active'}>
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
