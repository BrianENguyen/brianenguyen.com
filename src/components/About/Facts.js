import { Grid, Container } from '@mui/material';
import './Facts.css';
const Facts = () => {
  return (
    <div className='facts'>
      <Container>
        <Grid container spacing={5}>
          <Grid item sm={12} md={4}>
            <center>
              <img
                src='https://res.cloudinary.com/buraiyen/image/upload/v1641160435/BEN_Website/photo-gallery/BEN_mimi.jpg'
                alt='Me holding Mimi'
                className='facts__image'
              />
            </center>
          </Grid>
          <Grid item sm={12} md={8}>
            <div className='facts__section'>
              <h1 className='header'>Things that define me</h1>
              <h2 className='subheader'>
                I am a front-end developer, photographer, drummer, gamer,
                pro-wrestling enjoyer, and Linkin Park listener
              </h2>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Facts;
