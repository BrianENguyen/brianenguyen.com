import Jumbotron from '../components/UI/Jumbotron';

const ContactView = () => {
  const jumboText = 'Contact';
  const jumboImage =
    'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1447,b_black,o_70/v1620240502/BEN_Website/jumbotron/BEN_casino_gwmqob.jpg';
  return (
    <div className='portfolio'>
      <Jumbotron image={jumboImage} title={jumboText} />
      <h1>Contact</h1>
    </div>
  );
};

export default ContactView;
