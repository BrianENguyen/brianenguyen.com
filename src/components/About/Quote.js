import { Grid } from '@mui/material';

import './Quote.css';

const Quote = () => {
  return (
    <div className='quote'>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img
            src='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1087/v1639368996/BEN_Website/BEN_rosegarden.jpg'
            width='600px'
          />
        </Grid>
        <Grid item xs={6}>
          <p className='quote__content'>
            A fulfilling life is not preoccupied with material objects,
            prestige, or power. It is a life that is filled with true
            friendships, sharing, and caring for each other.
          </p>
          <p className='quote__author'>~ Dharma Master Chen Yeng ~</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Quote;
