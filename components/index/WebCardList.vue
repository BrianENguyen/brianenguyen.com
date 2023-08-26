<template>
  <section
    class="
      bg-gradient-to-r 
      grid
      zero:grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
      gap-4
  "
  >
    <WebCard v-for="data in webCardData" :page="data" :key="data" />
  </section>
</template>

<script>
import WebCard from './WebCard.vue'
export default {
  components: {
    WebCard
  },
  data() {
    return {
      webCardData: [
        {
          title: 'Portfolio',
          description: 'View the projects that I have worked on',
          url: '/portfolio'
        },
        {
          title: 'Resume',
          description: 'View my experiences and skills',
          url: '/resume'
        },
        {
          title: 'About',
          description: 'Dive deep into my life to know more about me and my passions',
          url: '/about'
        },

        {
          title: 'Lessons',
          description: 'View some insights on my career and my life',
          url: '/lessons'
        },
        {
          title: 'Contact',
          description: 'Get in touch with me for any reason (services, inquiries, chatting, etc.)',
          url: '/gallery'
        },
      ]
    }
  }
}
</script>
