<template>
  <a :href="href" target="_blank">
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
