import Jumbotron from '../components/UI/Jumbotron';
import { Container } from '@mui/material';

const ContactView = () => {
  const jumboText = 'Contact';
  const jumboImage =
    'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1447,b_black,o_70/v1620240502/BEN_Website/jumbotron/BEN_casino_gwmqob.jpg';
  return (
    <div className='contact'>
      <Jumbotron image={jumboImage} title={jumboText} />
      <Container maxWidth='lg'>
        <p>
          You can contact me directly at{' '}
          <a href='mailto:brian.edison.nguyen@gmail.com'>
            brian.edison.nguyen@gmail.com
          </a>
          , or feel free to use the form below to email me
        </p>
      </Container>
    </div>
  );
};

export default ContactView;
