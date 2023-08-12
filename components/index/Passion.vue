<template>
  <DefaultLayout>
    <section class="grid zero:grid-cols-1 md:grid-cols-2">
      <div>
        <img
          src="https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_450/v1675707556/BEN_Website/BEN_profile3.webp"
          width="450px"
          height="450px"
          loading="lazy"
          className="rounded
                  w-[100%] min-w-[200px] max-w-[450px]
                  h-auto max-h-[450px]"
          alt="Profile shot of me, sitting on the stairway at the Getty Museum"
        />
      </div>
    </section>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '~/layouts/default.vue'

export default {
  components: {
    DefaultLayout
  }
}
</script>
