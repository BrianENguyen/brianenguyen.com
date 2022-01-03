import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import './Facts.css';
const Facts = () => {
  return (
    <div>
      <Container maxWidth='xl'>
        <Grid container spacing={30}>
          <Grid item xs={12} sm={12} lg={4}>
            <img
              src='https://res.cloudinary.com/buraiyen/image/upload/v1641160435/BEN_Website/photo-gallery/BEN_mimi.jpg'
              alt='Me holding Mimi'
              className='facts__image'
            />
          </Grid>
          <Grid item xs={12} sm={12} lg={8}>
            <h1 className='header'>Things that define me</h1>
            <h2 className='subheader'>
              I am a front-end developer, photographer, drummer, gamer,
              pro-wrestling enjoyer, and Linkin Park listener
            </h2>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Facts;
