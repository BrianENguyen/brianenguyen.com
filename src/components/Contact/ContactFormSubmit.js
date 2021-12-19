import emailjs from 'emailjs-com';

export const submitForm = (event) => {
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
};
