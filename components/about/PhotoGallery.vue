<template>
  <section class="grid zero:grid-cols-2 md:grid-cols-5 gap-2">
    <div
      v-for="image in images"
      :key="image.src"
      class="zero:max-w-[300px] zero:max-h-[300px] md:max-w-[400px] md:max-h-[400px]"
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
          alt: 'Trang posing in front of the Long Beach docks at night'
        },
        {
          src: `${urlPrefix}/BEN_longexposure.webp`,
          alt: 'Long exposure spiral using blue LED lights'
        },
        {
          src: `${urlPrefix}/BEN_fairylights.webp`,
          alt: 'Thu holding up fairy light'
        },
        {
          src: `${urlPrefix}/BEN_vegasstrip.webp`,
          alt: 'Las Vegas strip at night'
        },
        {
          src: `${urlPrefix}/BEN_redondobeach2.webp`,
          alt: 'Lily posing at Redondo Beach'
        },
        {
          src: `${urlPrefix}/BEN_fireworks.webp`,
          alt: 'Me posing in front of pink fireworks'
        },
        {
          src: `${urlPrefix}/BEN_laptop.webp`,
          alt: 'My laptop with VSCodium opened'
        },
        {
          src: `${urlPrefix}/BEN_maternity.webp`,
          alt: 'Lily posiing at Redondo Beach'
        },
        {
          src: `${urlPrefix}/BEN_huntingtonbeach.webp`,
          alt: 'Sunset at Huntington Beach'
        },
      ]
    }
  }
}
</script>
