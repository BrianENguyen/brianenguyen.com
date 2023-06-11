import { Link } from 'react-router-dom';

const Cd = ({ href }) => {
  return (
    <div>
      <span>&gt;</span> <Link to={href}>cd ..</Link>
    </div>
  );
};

export default Cd;
