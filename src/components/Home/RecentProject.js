const RecentProject = (props) => {
  return (
    <div>
      <img src={props.src} alt='' width='700px' />
      <h3>{props.title}</h3>
    </div>
  );
};

export default RecentProject;
