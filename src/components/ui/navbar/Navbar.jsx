import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

import NavbarBrand from './NavbarBrand';
import NavbarLinks from './NavbarLinks';
import './Navbar.css';

const Navbar = () => {
  /**
   * The states are mainly used to control the navbar
   * logic whether it is in desktop or mobile view
   * */
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileButton, setMobileButton] = useState(false);
  const [background, setBackground] = useState(false);

  /**
   * Displays the mobile menu button and makes
   * the navbar background color visible
   */
  const showMobileView = () => {
    if (window.innerWidth <= 850) {
      setMobileButton(true);
      showBackground();
    } else {
      setMobileButton(false);
    }
  };

  /**
   * Displays the mobile menu when the
   * menu button is clicked on
   * */
  const showMobileMenu = () => {
    if (mobileButton) {
      let show = !mobileMenu;
      setMobileMenu(show);
    }
  };

  /**
   * Hides the mobile menu when the user clicks
   * on either the menu button or a nav link while
   * inside the mobile menu
   * */
  const hideMobileMenu = () => {
    setMobileMenu(false);
  };

  /**
   * Shows the navbar background on mobile screen or
   * if the user has scrolled down a bit
   * */
  const showBackground = () => {
    if (window.scrollY >= 100 || window.innerWidth <= 850) {
      setBackground(true);
    } else setBackground(false);
  };

  /**
   * The look of the mobile menu button, which
   * consists of three bars with rounded corners
   * */
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
      <NavLink className='navbar__brand' to='/'>
        <NavbarBrand />
      </NavLink>
      {mobileButton && mobileButtonContent}
      <NavbarLinks
        onMobileChangeHandler={hideMobileMenu}
        mobileMenu={mobileMenu}
      />
    </nav>
  );
};

export default Navbar;
