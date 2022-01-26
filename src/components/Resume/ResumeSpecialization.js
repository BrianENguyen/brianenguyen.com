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
              <a
                href='https://bit.ly/BEN-frontend-mentor'
                target='_blank'
                rel='noreferrer'
              >
                bit.ly/BEN-frontend-mentor
              </a>
            </span>
          </h3>
        </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <h3 className='resume__rightcolumn--header'>
            January 2022 – Present
          </h3>
        </Grid>
        <Grid item xs={12}>
          <p className='resume__leftcolumn--project-description'>
            Developed various front-end components from challenges provided by
            frontendmentor.io, using HTML, CSS, and JavaScript
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ResumeSpecialization;
