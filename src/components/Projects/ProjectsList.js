import { Grid } from '@mui/material';

import Project from './Project';
import './RecentProjects.css';
const Projects = () => {
  const projects = [
    {
      title: "Thu Nguyen's Website",
      src: 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1723/v1639518576/BEN_Website/recent_projects/thu.jpg',
    },
    {
      title: 'CSULB Tzu Ching',
      src: 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1443/v1639515139/BEN_Website/recent_projects/lbtc_group.jpg',
    },
    {
      title: 'YelpCamp',
      src: 'https://res.cloudinary.com/buraiyen/image/upload/v1639529477/BEN_Website/projects/hugues-de-buyer_camp_fc2lzb.jpg',
    },
    {
      title: '(OLD) My Personal Website',
      src: 'https://res.cloudinary.com/buraiyen/image/upload/v1639529477/BEN_Website/projects/hugues-de-buyer_camp_fc2lzb.jpg',
    },
    {
      title: 'Kraken Bracket',
      src: 'https://res.cloudinary.com/buraiyen/image/upload/v1639530141/BEN_Website/projects/florian-olivo_gaming_im9ugb.jpg',
    },
  ];

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
        {projects.map((project, i) => (
          <Grid item xs={12} sm={6}>
            <Project key={i} title={project.title} src={project.src} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
