import { Grid, Container } from '@mui/material';

import FooterButtons from './FooterButtons';
import FooterBrand from './FooterBrand';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container maxWidth='xl'>
        <div className='footer__block'>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <div className='footer__section'>
                <a
                  href='mailto:brian.edison.nguyen@gmail.com'
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
        <Link to='/privacy-policy' className='footer__privacy-policy-link'>
          Privacy Policy
        </Link>
      </Container>
    </footer>
  );
};

export default Footer;
