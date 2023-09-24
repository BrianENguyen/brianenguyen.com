<template>
  <NuxtLink
    :to="to"
    class="inline-block font-[monospace] text-xl decoration-none my-4
        !text-[#9e9d9d] hover:!text-[#cdd9e5] cursor-pointer
          transition-color duration-300"
    title="This means to go back to the previous page (based on the site's hierarchy)"
  >
    cd ..
  </NuxtLink>
</template>

<script>
export default {
  props: ['to']
}
</script>
