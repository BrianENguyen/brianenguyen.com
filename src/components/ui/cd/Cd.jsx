import { Link } from 'react-router-dom';
import './Cd.css';

/**
 * The cd component allows the user to navigate to their
 * previously-visited page. "cd" takes inspiration from
 * the Linux command that changes the current
 * working directories
 */
const Cd = ({ href }) => {
  return (
    <div className='cd'>
      <span>&gt;</span> <Link to={href}>cd ..</Link>
    </div>
  );
};

export default Cd;
