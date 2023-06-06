import React from 'react';

import { IconButton } from '@mui/material';
import { SiGithub } from 'react-icons/si';
import { GrLinkedinOption } from 'react-icons/gr';
import './Footer.css';

const FooterButtons = () => {
  const github = 'https://github.com/Buraiyen/';
  const linkedin = 'https://www.linkedin.com/in/brian-e-nguyen/';

  return (
    <div className='footer_buttons'>
      <a
        href={github}
        target='_blank'
        rel='noreferrer'
        data-testid='github-button'
      >
        <IconButton component='span' className='footer__button'>
          <SiGithub className='footer__button__image' />
        </IconButton>
      </a>
      <a
        href={linkedin}
        target='_blank'
        rel='noreferrer'
        data-testid='linkedin-button'
      >
        <IconButton component='span' className='footer__button'>
          <GrLinkedinOption className='footer__button__image' />
        </IconButton>
      </a>
    </div>
  );
};

export default FooterButtons;
