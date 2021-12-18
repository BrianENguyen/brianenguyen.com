import { Grid, Container } from '@mui/material';

import FooterButtons from './FooterButtons';
import FooterBrand from './FooterBrand';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container maxWidth='xl'>
        <Grid container spacing={3}>
          <Grid item sm={12} md={4}>
            <a
              href='mailto:brian.edison.nguyen@gmail.ccom'
              className='footer__link'
            >
              brian.edison.nguyen@gmail.com
            </a>
          </Grid>{' '}
          <Grid item sm={12} md={4}>
            {/* FIXME: misaligned brand */}
            <FooterBrand />
          </Grid>{' '}
          <Grid item sm={12} md={4}>
            <FooterButtons />
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
