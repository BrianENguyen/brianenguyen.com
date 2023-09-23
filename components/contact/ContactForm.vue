<template>
  <p>
    You can contact me directly at
    <a href="mailto:brian.edison.nguyen@gmail.com"
      >brian.edison.nguyen@gmail.com</a
    >, or feel free to use the form below to email me. Please make sure that
    your email address is correct. I'll do my best to respond to you as soon as
    I can!
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
    </div>
    <div>
      <label for="math"
        >Anti-spam check: What's {{ form.firstNumber }} {{ form.operation }}
        {{ form.secondNumber }} ? *</label
      >
      <input type="number" class="form-input mb-4" v-model="form.total" />
    </div>
    <button type="submit" class="btn">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form :{
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        firstNumber: Math.floor(Math.random() * (9 - 2)) + 2,
        secondNumber: Math.floor(Math.random() * (5 - 1)) + 1,
        operation: Math.random() < 0.5 ? "+" : "-",
        total: ''
      }
    }
  },
  methods: {
    handleSubmit: async function() {
      console.log(this.form)
    }
  }
}
</script>
