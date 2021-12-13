import { Grid } from '@mui/material';

const Quote = () => {
  return (
    <div className='quote'>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img
            src='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1087/v1639368996/BEN_Website/BEN_rosegarden.jpg'
            width='500px'
          />
        </Grid>
        <Grid item xs={6}>
          <p>
            A fulfilling life is not preoccupied with material objects,
            prestige, or power. It is a life that is filled with true
            friendships, sharing, and caring for each other.
          </p>
          <p>Dharma Master Chen Yeng</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default Quote;
