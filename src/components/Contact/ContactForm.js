import { Grid, TextField } from '@mui/material';

import { useState, useEffect } from 'react';
import Button from '../UI/Button/Button';
import './ContactForm.css';
import { submitForm } from './ContactFormSubmit';
import EmailRegex from './EmailRegex';

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [firstNameValid, setFirstNameValid] = useState();
  const [lastNameValid, setLastNameValid] = useState();
  const [emailValid, setEmailValid] = useState();
  const [messageValid, setMessageValid] = useState();

  const [emailError, setEmailError] = useState('');
  const [formSent, setFormSent] = useState(false);

  const [formIsValid, setFormIsValid] = useState(false);

  /**
   * Check form validity after a 500ms
   * pause in keystrokes
   */
  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        firstName.length &&
          lastName.length &&
          email.length &&
          email.match(EmailRegex) &&
          message.length
      );
    }, 500);
    return () => {
      clearTimeout(identifier);
    };
  }, [firstName, lastName, email, message]);

  const validateForm = (event) => {
    event.preventDefault();
    if (!formIsValid) return;

    try {
      submitForm(event);
      setFormSent(true);
      setFormIsValid(false);
    } catch {
      setFormSent(false);
    }
  };

  // Change Handlers
  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
    setFormSent(false);
  };

  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
    setFormSent(false);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
    setFormSent(false);
  };

  const messageChangeHandler = (event) => {
    setMessage(event.target.value);
    setFormSent(false);
  };

  // Input validations
  const validateFirstName = () => {
    setFirstNameValid(firstName.length ? true : false);
  };

  const validateLastName = () => {
    setLastNameValid(lastName.length ? true : false);
  };

  const validateEmail = () => {
    if (!email.length) setEmailError('Field cannot be blank');
    if (email.length && !email.match(EmailRegex)) {
      setEmailError('Invalid email');
    }
    setEmailValid(email.length && email.match(EmailRegex) ? true : false);
  };

  const validateMessage = () => {
    setMessageValid(message.length ? true : false);
  };

  return (
    <form
      className='contact-form'
      data-testid='contact-form'
      onSubmit={validateForm}
    >
      <Grid container spacing={2}>
        {/* First name */}
        <Grid item xs={6} md={6}>
          <TextField
            className='contact-form__field'
            id='first-name'
            label='First Name *'
            name='first_name'
            error={firstNameValid !== undefined && !firstNameValid}
            onChange={firstNameChangeHandler}
            onBlur={validateFirstName}
          />
          {firstNameValid === false && (
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
            error={lastNameValid !== undefined && !lastNameValid}
            onChange={lastNameChangeHandler}
            onBlur={validateLastName}
          />
          {lastNameValid === false && (
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
        error={emailValid !== undefined && !emailValid}
        onChange={emailChangeHandler}
        onBlur={validateEmail}
      />
      {emailValid === false && (
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
        error={messageValid !== undefined && !messageValid}
        onChange={messageChangeHandler}
        onBlur={validateMessage}
      />
      {messageValid === false && (
        <p className='contact-form__message--error'>Field cannot be blank</p>
      )}

      <Button className='btn-standard-light' disabled={!formIsValid}>
        Submit
      </Button>
      {formSent && <p className='contact-form__message--success'>Form sent!</p>}
    </form>
  );
};

export default ContactForm;
