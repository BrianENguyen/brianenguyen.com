import { Grid } from '@mui/material';

import './Resume.css';

const ResumeEducation = () => {
  return (
    <div>
      <h2 className='resume__header'>Education</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={6}>
          <h3 className='resume__leftcolumn--header'>
            California State University, Long Beach
          </h3>
        </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <h3 className='resume__rightcolumn--header'>
            Graduation Date: May 2020
          </h3>
        </Grid>
        <Grid item xs={12} md={4} lg={6}>
          <p className='resume__leftcolumn--description'>
            B.S. in Computer Science (GPA: 3.05)
          </p>
        </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <p className='resume__rightcolumn--description'>Long Beach, CA</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ResumeEducation;
