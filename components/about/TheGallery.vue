<template>
  <!-- 
  This is called "The Gallery" because each photo 
  starts with the word "The" 
  -->
  <section class="grid grid-cols-4 gap-8">
    <div v-for="image in images" :key="image.src">
      <img :src="image.src" :alt="image.alt" class="w-[100%] rounded" />
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
          alt: "Thu hugging me while she is sitting down",
          title: "The wife"
        },
        {
          src: `${urlPrefix}/BEN_me_and_mimi.webp`,
          alt: "Me sitting with Mimi, kissing her forehead",
          title: "The best dog ever"
        },
        {
          src: `${urlPrefix}/BEN_me_kiki_and_lucky.webp`,
          alt: "Me sitting with Kiki and Lucky",
          title: "The two other best dogs ever"
        },
        {
          src: `${urlPrefix}/BEN_org.webp`,
          alt: "Org mode workflow",
          title: "The focus"
        },
      ]
    }
  }
}
</script>
