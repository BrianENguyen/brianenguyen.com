import { Grid, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import BtnStandard from '../UI/Button/BtnStandard';
import './Passion.css';

const Passion = () => {
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
              <h1>My passion is front-end web development</h1>
              <p>
                I love making beautiful websites. I have at least 3 years of
                experience being a web developer with many different
                technologies, such as HTML/CSS/JS, Vue, React, and more. If you
                need a website made, then feel free to reach out to me
              </p>
              <center>
                <Link to='/portfolio'>
                  <BtnStandard>View My Work</BtnStandard>
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
