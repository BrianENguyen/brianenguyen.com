import { Grid, Container } from '@mui/material';

import FooterButtons from './FooterButtons';
import FooterBrand from './FooterBrand';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container maxWidth='xl'>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <div className='footer__section'>
              <a
                href='mailto:brian.edison.nguyen@gmail.ccom'
                className='footer__link'
              >
                brian.edison.nguyen@gmail.com
              </a>
            </div>
          </Grid>{' '}
          <Grid item xs={12} md={4}>
            {/* FIXME: misaligned brand */}
            <FooterBrand />
          </Grid>{' '}
          <Grid item xs={12} md={4}>
            <div className='footer__section'>
              <FooterButtons />
            </div>
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
