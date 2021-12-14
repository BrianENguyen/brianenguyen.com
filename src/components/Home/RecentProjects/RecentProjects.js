import RecentProject from './RecentProject';
import { Grid } from '@mui/material';
const RecentProjects = () => {
  const recentProjects = [
    {
      title: 'CSULB Tzu Ching',
      src: 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1443/v1639515139/BEN_Website/recent_projects/lbtc_group.jpg',
    },
    {
      title: 'CSULB Tzu Ching',
      src: 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1443/v1639515139/BEN_Website/recent_projects/lbtc_group.jpg',
    },
  ];

  return (
    <div className='recent-projects'>
      <h1>Recent Projects</h1>
      <Grid container spacing={2}>
        {recentProjects.map((project, i) => (
          <Grid item xs={6} md={6}>
            <RecentProject key={i} title={project.title} src={project.src} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default RecentProjects;
