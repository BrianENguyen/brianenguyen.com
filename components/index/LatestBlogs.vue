<script setup>
import { BlogCard } from '#components'
import blogData from '~/data/blogData'

const recentBlogs = blogData.slice(0, 3);
</script>

<template>
  <section>
    <UiSectionHeader
      title="Latest Blogs"
      description="Read through some of my thoughts and insights"
    />
    <div class="grid zero:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <BlogCard v-for="blog in recentBlogs" :key="blog.title" :blog="blog" />
    </div>
  </section>
</template>
