import { Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './Footer.css';
import FooterBrand from './FooterBrand';
import FooterButtons from './FooterButtons';

const Footer = () => {
  return (
    <footer className="footer">
      <Container maxWidth="xl">
        <div className="footer__block">
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <div className="footer__section">
                <a
                  href="mailto:brian.edison.nguyen@gmail.com"
                  className="footer__link"
                >
                  brian.edison.nguyen@gmail.com
                </a>
              </div>
            </Grid>{' '}
            <Grid item xs={12} md={4}>
              <FooterBrand />
            </Grid>{' '}
            <Grid item xs={12} md={4}>
              <div className="footer__section">
                <FooterButtons />
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
      <hr className="footer__line-divider" />
      <Container maxWidth="xs">
        <p className="footer__text">
          {new Date().getFullYear()} &mdash; Brian Nguyen
        </p>
        <p className="footer__text">
          See an issue?{' '}
          <a
            href="https://github.com/Buraiyen/BEN-Website-React"
            target="_blank"
            rel="noreferrer"
          >
            Submit a pull request!
          </a>
        </p>
        <Link to="/privacy-policy" className="footer__privacy-policy-link">
          Privacy Policy
        </Link>
      </Container>
    </footer>
  );
};

export default Footer;
