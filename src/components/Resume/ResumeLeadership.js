import { Grid } from '@mui/material';

import './Resume.css';

const ResumeLeadership = () => {
  return (
    <div>
      <h2 className='resume__header'>Leadership</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={6}>
          <h3 className='resume__leftcolumn--header'>CSULB Tzu Ching</h3>
        </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <h3 className='resume__rightcolumn--header'>Aug. 2019 – May 2020</h3>
        </Grid>
        <Grid item xs={12} md={4} lg={6}>
          <p className='resume__leftcolumn--description'>President</p>
        </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <p className='resume__rightcolumn--description'>Long Beach, CA</p>
        </Grid>
        <div>
          <ul className='resume__list'>
            <li>
              Managed organization with 3 board members to host monthly general
              meetings and volunteering events for general members to attend
            </li>
            <li>
              Created warm and welcoming experiences to event attendees which
              incentivized them to return to future events
            </li>
            <li>
              Managed organization’s files on Google Drive; taught office tool
              fundamentals to board members
            </li>
            <li>
              Helped revitalize student interest in the organization; gained a
              200% increase in new members during the 2019-2020 school year
            </li>
          </ul>
        </div>
      </Grid>
    </div>
  );
};

export default ResumeLeadership;
