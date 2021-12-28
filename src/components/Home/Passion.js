import { useEffect } from 'react';
import { Grid, Container } from '@mui/material';
import Aos from 'aos';
import { Link } from 'react-router-dom';
import BtnStandard from '../UI/Button/BtnStandard';
import './Passion.css';

const Passion = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div className='passion'>
      <Container>
        <Grid container spacing={2}>
          <Grid item sm={12} md={5}>
            <img
              src='https://res.cloudinary.com/buraiyen/image/upload/v1620240502/BEN_Website/BEN_profile_pic_x81uf8.jpg'
              className='passion__image'
              alt=''
            />
          </Grid>
          <Grid item sm={12} md={7}>
            <div className='passion__text'>
              <h2 data-aos='fade-left'>
                My passion is front-end web development
              </h2>
              <p>
                I love making websites look beautiful. I have years of
                experience being a web developer with many different
                technologies, such as HTML/CSS/JS, Vue, React, and more. If you
                need a website made, then feel free to reach out to me
              </p>
              <center>
                <Link to='/portfolio'>
                  <BtnStandard>View Work</BtnStandard>
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
