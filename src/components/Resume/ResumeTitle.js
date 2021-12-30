import { Grid } from '@mui/material';

const ResumeTitle = () => {
  return (
    <div>
      <h1 className='resume__title'>Brian E. Nguyen</h1>
      <Grid container>
        <Grid item xs={12} md={6}>
          <ul className='resume__links'>
            <li>
              <a
                href='https://brianenguyen.com/'
                target='_blank'
                rel='noreferrer'
              >
                brianenguyen.com
              </a>
            </li>
            <li>
              <a
                href='mailto:brian.edison.nguyen@gmail.com'
                target='_blank'
                rel='noreferrer'
                style={{ wordBreak: 'break-word' }}
              >
                brian.edison.nguyen@gmail.com
              </a>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} md={6}>
          <ul className='resume__links resume__title__right'>
            <li>
              <a
                href='https://www.linkedin.com/in/brian-edison-nguyen/'
                target='_blank'
                rel='noreferrer'
              >
                linkedin.com/in/brian-edison-nguyen/
              </a>
            </li>
            <li>
              <a
                href='https://github.com/Brian-E-Nguyen'
                target='_blank'
                rel='noreferrer'
              >
                github.com/Brian-E-Nguyen
              </a>
            </li>
          </ul>
        </Grid>
      </Grid>
      <div>
        <h2 className='resume__header'>Objective</h2>
        <p>
          Bachelor’s of Science in Computer Science graduate seeking an
          internship or full-time entry-level position in front-end development
        </p>
      </div>
    </div>
  );
};

export default ResumeTitle;
