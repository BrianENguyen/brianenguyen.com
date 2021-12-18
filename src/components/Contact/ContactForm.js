import { TextField, Grid } from '@mui/material';
import emailjs from 'emailjs-com';

import BtnStandardLight from '../UI/Button/BtnStandardLight';
import './ContactForm.css';

const ContactForm = (props) => {
  const sendEmail = (e) => {
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
  };

  return (
    <form className='contact-form' onSubmit={sendEmail}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          {/* FIRST NAME */}
          <TextField
            className='contact-form__field'
            required
            id='outlined-required'
            label='First Name'
            name='first_name'
          />
        </Grid>
        <Grid item xs={6} md={6}>
          {/* LAST NAME */}
          <TextField
            className='contact-form__field'
            required
            id='outlined-required'
            label='Last Name'
            name='last_name'
          />
        </Grid>
      </Grid>

      {/* EMAIL */}
      <TextField
        className='contact-form__field'
        required
        id='outlined-required'
        label='Email'
        name='email'
      />
      {/* MESSAGE */}
      <TextField
        className='contact-form__field'
        required
        multiline
        maxRows={4}
        id='outlined-required'
        label='Your Message'
        name='message'
      />
      <BtnStandardLight>Submit</BtnStandardLight>
    </form>
  );
};

export default ContactForm;
