import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div>
        <Link className='navbar__brand' to='/'>
          Brian Nguyen
        </Link>
      </div>
      <div className='navbar__links'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/portfolio'>Portfolio</Link>
          </li>
          <li>
            <Link to='/resume'>Resume</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
