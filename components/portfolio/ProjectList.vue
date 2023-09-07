<template>
  <section class="grid zero:grid-cols-1 md:grid-cols-2 gap-4">
    <div v-for="project in projects" :key="project.title">
      <PortfolioProjectCard :project="project" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
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
        {
          title: 'My Site v2 - React',
          src: 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1639358227/BEN_Website/projects/BEN_3098_islkyr.jpg',
          alt: "Me standing in front of the sunset at Redondo Beach",
          link: '/portfolio/my-site-v2',
        },
        {
          title: 'CSULB Tzu Ching',
          src: 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1639515139/BEN_Website/recent_projects/lbtc_group.jpg',
          alt: "CSULB Tzu Ching group photo",
          link: '/portfolio/csulb-tzu-ching',
        },
        {
          title: 'YelpCamp',
          src: 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1639529477/BEN_Website/projects/hugues-de-buyer_camp_fc2lzb.jpg',
          alt: "Camping tent set up underneath visible stars",
          link: '/portfolio/yelpcamp',
          photoCredit: {
            name: 'Hugues de Buyer-Mimeure',
            link: 'https://unsplash.com/@huguesdb',
          },
        },
        {
          title: 'First Personal Website',
          src: 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1639774676/BEN_Website/projects/ben_longexposure.jpg',
          alt: "Long exposure spiral effect using blue LED lights",
          link: '/portfolio/first-personal-site',
        },
        {
          title: 'Senior Project: Kraken Bracket',
          src: 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1639530141/BEN_Website/projects/florian-olivo_gaming_im9ugb.jpg',
          alt: "Gamer playing a PC game",
          link: '/portfolio/kraken-bracket',
          photoCredit: {
            name: 'Florian Olivo',
            link: 'https://unsplash.com/@florianolv',
          },
        },
      ]
    }
  }
}
</script>
