import { TextField, Grid } from '@mui/material';
import emailjs from 'emailjs-com';
import * as yup from 'yup';

import { formSchema } from './ContactFormValidation';
import BtnStandardLight from '../UI/Button/BtnStandardLight';
import './ContactForm.css';

const ContactForm = (props) => {
  const sendEmail = async (event) => {
    event.preventDefault();

    const fName = document.getElementById('first-name').value;
    const lName = document.getElementById('last-name').value;
    const e = document.getElementById('email').value;
    const m = document.getElementById('message').value;

    let formData = {
      firstName: fName,
      lastName: lName,
      email: e,
      message: m,
    };
    const isValid = await formSchema.isValid(formData);
    if (isValid) {
      emailjs
        .sendForm(
          'service_1xwndxg',
          'template_fx6y7uj',
          event.target,
          'user_4vVpxSkvODPvEMWOc492H'
        )
        .then((result) => {
          console.log(result.text);
        })
        .catch((error) => {
          console.log(error.text);
        });
      event.target.reset();
      alert('You submitted the form!');
    } else {
      alert('Uh oh!');
    }
  };

  return (
    <form className='contact-form' onSubmit={sendEmail}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <TextField
            className='contact-form__field'
            id='first-name'
            label='First Name'
            name='first_name'
            placeholder='First name'
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField
            className='contact-form__field'
            id='last-name'
            label='Last Name'
            name='last_name'
          />
        </Grid>
      </Grid>

      <TextField
        className='contact-form__field'
        id='email'
        label='Email'
        name='email'
        type='email'
      />

      <TextField
        className='contact-form__field'
        multiline
        maxRows={4}
        id='message'
        label='Your Message'
        name='message'
      />
      <BtnStandardLight>Submit</BtnStandardLight>
    </form>
  );
};

export default ContactForm;
