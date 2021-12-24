import { Grid, Container } from '@mui/material';

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
              {/* TODO: add name */}
              <h2>My passion is front-end web development</h2>
              <p>
                I love making websites look beautiful. I have years of
                experience being a web developer with many different
                technologies, such as HTML/CSS/JS, Vue, React, and more. If you
                need a website made, then feel free to reach out to me
              </p>
              {/* TODO: add button that links to portfolio */}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Passion;
