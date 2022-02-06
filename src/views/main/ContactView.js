import { Container } from '@mui/material';
import ContactForm from '../../components/Contact/ContactForm';
import { ContactData } from '../../components/Helper/JumbotronData';
import { TitleChange } from '../../components/Helper/TitleChange';

import Jumbotron from '../../components/UI/Jumbotron/Jumbotron';

const ContactView = () => {
  TitleChange('Contact | BEN');

  const jumboTitle = ContactData.title;
  const jumboImage = ContactData.image;
  return (
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
          that your email address is correct. I'll do my best to respond to you
          as soon as I can!
        </p>
        <ContactForm />
      </Container>
    </div>
  );
};

export default ContactView;
