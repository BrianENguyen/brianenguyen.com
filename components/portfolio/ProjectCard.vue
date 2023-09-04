<template>
  <NuxtLink :to="project.link" class="!text-white decoration-none">
    <img
      :src="project.src"
      :alt="project.alt"
      loading="lazy"
      class="w-full max-w-600px rounded"
      width="600px"
    />
    <h3 class="text-2xl">{{ project.title }}</h3>
  </NuxtLink>
  <p v-if="project.photoCredit">
    Photo by
    <a
      :href="project.photoCredit.link"
      target="_blank"
      >{{ project.photoCredit.name }}</a
    >
  </p>
</template>

<script>
export default {
  props: ['project']
}
</script>
