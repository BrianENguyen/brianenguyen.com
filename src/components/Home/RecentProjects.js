import RecentProject from './RecentProject';

const RecentProjects = () => {
  const recentProjects = [
    {
      title: 'CSULB Tzu Ching',
      src: 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1443/v1639515139/BEN_Website/recent_projects/lbtc_group.jpg',
    },
  ];

  return (
    <div className='recent-projects'>
      <h1>Recent Projects</h1>
      {recentProjects.map((project, i) => (
        <RecentProject key={i} title={project.title} src={project.src} />
      ))}
    </div>
  );
};

export default RecentProjects;
