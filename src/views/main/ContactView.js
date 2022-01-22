import { Container } from '@mui/material';

import Jumbotron from '../../components/UI/Jumbotron/Jumbotron';
import ContactForm from '../../components/Contact/ContactForm';
import { TitleChange } from '../../components/Helper/TitleChange';

const ContactView = () => {
  TitleChange('Contact | BEN');

  const jumboText = 'Contact';
  const jumboImage =
    'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1447,b_black,o_70/v1620240502/BEN_Website/jumbotron/BEN_casino_gwmqob.jpg';
  return (
    <div
      className='contact'
      style={{
        backgroundColor: 'white',
        color: 'black',
      }}
    >
      <Jumbotron image={jumboImage} title={jumboText} />
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
