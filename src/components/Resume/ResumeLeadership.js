import { Grid } from '@mui/material';

import './Resume.css';

const ResumeLeadership = () => {
  return (
    <div>
      <h2 className='resume__header'>Work Experience</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={6}>
          <h3 className='resume__leftcolumn--header'>Code Ninjas</h3>
        </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <h3 className='resume__rightcolumn--header'>Aug. 2020 – Present</h3>
        </Grid>
        <Grid item xs={12} md={4} lg={6}>
          <p className='resume__leftcolumn--description'>Coding Instructor</p>
        </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <p className='resume__rightcolumn--description'>
            Cerritos and Fullerton, CA
          </p>
        </Grid>
        <div>
          <ul className='resume__list'>
            <li>
              Tutored children on programming fundamentals using JavaScript,
              Lua, C#, and Scratch coding languages
            </li>
            <li>
              Assisted children in creating video games and helped debugged
              errors, which increased the completion rate by 50%
            </li>
            <li>
              Developed and led multiple STEM and game building camps that had
              an overall 95% satisfaction rate
            </li>
          </ul>
        </div>
      </Grid>
    </div>
  );
};

export default ResumeLeadership;
