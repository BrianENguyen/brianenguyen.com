<template>
  <div :class="['mb-4', {'text-center': center}]">
    <h2 class="text-brian-blue uppercase text-sm font-bold font-[Poppins] mb-0">
      {{ title }}
    </h2>
    <p class="text-4xl font-[Playfair_Display] mt-0 mb-4">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  props: ['title', 'description', 'center']
}
</script>
