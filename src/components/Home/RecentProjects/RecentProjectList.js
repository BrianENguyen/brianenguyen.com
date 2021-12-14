import { Grid } from '@mui/material';

import RecentProject from './RecentProject';
import './RecentProjects.css';
const RecentProjects = () => {
  const recentProjects = [
    {
      title: "Thu Nguyen's Website",
      src: 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1723/v1639518576/BEN_Website/recent_projects/thu.jpg',
    },
    {
      title: 'CSULB Tzu Ching',
      src: 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1443/v1639515139/BEN_Website/recent_projects/lbtc_group.jpg',
    },
  ];

  return (
    <div className='recent-projects'>
      <h1 className='recent-projects__header'>Recent Projects</h1>
      <h1 className='recent-projects__description'>
        Some websites that I have worked on recently
      </h1>
      <Grid container spacing={2}>
        {recentProjects.map((project, i) => (
          <Grid item xs={12} sm={6}>
            <RecentProject key={i} title={project.title} src={project.src} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default RecentProjects;
