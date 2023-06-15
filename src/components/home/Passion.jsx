import { useEffect } from 'react';
import { Grid, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Button from '../ui/button/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Passion.css';
import '../animations/animations.css';

const Passion = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className='passion'>
      <Container>
        <Grid container spacing={2}>
          <Grid
            item
            sm={12}
            md={5}
            data-aos='reveal-left'
            data-aos-offset='250'
            data-aos-once='true'
          >
            <img
              src='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_450/v1675707556/BEN_Website/BEN_profile3.webp'
              width='450px'
              height='450px'
              loading='lazy'
              className='passion__image'
              alt='Profile shot of me, sitting on the stairway at the Getty Museum'
            />
          </Grid>
          <Grid item sm={12} md={7}>
            <div className='passion__text'>
              <h1>My passion is software development</h1>
              <p>
                I am a software developer with a focus on frontend / fullstack
                development with over 7 years of experience. I don't just write
                code, I create solutions and transform them into digital
                realities
              </p>
              <center>
                <Link to='/portfolio'>
                  <Button className='btn-standard'>View My Work</Button>
                </Link>
              </center>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Passion;
