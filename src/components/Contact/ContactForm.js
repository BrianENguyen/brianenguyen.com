import { TextField, Grid } from '@mui/material';
import { useState } from 'react';
import * as yup from 'yup';

import { formSchema } from './ContactFormValidation';
import BtnStandardLight from '../UI/Button/BtnStandardLight';
import './ContactForm.css';
import { submitForm } from './ContactFormSubmit';

const ContactForm = (props) => {
  const [firstNameValid, setFirstNameValid] = useState(true);
  const [lastNameValid, setLastNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [messageValid, setMessageValid] = useState(true);

  const validateForm = async (event) => {
    event.preventDefault();

    if (firstNameValid && lastNameValid && emailValid && messageValid) {
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
      // TODO: change alert comments
      const isValid = await formSchema.isValid(formData);
      if (isValid) {
        submitForm(event);
      } else {
        alert('One or more of your inputs are invalid!');
      }
    } else {
      alert('One or more of your inputs are invalid!');
    }
  };

  const firstNameHandler = (e) => {
    const firstName = e.target.value;
    if (firstName.length > 0) {
      setFirstNameValid(true);
    } else setFirstNameValid(false);
  };
  const lastNameHandler = (e) => {
    const lastName = e.target.value;
    if (lastName.length > 0) {
      setLastNameValid(true);
    } else setLastNameValid(false);
  };
  const emailHandler = (e) => {
    const email = e.target.value;
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const emailRe = email.match(re);
    if (email.length > 0 && emailRe) {
      setEmailValid(true);
    } else setEmailValid(false);
  };
  const messageHandler = (e) => {
    const message = e.target.value;
    if (message.length > 0) {
      setMessageValid(true);
    } else setMessageValid(false);
  };
  return (
    <form className='contact-form' onSubmit={validateForm}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <TextField
            className='contact-form__field'
            id='first-name'
            label='First Name'
            name='first_name'
            placeholder='First name'
            error={firstNameValid ? false : true}
            onChange={firstNameHandler}
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField
            className='contact-form__field'
            id='last-name'
            label='Last Name'
            name='last_name'
            error={lastNameValid ? false : true}
            onChange={lastNameHandler}
          />
        </Grid>
      </Grid>

      <TextField
        className='contact-form__field'
        id='email'
        label='Email'
        name='email'
        type='email'
        error={emailValid ? false : true}
        onChange={emailHandler}
      />

      <TextField
        className='contact-form__field'
        multiline
        maxRows={4}
        id='message'
        label='Your Message'
        name='message'
        error={messageValid ? false : true}
        onChange={messageHandler}
      />
      <BtnStandardLight>Submit</BtnStandardLight>
    </form>
  );
};

export default ContactForm;
