import { Grid } from '@mui/material';
import OtherProjectData from '../../Helper/OtherProjectData';
import OtherProject from './OtherProject';

const OtherProjectsList = () => {
  return (
    <div className='other-projects'>
      <h1 className='other-projects__title'>Some of my other work</h1>
      <Grid container>
        {OtherProjectData.map((otherProject, i) => (
          <Grid item xs={12} md={6} lg={4}>
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
