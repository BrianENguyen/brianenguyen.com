import emailjs from 'emailjs-com';

export const submitForm = (event) => {
  // TODO: add try / catch block
  emailjs
    .sendForm(
      'service_1xwndxg',
      'template_fx6y7uj',
      event.target,
      'user_4vVpxSkvODPvEMWOc492H'
    )
    // TODO: remove console logs
    .then((result) => {
      console.log(result.text);
    })
    .catch((error) => {
      console.log(error.text);
    });
  event.target.reset();
  // TODO: change alert comments
  alert('You submitted the form!');
};
