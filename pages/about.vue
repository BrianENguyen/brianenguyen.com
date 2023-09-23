<script setup>
useHead({
  title: 'About Me | BEN',
  meta: [
    {
      name: 'description',
      content: "Explore my life and my goals through coding and photography."
    }
  ]
})
</script>

<template>
  <div>
    <UiJumbotron
      :jumbotronTitle="'About Me'"
      :src="'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1200,b_black,o_70/v1659204062/BEN_Website/jumbotron/BEN_lego.webp'"
      :srcMobile="'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1200,b_black,o_70/v1659204062/BEN_Website/jumbotron/BEN_lego.webp'"
    />
    <NuxtLayout>
      <AboutQuote />
      <AboutFacts />
      <AboutBackstory />
      <AboutTheGallery />
      <AboutPhotoGallery />
      <AboutMoreToExplore />
    </NuxtLayout>
  </div>
</template>
