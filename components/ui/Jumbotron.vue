<template>
  <div class="text-center relative bg-black border-none">
    <picture>
      <source :srcset="src || ''" media="(min-width: 600px)" />
      <img
        :src="srcMobile || ''"
        :lazy-src="srcMobile || ''"
        alt=""
        decoding="async"
        class="object-cover w-screen relative z-0"
      />
    </picture>
    <div class="absolute top-[50%] left-[50%]">
      <h1 class="text-white">{{ jumbotronTitle }}</h1>
      <p class="text-white">{{ jumbotronDesc }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  src?: string
  srcMobile?: string
  jumbotronTitle?: string
  jumbotronDesc?: string
}>()
</script>
