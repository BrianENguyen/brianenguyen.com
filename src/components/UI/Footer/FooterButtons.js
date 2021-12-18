import { IconButton } from '@mui/material';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import './Footer.css';

const FooterButtons = () => {
  const github = 'https://github.com/Brian-E-Nguyen/';
  const linkedin = 'https://www.linkedin.com/in/brian-edison-nguyen/';

  return (
    <div className='footer_buttons'>
      <a href={github} target='_blank' rel='noreferrer'>
        <IconButton component='span' className='footer__button'>
          <SiGithub />
        </IconButton>
      </a>
      <a href={linkedin} target='_blank' rel='noreferrer'>
        <IconButton component='span' className='footer__button'>
          <SiLinkedin />
        </IconButton>
      </a>
    </div>
  );
};

export default FooterButtons;
