import './RecentProjects.css';
import { Link } from 'react-router-dom';

const Project = (props) => {
  let photoCreditSection = (
    <div className='project__photo-credit'>
      {props.credit && (
        <p>
          Photo by{' '}
          <a
            className='project__photo-credit '
            href={props.credit.link}
            target='_blank'
            rel='noreferrer'
          >
            {props.credit.name}
          </a>
        </p>
      )}
    </div>
  );

  return (
    <div className='project'>
      <div className='project__main'>
        <Link to={props.link}>
          <div>
            <img src={props.src} className='project__image' alt='' />
            <h3 className='project__title'>{props.title}</h3>
          </div>
        </Link>
      </div>
      {props.credit && photoCreditSection}
    </div>
  );
};

export default Project;
