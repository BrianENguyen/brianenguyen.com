import { Grid, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Button from '../ui/button/Button';
import './Passion.css';
import AnimatedHeader from '../animations/AnimatedHeader';
const Passion = () => {
  return (
    <div className='passion'>
      <Container>
        <Grid container spacing={2}>
          <Grid item sm={12} md={5}>
            <img
              src='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_669/v1620240502/BEN_Website/BEN_profile_pic_x81uf8.jpg'
              loading='lazy'
              className='passion__image'
              alt=''
            />
          </Grid>
          <Grid item sm={12} md={7}>
            <div className='passion__text'>
              <h1>
                <AnimatedHeader>
                  My passion is front-end web development
                </AnimatedHeader>
              </h1>
              <p>
                I love making beautiful websites. I have at least 3 years of
                experience being a web developer with many different
                technologies, such as HTML/CSS/JS, Vue, React, and more.
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
