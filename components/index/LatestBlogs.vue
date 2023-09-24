<script setup>
import { BlogCard } from '#components'
</script>

<template>
  <section>
    <UiSectionHeader
      title="Latest Blogs"
      description="Read through some of my thoughts and insights"
    />
    <div class="grid zero:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <BlogCard v-for="blog in blogList" :key="blog.title" :blog="blog" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      blogList: [
        {
          title: 'Visiting Universal Studios Hollywood After 10+ Years',
          description: `This blog documents my recent experience at Universal Studios Hollywood and my opinions on how much the park
          transformed the past decade.`,
          image:
            'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_800/v1665774712/BEN_Website/blog/Universal/BEN_universal_neon_sign.webp',
          alt: 'Thu and I sitting in front of the Universal Studios Hollywood neon sign',
          date: '2023-07-04',
          link: '/blog/universal-studios',
        },
        {
          title: 'My First Maternity Photography Session',
          description: `I've provided my first photography session for a couple who is expecting a baby. This
          blog showcases various photos and how I put together this session`,
          image:
            'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_800/v1665774712/BEN_Website/blog/Maternity/BEN_maternity2.webp',
          alt: 'Trang and Minh walking alongside Huntington Beach, holding hands',
          date: '2023-06-30',
          link: '/blog/maternity-photos',
        },
        {
          title: 'Hello Nebraska!',
          description: `I visited Nebraska for a business trip, now I'm moving there in July! I discuss the events that led
          up to my relocation, how moving there will benefit me, and my experiences in Nebraska`,
          image:
            'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_800/v1665774712/BEN_Website/blog/BEN_road.webp',
          alt: 'Nebraska highway road',
          date: '2023-06-15',
          link: '/blog/hello-nebraska',
        },
      ]
    }
  }
}
</script>
