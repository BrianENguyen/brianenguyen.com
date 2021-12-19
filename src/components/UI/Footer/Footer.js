import { Grid, Container } from '@mui/material';

import FooterButtons from './FooterButtons';
import FooterBrand from './FooterBrand';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container maxWidth='xl'>
        <div className='footer__block'>
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
              <FooterBrand />
            </Grid>{' '}
            <Grid item xs={12} md={4}>
              <div className='footer__section'>
                <FooterButtons />
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
      <hr className='footer__line-divider' />
      <Container maxWidth='xs'>
        <p className='footer__copyright'>
          {new Date().getFullYear()} Brian Nguyen. All rights reserved
        </p>
        {/* TODO: add privacy policy link */}
      </Container>
    </footer>
  );
};

export default Footer;
