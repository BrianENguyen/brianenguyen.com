<template>
  <Jumbotron
    :jumbotronTitle="'About Me'"
    :src="'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1200,b_black,o_70/v1659204062/BEN_Website/jumbotron/BEN_lego.webp'"
    :srcMobile="'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1200,b_black,o_70/v1659204062/BEN_Website/jumbotron/BEN_lego.webp'"
  />
  <DefaultLayout>
    <Quote />
    <Facts />
    <Backstory />
    <TheGallery />
  </DefaultLayout>
</template>

<script>
import Jumbotron from '~/components/ui/Jumbotron'
import DefaultLayout from '~/layouts/default'
import Quote from '~/components/about/Quote'
import Facts from '~/components/about/Facts'
import Backstory from '~/components/about/Backstory'
import TheGallery from '~/components/about/TheGallery'

export default {
  components: {
    Jumbotron,
    DefaultLayout,
    Quote,
    Backstory,
    Facts,
    TheGallery
  }
}
</script>
