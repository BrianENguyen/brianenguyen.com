import { NavLink } from 'react-router-dom';
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
  });

  window.addEventListener('resize', showMobileView);
  window.addEventListener('scroll', showBackground);

  return (
    <nav className={background ? 'navbar navbar--scroll' : 'navbar'}>
      <div>
        <NavLink className='navbar__brand' to='/'>
          <NavbarBrand />
        </NavLink>
      </div>
      {mobileButton && mobileButtonContent}
      <div className={mobileMenu ? 'navbar__links' : 'navbar__links active'}>
        <ul>
          <li>
            <NavLink
              exact
              className='navbar__link'
              activeClassName='navbar__link active'
              to='/'
              onClick={hideMobileMenu}
            >
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              className='navbar__link'
              activeClassName='navbar__link active'
              to='/resume'
              onClick={hideMobileMenu}
            >
              Resume
            </NavLink>
          </li> */}
          <li>
            <NavLink
              className='navbar__link'
              activeClassName='navbar__link active'
              to='/portfolio'
              onClick={hideMobileMenu}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              className='navbar__link'
              activeClassName='navbar__link active'
              to='/about'
              onClick={hideMobileMenu}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className='navbar__link'
              activeClassName='navbar__link active'
              to='/blog'
              onClick={hideMobileMenu}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              className='navbar__link'
              activeClassName='navbar__link active'
              to='/contact'
              onClick={hideMobileMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
