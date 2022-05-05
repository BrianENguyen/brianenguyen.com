import { Container } from '@mui/material';
import { useEffect } from 'react';
import AnimatedPage from '../../components/Animations/AnimatedPage';
import ContactForm from '../../components/contact/ContactForm';
import { ContactData } from '../../helper/JumbotronData';
import { ContactPageTitle } from '../../helper/PageTitleData';
import Jumbotron from '../../components/UI/Jumbotron/Jumbotron';

const ContactView = () => {
  const jumboTitle = ContactData.title;
  const jumboImage = ContactData.image;

  useEffect(() => {
    document.title = ContactPageTitle;
  }, []);

  return (
    <AnimatedPage>
      <div
        className='contact'
        style={{
          backgroundColor: 'white',
          color: 'black',
        }}
      >
        <Jumbotron image={jumboImage} title={jumboTitle} />
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
