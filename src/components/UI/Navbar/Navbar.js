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
    if (window.scrollY >= 100 || window.innerWidth <= 732) {
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
    showMobileButton();
  }, []);

  /*FIXME: navbar doesn't change BG on initial mobile view state
    TODO: smooth animation when clicking on mobile button 
     */

  window.addEventListener('resize', showMobileButton);
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
            <Link className='navbar__link' to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link className='navbar__link' to='/about'>
              About
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
