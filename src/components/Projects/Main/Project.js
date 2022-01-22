import './RecentProjects.css';
import { Link } from 'react-router-dom';

const Project = (props) => {
  return (
    <div className='project'>
      <Link to={props.link}>
        <div>
          <img src={props.src} className='recent-project__image' alt='' />
          <h3 className='recent-project__title'>{props.title}</h3>
        </div>
      </Link>

      {props.credit && (
        <p>
          Photo by{' '}
          <a href={props.credit.link} target='_blank' rel='noreferrer'>
            {props.credit.name}
          </a>
        </p>
      )}
    </div>
  );
};

export default Project;
