import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import NavbarBrand from './NavbarBrand';
import './Navbar.css';

const Navbar = () => {
  // States
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileButton, setMobileButton] = useState(false);
  const [background, setBackground] = useState(false);

  // Functions
  const showMobileView = () => {
    if (window.innerWidth <= 850) {
      setMobileButton(true);
      showBackground();
    } else setMobileButton(false);
  };

  const showMobileMenu = () => {
    if (mobileButton) {
      let show = !mobileMenu;
      setMobileMenu(show);
    }
  };

  const hideMobileMenu = () => {
    setMobileMenu(false);
  };

  const showBackground = () => {
    if (window.scrollY >= 100 || window.innerWidth <= 850) {
      setBackground(true);
    } else setBackground(false);
  };

  const mobileButtonContent = (
    <div className='navbar__toggle-btn' onClick={showMobileMenu}>
      <span className='navbar__toggle-btn--bar'></span>
      <span className='navbar__toggle-btn--bar'></span>
      <span className='navbar__toggle-btn--bar'></span>
    </div>
  );

  useEffect(() => {
    showMobileView();
  }, []);

  window.addEventListener('resize', showMobileView);
  window.addEventListener('scroll', showBackground);

  return (
    <nav className={background ? 'navbar navbar--scroll' : 'navbar'}>
      <div>
        <Link className='navbar__brand' to='/'>
          <NavbarBrand />
        </Link>
      </div>
      {mobileButton && mobileButtonContent}
      <div className={mobileMenu ? 'navbar__links' : 'navbar__links active'}>
        <ul>
          <li>
            <Link className='navbar__link' to='/' onClick={hideMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link
              className='navbar__link'
              to='/resume'
              onClick={hideMobileMenu}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              className='navbar__link'
              to='/portfolio'
              onClick={hideMobileMenu}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link className='navbar__link' to='/about' onClick={hideMobileMenu}>
              About
            </Link>
          </li>
          <li>
            <Link
              className='navbar__link'
              to='/contact'
              onClick={hideMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
