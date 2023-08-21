<template>
  <Jumbotron
    jumbotronTitle="My Resume"
    src="https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1200,b_black,o_70/v1659204062/BEN_Website/jumbotron/BEN_thinkpad.webp"
    srcMobile="https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600,b_black,o_70/v1659204062/BEN_Website/jumbotron/BEN_thinkpad.webp"
  />
  <NuxtLayout>
    <Experience />
  </NuxtLayout>
</template>

<script>
import Jumbotron from '~/components/ui/Jumbotron';
import Experience from '~/components/resume/Experience';

export default {
  components: {
    Jumbotron,
    Experience
  }
}
</script>
