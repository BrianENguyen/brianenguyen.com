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
    setFirstName(event.target.value);
  };
  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const messageChangeHandler = (event) => {
    setMessage(event.target.value);
  };

  const validateFirstName = () => {
    setFirstNameValid(firstName.length);
  };

  const validateLastName = () => {
    setLastNameValid(lastName.length);
  };

  const validateEmail = () => {
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email.length) setEmailError('Field cannot be blank');
    if (email.length && !email.match(re)) setEmailError('Invalid email');
    setEmailValid(lastName.length && email.match(re));
  };

  const validateMessage = () => {
    setMessageValid(message.length);
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
            onBlur={validateFirstName}
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
            onBlur={validateLastName}
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
        onBlur={validateEmail}
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
        onBlur={validateMessage}
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
