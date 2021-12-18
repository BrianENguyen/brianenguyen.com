import { Grid, Container } from '@mui/material';

import './Footer.css';
const Footer = () => {
  return (
    <footer className='footer'>
      <Container maxWidth='xl'>
        <Grid container spacing={3}>
          <Grid item sm={12} md={4}>
            <a href='mailto:brian.edison.nguyen@gmail.ccom'>
              brian.edison.nguyen@gmail.com
            </a>
          </Grid>{' '}
          <Grid item sm={12} md={4}>
            <img
              src='https://res.cloudinary.com/buraiyen/image/upload/v1620240495/BEN_Website/BEN-logo-transparent_rintta.png'
              width='175px'
              alt=''
            ></img>
          </Grid>{' '}
          <Grid item sm={12} md={4}>
            {/* TODO: footer social links  */}
          </Grid>
        </Grid>
      </Container>
      <hr />
      <Container maxWidth='xs'>
        <p>{new Date().getFullYear()} Brian Nguyen. All rights reserved</p>
      </Container>
    </footer>
  );
};

export default Footer;
