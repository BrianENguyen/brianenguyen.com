import './RecentProjects.css';

const Project = (props) => {
  return (
    <div>
      <img src={props.src} className='recent-project__image' alt='' />
      <h3 className='recent-project__title'>{props.title}</h3>
    </div>
  );
};

export default Project;
