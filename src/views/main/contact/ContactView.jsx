import React from 'react';

import { Container } from '@mui/material';
import { useEffect } from 'react';
import AnimatedPage from '../../../components/animations/AnimatedPage';
import ContactForm from '../../../components/contact/ContactForm';
import { ContactJumboData } from '../../../helper/JumbotronData';
import { ContactPageTitle } from '../../../helper/PageTitleData';
import Jumbotron from '../../../components/ui/jumbotron/Jumbotron';

const ContactView = () => {
  useEffect(() => {
    document.title = ContactPageTitle;
  }, []);

  const jumboTitle = ContactJumboData.title;
  const jumboImage = ContactJumboData.src;
  const jumboImageMobile = ContactJumboData.srcMobile;

  return (
    <AnimatedPage>
      <div
        className='contact'
        style={{
          backgroundColor: 'white',
          color: 'black',
        }}
      >
        <Jumbotron
          title={jumboTitle}
          src={jumboImage}
          srcMobile={jumboImageMobile}
        />
        <Container maxWidth='lg'>
          <p>
            You can contact me directly at{' '}
            <a href='mailto:brian.edison.nguyen@gmail.com'>
              brian.edison.nguyen@gmail.com
            </a>
            , or feel free to use the form below to email me. Please make sure
            that your email address is correct. I'll do my best to respond to
            you as soon as I can!
          </p>
          <ContactForm />
        </Container>
      </div>
    </AnimatedPage>
  );
};

export default ContactView;
