<template>
  <section class="grid zero:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    <BlogCard v-for="blog in blogList" :key="blog.title" :blog="blog" />
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
        {
          title: 'Writing My Blogs with Org Mode',
          description: `I switched from using JSX to Org Mode for writing my blogs. Discover the reasons behind this transition,
           aiming for a smoother and more enjoyable blogging experience.`,
          image:
            'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_800/v1665774712/BEN_Website/blog/BEN_org.webp',
          alt: 'Desktop workflow with VSCodium and Doom Emacs open',
          date: '2023-06-12',
          link: '/blog/blogging-with-org-mode',
        },
        {
          title: "Optimizing Your Website's Images",
          description: `Images on your website are one of the biggest culprits to slowing down your website.
             In this blog, I will discuss how I optimize my website's images to improve load speed.`,
          image:
            'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_800/v1665774712/BEN_Website/blog/OptimizingImages/BEN_photo-files.webp',
          alt: "File manager with my website's images",
          date: '2023-01-23',
          link: '/blog/optimizing-images',
        },
        {
          title: 'Volunteering with the Tzu Chi Foundation',
          description: `I've been volunteering with Tzu Chi for at least five years. Learn about my
            experiences with this organization since 2016, how this organization helped me develop my passion for photography,
            how CSULB Tzu Ching went through its worse times, and how I became president of CSULB Tzu Ching to lead
            the organization by myself.`,
          image:
            'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_800/v1644820389/BEN_Website/blog/BEN_orientation.jpg ',
          alt: "Me hosting CSULB Tzu Ching's 2019 orientation",
          date: '2022-02-16',
          link: '/blog/volunteering-with-tzu-chi',
        },
        {
          title: 'My Programming History',
          description:
            'Learn about my programming history, from when I started in high school, up until now.',
          image:
            'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_800/v1644628220/BEN_Website/blog/BEN_4121_1_jw8m5b.jpg',
          alt: "Me working on my Thinkpad at a coffee shop",
          date: '2022-02-12',
          link: '/blog/programming-history',
        },
        {
          title: "Why I'm Blogging",
          description: "Recently, I decided that I will start blogging. Here's why.",
          image:
            'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_800/v1642186176/BEN_Website/blog/BEN_redondobeach.jpg',
          alt: 'Me standing in front of a Redondo Beach sunset',
          date: '2022-02-11',
          link: '/blog/why-i-blog',
        },
      ]
    }
  }
}
</script>
