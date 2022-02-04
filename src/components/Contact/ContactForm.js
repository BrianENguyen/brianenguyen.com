import { TextField, Grid } from '@mui/material';
import { useState, useEffect } from 'react';

import { formSchema } from './ContactFormValidation';
import BtnStandardLight from '../UI/Button/BtnStandardLight';
import './ContactForm.css';
import { submitForm } from './ContactFormSubmit';

const ContactForm = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [firstNameValid, setFirstNameValid] = useState(true);
  const [lastNameValid, setLastNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [messageValid, setMessageValid] = useState(true);

  const [emailError, setEmailError] = useState('');
  const [formSent, setFormSent] = useState(false);

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
      const isValid = await formSchema.isValid(formData);
      if (isValid) {
        try {
          submitForm(event);
          setFormSent(true);
        } catch {
          setFormSent(false);
        }
      }
    }
  };

  const firstNameChangeHandler = (event) => {
    // const firstName = event.target.value;
    // if (firstName.length > 0) {
    //   setFirstNameValid(true);
    // } else setFirstNameValid(false);
    setFirstName(event.target.value);
  };
  const lastNameChangeHandler = (event) => {
    // const lastName = event.target.value;
    // if (lastName.length > 0) {
    //   setLastNameValid(true);
    // } else setLastNameValid(false);
    setLastName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
    // const email = event.target.value;
    // if (email.length > 0) {
    //   const re =
    //     /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    //   const isValidEmailFormat = email.match(re);
    //   if (isValidEmailFormat) {
    //     setEmailValid(true);
    //   } else {
    //     setEmailValid(false);
    //     setEmailError('Invalid email');
    //   }
    // } else {
    //   setEmailValid(false);
    //   setEmailError('Field cannot be blank');
    // }
  };
  const messageChangeHandler = (event) => {
    setMessage(event.target.value);
    // const message = event.target.value;
    // if (message.length > 0) {
    //   setMessageValid(true);
    // } else setMessageValid(false);
  };

  return (
    <form className='contact-form' onSubmit={validateForm}>
      <Grid container spacing={2}>
        {/* First name */}
        <Grid item xs={6} md={6}>
          <TextField
            className='contact-form__field'
            id='first-name'
            label='First Name *'
            name='first_name'
            error={firstNameValid ? false : true}
            onChange={firstNameChangeHandler}
          />
          {!firstNameValid && (
            <p className='contact-form__message--error'>
              Field cannot be blank
            </p>
          )}
        </Grid>
        {/* Last name */}
        <Grid item xs={6} md={6}>
          <TextField
            className='contact-form__field'
            id='last-name'
            label='Last Name *'
            name='last_name'
            error={lastNameValid ? false : true}
            onChange={lastNameChangeHandler}
          />
          {!lastNameValid && (
            <p className='contact-form__message--error'>
              Field cannot be blank
            </p>
          )}
        </Grid>
      </Grid>
      {/* Email */}
      <TextField
        className='contact-form__field'
        id='email'
        label='Email *'
        name='email'
        type='email'
        error={emailValid ? false : true}
        onChange={emailChangeHandler}
      />
      {!emailValid && (
        <p className='contact-form__message--error'>{emailError}</p>
      )}

      {/* Message */}
      <TextField
        className='contact-form__field'
        multiline
        maxRows={4}
        id='message'
        label='Your Message *'
        name='message'
        error={messageValid ? false : true}
        onChange={messageChangeHandler}
      />
      {!messageValid && (
        <p className='contact-form__message--error'>Field cannot be blank</p>
      )}

      <BtnStandardLight>Submit</BtnStandardLight>
      {formSent && <p className='contact-form__message--success'>Form sent!</p>}
    </form>
  );
};

export default ContactForm;
