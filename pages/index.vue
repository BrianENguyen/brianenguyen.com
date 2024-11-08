<script setup>
const { sayHi } = useUtils();
sayHi();

useHead({
  title: 'Brian E. Nguyen | Web Developer',
  meta: [
    {
      name: 'description',
      content: "Welcome to Brian E. Nguyen's website. Explore my portfolio, insights, and get in touch with me for all your web-related needs."
    }
  ]
})
</script>

<template>
  <div>
    <UiJumbotron
      :jumbotronTitle="'Brian E. Nguyen'"
      jumbotronDesc="Full-Stack Web Developer"
      :src="'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1200,b_black,o_70/v1659204062/BEN_Website/jumbotron/BEN_developing.webp'"
      :srcMobile="'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1200,b_black,o_70/v1659204062/BEN_Website/jumbotron/BEN_developing.webp'"
    />
    <DefaultLayout>
      <IndexPassion />
      <IndexWebCardList />
      <IndexLatestProjects />
    </DefaultLayout>
  </div>
</template>

<script>
import DefaultLayout from '~/layouts/default'

export default {
  components: {
    DefaultLayout
  }
}
</script>
