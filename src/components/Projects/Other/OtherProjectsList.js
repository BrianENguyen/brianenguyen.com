import { Grid } from '@mui/material';
import OtherProject from './OtherProject';

const OtherProjectsList = () => {
  const otherProjects = [
    { title: 'SIMD Enhanced MIPS Instructions', link: '/' },
    { title: 'EE 381 - Probability and Stats', link: '/' },
    { title: 'Dittoshare', link: '/' },
  ];
  return (
    <div>
      <Grid container>
        {otherProjects.map((otherProject, i) => (
          <Grid item xs={6} md={3}>
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
