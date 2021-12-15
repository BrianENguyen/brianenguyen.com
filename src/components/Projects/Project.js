import './RecentProjects.css';
import { Link } from 'react-router-dom';

const Project = (props) => {
  return (
    <div>
      <Link to={props.link}>
        <img src={props.src} className='recent-project__image' alt='' />
      </Link>
      <h3 className='recent-project__title'>{props.title}</h3>
    </div>
  );
};

export default Project;
