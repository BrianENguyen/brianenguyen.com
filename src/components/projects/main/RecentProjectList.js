import { Grid } from '@mui/material';

import Project from './Project';
import ProjectData from '../../../helper/ProjectData';

import AnimatedHeader from '../../Animations/AnimatedHeader';
import './Projects.css';
const RecentProjects = () => {
  return (
    <div className='recent-projects'>
      <h1 className='header'>Recent Projects</h1>
      <h2 className='subheader'>
        <AnimatedHeader>
          Some websites that I have worked on recently
        </AnimatedHeader>
      </h2>
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
