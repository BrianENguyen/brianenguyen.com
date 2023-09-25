<script setup>
import {BlogCard} from '#components'
import blogData from '~/data/blogData'
</script>

<template>
  <section class="grid zero:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    <BlogCard v-for="blog in blogData" :key="blog.title" :blog="blog" />
  </section>
</template>
