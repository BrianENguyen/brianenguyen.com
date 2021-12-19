import { TextField, Grid } from '@mui/material';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

import BtnStandardLight from '../UI/Button/BtnStandardLight';
import './ContactForm.css';

const ContactForm = (props) => {
  const sendEmail = (data, e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_1xwndxg',
        'template_fx6y7uj',
        e.target,
        'user_4vVpxSkvODPvEMWOc492H'
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
    e.target.reset();

    // console.log(data);
  };

  return (
    <form className='contact-form' onSubmit={sendEmail}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <TextField
            className='contact-form__field'
            id='outlined-required'
            label='First Name'
            name='first_name'
            placeholder='First name'
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField
            className='contact-form__field'
            id='outlined-required'
            label='Last Name'
            name='last_name'
          />
        </Grid>
      </Grid>

      <TextField
        className='contact-form__field'
        id='outlined-required'
        label='Email'
        name='email'
        type='email'
      />

      <TextField
        className='contact-form__field'
        multiline
        maxRows={4}
        id='outlined-required'
        label='Your Message'
        name='message'
      />
    </form>
  );
};

export default ContactForm;
