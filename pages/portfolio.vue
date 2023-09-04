<script setup>
const route = useRoute()
console.log(route.path)
</script>

<template>
  <div v-if="route.path === '/portfolio/'">
    <UiJumbotron
      jumbotronTitle="Portfolio"
      src="https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1200,b_black,o_70/v1659204060/BEN_Website/jumbotron/BEN_webdev_code.webp"
      srcMobile="https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600,b_black,o_70/v1659204060/BEN_Website/jumbotron/BEN_webdev_code.webp"
    />
    <NuxtLayout>
      <UiSectionHeader
        title="My work"
        description="A collection of various websites that I have designed and developed"
      />
      <PortfolioProjectList />
    </NuxtLayout>
  </div>
  <NuxtLayout :name="'project'" v-else>
    <NuxtPage />
  </NuxtLayout>
</template>
