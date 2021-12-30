import { Grid } from '@mui/material';

import Project from './Project';
import ProjectData from '../Helper/ProjectData';
import './RecentProjects.css';

const Projects = () => {
  return (
    <div className='recent-projects'>
      <div className='recent-projects__intro'>
        <h1 className='recent-projects__header'>My Work</h1>
        <h1 className='recent-projects__description'>
          A collection of various websites that I have designed and developed,
          and other programming projects that I'm proud of
        </h1>
      </div>
      <Grid container spacing={2}>
        {ProjectData.map((project, i) => (
          <Grid item xs={12} sm={6} key={i}>
            <Project
              title={project.title}
              src={project.src}
              link={project.link}
              credit={project.photoCredit}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
