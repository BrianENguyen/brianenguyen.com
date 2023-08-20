<template>
  <section class="grid grid-cols-5 gap-2">
    <div
      v-for="image in images"
      :key="image.src"
      class="max-w-[400px] max-h-[400px]"
    >
      <img
        :src="image.src"
        :alt="image.alt"
        class="w-[100%] rounded aspect-square object-cover"
      />
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
          alt: 'Two hands forming a heart in front of a setting sun'
        },
        {
          src: `${urlPrefix}/BEN_lbnightportrait.webp`,
          alt: 'Thu sitting in front of the setting sun, smiling'
        },
        {
          src: `${urlPrefix}/BEN_fairylights.webp`,
          alt: 'Two hands forming a heart in front of a setting sun'
        },
        {
          src: `${urlPrefix}/BEN_fairylights.webp`,
          alt: 'Two hands forming a heart in front of a setting sun'
        },
        {
          src: `${urlPrefix}/BEN_fairylights.webp`,
          alt: 'Two hands forming a heart in front of a setting sun'
        },
        {
          src: `${urlPrefix}/BEN_fairylights.webp`,
          alt: 'Two hands forming a heart in front of a setting sun'
        },
      ]
    }
  }
}
</script>
