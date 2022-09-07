import { NavLink } from 'react-router-dom';

const NavbarLinks = (props) => {
  // Lifting the state up to Navbar component
  const mobileChangeHandler = () => {
    props.onMobileChangeHandler(false)
  }
  const navbarData = [
    {
      path: '/',
      name: 'Home'
    },
    {
      path: '/portfolio',
      name: 'Portfolio'
    },
    {
      path: '/about',
      name: 'About'
    },
    {
      path: '/blog',
      name: 'blog'
    },
    {
      path: '/contact',
      name: 'Contact'
    },
  ]

  return (
    <div className={props.mobileMenu ? 'navbar__links' : 'navbar__links active'}>
      <ul>
        {navbarData.map((page, i) => (
         <li>
          <NavLink
            exact
            className='navbar__link'
            activeClassName='navbar__link active'
            to={page.path}
            onClick={mobileChangeHandler}
          >
          {page.name}
          </NavLink>
        </li>
        ))}
      </ul>
     </div>
  );
 }


export default NavbarLinks;
