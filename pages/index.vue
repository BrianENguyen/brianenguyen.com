<template>
  <div>
    <UiJumbotron
      :jumbotronTitle="'Brian E. Nguyen'"
      :jumbotronDesc="'Web Developer'"
      :src="'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1200,b_black,o_70/v1659204062/BEN_Website/jumbotron/BEN_developing.webp'"
      :srcMobile="'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1200,b_black,o_70/v1659204062/BEN_Website/jumbotron/BEN_developing.webp'"
    />
    <DefaultLayout>
      <IndexPassion />
      <IndexWebCardList />
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
