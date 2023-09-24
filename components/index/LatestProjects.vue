<template>
  <section class="my-4">
    <UiSectionHeader
      title="Latest projects"
      description="My latest web projects that I've been busy working on"
    />
    <div class="grid zero:grid-cols-1 md:grid-cols-2 gap-4">
      <div v-for="project in projects" :key="project.title">
        <PortfolioProjectCard :project="project" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: 'My Site v3 - Nuxt3',
          src: 'https://res.cloudinary.com/buraiyen/image/upload/v1694281377/BEN_Website/projects/BEN_languna_profile.webp',
          alt: "Me posing in front of Laguna Beach",
          link: '/portfolio/my-site-v3',
        },
        {
          title: 'All Elite Network',
          src: 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1651693922/BEN_Website/projects/thunder_rosa.webp',
          alt: "AEW wrestler Thunder Rosa holding the AEW Women's World Championship",
          link: '/portfolio/all-elite-network',
          photoCredit: {
            name: 'All Elite Wrestling',
            link: 'https://www.allelitewrestling.com/',
          },
        },
      ]
    }
  }
}
</script>
