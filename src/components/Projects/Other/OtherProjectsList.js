import { Grid } from '@mui/material';
import OtherProject from './OtherProject';

const OtherProjectsList = () => {
  const otherProjects = [
    { title: 'SIMD Instructions', link: '/' },
    { title: 'Probability and Stats', link: '/' },
    { title: 'Dittoshare', link: '/' },
  ];
  return (
    <div className='other-projects'>
      <h1 className='other-projects__title'>Some of my other work</h1>
      <Grid container>
        {otherProjects.map((otherProject, i) => (
          <Grid item xs={6} md={4}>
            <OtherProject
              key={i}
              title={otherProject.title}
              link={otherProject.link}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OtherProjectsList;
