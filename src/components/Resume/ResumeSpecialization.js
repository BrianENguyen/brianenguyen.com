import { Grid } from '@mui/material';

const ResumeSpecialization = () => {
  return (
    <div>
      <h2 className='resume__header'>Projects</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={6}>
          <h3 className='resume__leftcolumn--header'>
            Google IT Automation with Python |{' '}
            <span>
              <a href='bit.ly/3dgmU1S' target='_blank' rel='noreferrer'>
                bit.ly/3dgmU1S
              </a>
            </span>
          </h3>
        </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <h3 className='resume__rightcolumn--header'>Issued Sept. 2020</h3>
        </Grid>
        <Grid item xs={12}>
          <p className='resume__leftcolumn--project-description'>
            Online Course - Coursera
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ResumeSpecialization;
