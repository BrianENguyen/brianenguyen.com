<template>
  <!-- 
  This is called "The Gallery" because each photo 
  starts with the word "The" 
  -->

  <section class="grid grid-cols-4">
    <div v-for="image in images" :key="image.src">
      <img :src="image.src" alt="" class="w-[100%] rounded" />
      <p class="text-center text-xl">{{ image.title }}</p>
    </div>
  </section>
</template>

<script>
const urlPrefix = "https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_900/v1692551660/BEN_Website/about";
export default {
  data() {
    return {
      images: [
        {
          src: `${urlPrefix}/BEN_me_and_thu.webp`,
          title: "The wife"
        }
      ]
    }
  }
}
</script>
