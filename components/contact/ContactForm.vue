<template>
  <p>
    You can contact me directly at
    <a href="mailto:brian.edison.nguyen@gmail.com"
      >brian.edison.nguyen@gmail.com</a
    >, or feel free to use the form below to email me. Please make sure that
    your email address is correct. I'll do my best to respond to you as soon as
    I can!
  </p>
  <form>
    <div class="grid gap-[3rem] zero:grid-cols-1 md:grid-cols-2 mb-4">
      <div>
        <label for="first-name">First Name * </label>
        <input
          class="form-input"
          type="text"
          name="first-name"
          placeholder="John"
        />
      </div>
      <div>
        <label for="last-name">Last Name * </label>
        <input
          class="form-input"
          type="text"
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
        name="email"
        placeholder="example@protonmail.com"
      />
    </div>
    <div class="mb-4">
      <label for="message">Message *</label>
      <textarea
        name="message"
        class="form-input"
        cols="30"
        rows="10"
        placeholder="Your message here"
      ></textarea>
    </div>
    <button type="submit" class="btn">Submit</button>
  </form>
</template>
