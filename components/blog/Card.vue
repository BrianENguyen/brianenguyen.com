<template>
  <div>
    <NuxtLink :to="blog.link" class="!text-white decoration-none">
      <img
        :src="blog.image"
        class="w-[100%] max-w-350px h-auto max-h-450px rounded"
      />
      <h2>{{ blog.title }}</h2>
    </NuxtLink>
    <p>{{ blog.description }}</p>
    <div>
      <p>
        &#127751; <em>{{ blog.date }}</em>
      </p>
      <NuxtLink :to="blog.link">Read More </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blog']
}
</script>
