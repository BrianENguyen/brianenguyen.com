<template>
  <a
    class="inline-block mx-2 my-4 border-brian-blue border-1 border-solid p-4 rounded decoration-none"
    :href="href"
    target="_blank"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: ''
  },
})
</script>
