import { Grid } from '@mui/material';

import Project from './Project';
import ProjectData from '../Helper/ProjectData';
import './RecentProjects.css';
const RecentProjects = () => {
  return (
    <div className='recent-projects'>
      <h1 className='recent-projects__header'>Recent Projects</h1>
      <h1 className='recent-projects__description'>
        Some websites that I have worked on recently
      </h1>
      <Grid container spacing={2}>
        {ProjectData.slice(0, 2).map((project, i) => (
          <Grid item xs={12} sm={6} key={i}>
            <Project
              title={project.title}
              src={project.src}
              link={project.link}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default RecentProjects;
