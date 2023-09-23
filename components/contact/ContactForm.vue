<script setup>
import emailjs from '@emailjs/browser'
</script>
<template>
  <section>
    <p>
      You can contact me directly at
      <a href="mailto:brian.edison.nguyen@gmail.com"
        >brian.edison.nguyen@gmail.com</a
      >, or feel free to use the form below to email me. Please make sure that
      your email address is correct. I'll do my best to respond to you as soon
      as I can!
    </p>
    <form @submit.prevent="handleSubmit" class="mx-4">
      <div class="grid gap-[3rem] zero:grid-cols-1 md:grid-cols-2 mb-4">
        <div>
          <label for="first-name">First Name * </label>
          <input
            class="form-input"
            type="text"
            v-model="form.firstName"
            name="first-name"
            placeholder="John"
          />
          <p class="text-red" v-if="form.errors.firstName">
            {{ form.errors.firstName }}
          </p>
        </div>
        <div>
          <label for="last-name">Last Name * </label>
          <input
            class="form-input"
            type="text"
            v-model="form.lastName"
            name="last-name"
            placeholder="Doe"
          />
          <p class="text-red" v-if="form.errors.lastName">
            {{ form.errors.lastName }}
          </p>
        </div>
      </div>
      <div class="mb-4">
        <label for="email">Email *</label>
        <input
          class="form-input"
          type="email"
          v-model="form.email"
          name="email"
          placeholder="example@protonmail.com"
        />
        <p class="text-red" v-if="form.errors.email">
          {{ form.errors.email }}
        </p>
      </div>
      <div class="mb-4">
        <label for="message">Message *</label>
        <textarea
          name="message"
          class="form-input"
          v-model="form.message"
          cols="30"
          rows="10"
          placeholder="Your message here"
        ></textarea>
        <p class="text-red" v-if="form.errors.message">
          {{ form.errors.message }}
        </p>
      </div>
      <div>
        <label for="math"
          >Anti-spam check: What's {{ form.firstNumber }} {{ form.operation }}
          {{ form.secondNumber }} ? *</label
        >
        <input type="number" class="form-input mb-4" v-model="form.total" />
        <p class="text-red" v-if="form.errors.math">{{ form.errors.math }}</p>
      </div>
      <button type="submit" class="btn">Submit</button>
    </form>
  </section>
</template>

<script>
// import emailjs from '@emailjs/browser';
export default {
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        firstNumber: Math.floor(Math.random() * (9 - 2)) + 2,
        secondNumber: Math.floor(Math.random() * (5 - 1)) + 1,
        operation: Math.random() < 0.5 ? "+" : "-",
        total: null,
        errors: {}
      }
    }
  },
  methods: {
    handleSubmit: async function() {
      const { form } = this;
      form.errors = {};
      this.validateRequiredFields(form);
      this.validateCaptcha(form.firstNumber, form.secondNumber, form.operation, form.total);
      if(form.email.length && !this.isValidEmail(form.email)) {
        form.errors.email = 'Invalid email';
      }
      // All inputs are valid
      if (Object.keys(form.errors).length === 0) {
        emailjs.send('service_r9k0g7v','template_y9ehrb8', form, 'Nz2MANSsAAzHg8hyO')
          .then(() => {
            alert('Success!')
          })
          .catch(err => {
            console.log(err.text)
          })
      }
    },
    // Check if any fields are null
    validateRequiredFields: function(form) {
      if (!form.firstName) {
        form.errors.firstName = 'First name is required';
      }
      if (!form.lastName) {
        form.errors.lastName = 'Last name is required';
      }
      if (!form.email) {
        form.errors.email = 'Email is required';
      }
      if (!form.message) {
        form.errors.message = 'Message is required';
      }
    },
    // Validate math operation
    validateCaptcha: function(firstNumber, secondNumber, operation, total) {
      if (operation === "+" ) {
        if (firstNumber + secondNumber !== total) {
          this.form.errors.math = 'Incorrect math answer';
        }
      }
      else if (operation === "-" ) {
        if (firstNumber - secondNumber !== total) {
          this.form.errors.math = 'Incorrect math answer';
        }
      }
    },
    // Validate email
    isValidEmail: function(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  }
}
</script>
