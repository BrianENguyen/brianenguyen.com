<template>
  <div>
    <Jumbotron
      :jumbotronTitle="'Brian E. Nguyen'"
      :jumbotronDesc="'Web Developer'"
      :src="'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1200,b_black,o_70/v1659204062/BEN_Website/jumbotron/BEN_developing.webp'"
    />
  </div>
</template>

<script>
import Jumbotron from '~/components/ui/Jumbotron.vue';

export default {
  components: {
    Jumbotron
  }
}
</script>
