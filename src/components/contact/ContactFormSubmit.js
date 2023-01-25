import React from 'react';

import emailjs from 'emailjs-com';

export const submitForm = (event) => {
  emailjs.sendForm(
    'service_1xwndxg',
    'template_fx6y7uj',
    event.target,
    'user_4vVpxSkvODPvEMWOc492H'
  );
  event.target.reset();
};
