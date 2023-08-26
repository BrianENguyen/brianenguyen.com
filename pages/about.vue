<template>
  <UiJumbotron
    :jumbotronTitle="'About Me'"
    :src="'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1200,b_black,o_70/v1659204062/BEN_Website/jumbotron/BEN_lego.webp'"
    :srcMobile="'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1200,b_black,o_70/v1659204062/BEN_Website/jumbotron/BEN_lego.webp'"
  />
  <DefaultLayout>
    <AboutQuote />
    <AboutFacts />
    <AboutBackstory />
    <AboutTheGallery />
    <AboutPhotoGallery />
    <AboutMoreToExplore />
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '~/layouts/default'

export default {
  components: {
    DefaultLayout
  }
}
</script>
