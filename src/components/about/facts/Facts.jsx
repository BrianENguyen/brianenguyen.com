import { useEffect } from 'react';
import { Grid } from '@mui/material';

import AOS from 'aos';
import './Facts.css';
import 'aos/dist/aos.css';
import '../../animations/animations.css';

const Facts = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='facts'>
      <Grid container spacing={5}>
        <Grid item sm={12} md={4}>
          <center
            data-aos='reveal-left'
            data-aos-offset='250'
            data-aos-once='true'
          >
            <img
              src='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1642186572/BEN_Website/BEN_profile_night.webp'
              alt='Me smiling at the camera'
              className='facts__image'
              loading='lazy'
            />
          </center>
        </Grid>
        <Grid item sm={12} md={8}>
          <div className='facts__section'>
            <h2 className='header'>Things that define me</h2>
            <h3
              className='subheader'
              data-aos='fade-up'
              data-aos-duration='1000'
              data-aos-once='true'
            >
              I am a software developer, photographer, drummer, gamer,
              pro-wrestling enjoyer, and Linkin Park listener
            </h3>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Facts;
