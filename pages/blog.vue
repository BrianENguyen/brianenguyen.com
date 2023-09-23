<script setup>
useHead({
  title: 'Blog | BEN',
  meta: [
    {
      name: 'description',
      content: "Discover my stories and programming tutorials through my blog"
    }
  ]
})
</script>

<template>
  <div>
    <UiJumbotron
      jumbotronTitle="My Blog"
      jumbotronDesc="Get insights into what I have been doing recently, whether it is for my career or my personal life"
      src="https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1200,b_black,o_70/v1659204060/BEN_Website/jumbotron/BEN_vegas_strip.webp"
      srcMobile="https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600,b_black,o_70/v1659204060/BEN_Website/jumbotron/BEN_vegas_strip.webp"
    />
    <NuxtLayout>
      <BlogList />
    </NuxtLayout>
  </div>
</template>
