import { Grid } from '@mui/material';
import OtherProject from './OtherProject';

const OtherProjectsList = () => {
  const otherProjects = [{ title: 'SIMD', link: '/' }];
  return (
    <div>
      <Grid container>
        {otherProjects.map((otherProject, i) => (
          <Grid item xs={6} md={2}>
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
