<script setup>
const joke = useState('joke', () => '');
const loading = useState('loading', () => true);

fetch('https://v2.jokeapi.dev/joke/Programming?safe-mode')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Error: ' + response.status);
    }
    loading.value = false;
    return response.json();
  })
  .then((jokeData) => {
    joke.value = { setup: jokeData.setup, delivery: jokeData.delivery };
    loading.value = false;
  })
  .catch((err) => {
    loading.value = false;
  });
</script>

<template>
  <div>
    <!-- <UiNavbar /> -->
    <UiJumbotron
      jumbotronTitle="404 Error"
      jumbotronDesc="The page that you are trying to reach does not exist or is no longer available."
      src="https://res.cloudinary.com/buraiyen/image/upload/c_scale,b_black,o_70/v1620240515/BEN_Website/BEN_huntingtonbeach_ac9rzj.jpg"
      srcMobile="https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600,b_black,o_70/v1620240515/BEN_Website/BEN_huntingtonbeach_ac9rzj.jpg"
    />

    <section class="text-lg mx-auto max-w-700px px-4">
      <p>
        If this is a problem, please don't hesitate to
        <a href="mailto:hello@brianenguyen.com">email me</a>, or
        <a
          href="https://github.com/Buraiyen/brianenguyen.com/issues"
          target="_blank"
        >
          send an issue on GitHub.
        </a>
      </p>
      <p>While you're here, here's a random joke:</p>

      <!-- 
      For some reason the API doesn't always return the joke,
      so I just hardcoded one just in case
    -->
      <div v-if="!loading">
        <p v-if="joke.setup">{{ joke.setup }}</p>
        <p v-else>Why did the programmer quit his job?</p>
        <p v-if="joke.delivery">{{ joke.delivery }}</p>
        <p v-else>Because he didn't get arrays.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'default'
}
</script>
