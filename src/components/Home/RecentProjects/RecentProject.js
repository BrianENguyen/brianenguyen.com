import './RecentProjects.css';

const RecentProject = (props) => {
  return (
    <div>
      <img src={props.src} className='recent-project__image' alt='' />
      <h3>{props.title}</h3>
    </div>
  );
};

export default RecentProject;
