<template>
  <section class="grid-grid-cols-5">
    <div v-for="image in images" :key="image.src">
      <img :src="image.src" :alt="image.alt" class="w-[100%] rounded" />
      <p class="text-center text-xl">{{ image.title }}</p>
    </div>
  </section>
</template>

<script>
const urlPrefix = 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_800/v1620240503/BEN_Website/photo-gallery';

export default {
  data() {
    return {
      images: [
        {
          src: `${urlPrefix}/BEN_heart.webp`,
          alt: ''
        }
      ]
    }
  }
}
</script>
