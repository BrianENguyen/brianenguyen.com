import { TextField, Grid } from '@mui/material';

import BtnStandard from '../UI/Button/BtnStandard';
import './ContactForm.css';

const ContactForm = (props) => {
  return (
    <form className='contact-form'>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <TextField
            className='contact-form__field'
            required
            id='outlined-required'
            label='First Name'
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <TextField
            className='contact-form__field'
            required
            id='outlined-required'
            label='Last Name'
          />
        </Grid>
      </Grid>

      <TextField
        className='contact-form__field'
        required
        id='outlined-required'
        label='Email'
      />
      <TextField
        className='contact-form__field'
        required
        multiline
        maxRows={4}
        id='outlined-required'
        label='Your Message'
      />
      <BtnStandard />
    </form>
  );
};

export default ContactForm;
