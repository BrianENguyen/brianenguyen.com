<script setup>
const backgroundEnabled = useState('background-enabled', () => false);
const iconsEnabled = useState('icons-enabled', () => false);

function showIcons() {
  if (window.innerWidth <= 992) {
    iconsEnabled.value = true;
  }
  else {
    iconsEnabled.value = false;
  }
}
function showBackground()  {
  if (window.scrollY >= 100 || window.innerWidth <= 992) {
    backgroundEnabled.value = true;
  }
  else {
    backgroundEnabled.value = false;
  }
};
onMounted(() => {
  window.addEventListener('resize', showBackground);
  window.addEventListener('resize', showIcons);
  window.addEventListener('scroll', showBackground);
})
</script>

<template>
  <nav
    class="fixed w-[100%] h-100px z-[1] top-0 transition duration-300"
    :class="backgroundEnabled ? 'bg-[#282c34e5] shadow-xl' : 'bg-transparent'"
  >
    <div
      class="max-w-screen-xl flex items-center justify-between mx-auto p-4 filter-none"
    >
      <div class="flex items-center">
        <NuxtLink to="/">
          <img
            class="w-100px"
            src="https://res.cloudinary.com/buraiyen/image/upload/v1662578965/BEN_Website/BEN-logo-navbar.webp"
            alt="BEN logo"
          />
        </NuxtLink>
      </div>
      <div class="w-full inline-block md:w-auto" id="navbar-default">
        <ul
          class="list-none font-medium flex flex-row items-center justify-end border md:flex-row md:space-x-8 md:border-0"
        >
          <li v-for="link in links" :key="link">
            <NuxtLink
              :to="link.path"
              class="mx-1 block font-bold !text-white hover:!text-brian-blue transition-color duration-300 decoration-none"
            >
              <span v-if="!iconsEnabled">
                {{ link.name.toUpperCase() }}
              </span>
              <span v-else>
                <div
                  :class="`${link.icon} my-2 zero:text-xl sm:text-3xl md:text-2xl !text-white hover:!text-brian-blue transition-color duration-300`"
                />
              </span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/donate" title="Donate">
              <div
                class="i-solar-user-heart-rounded-linear my-2 zero:text-xl sm:text-3xl md:text-2xl !text-white hover:!text-brian-blue transition-color duration-300"
              />
            </NuxtLink>
          </li>
          <li>
            <a
              href="https://github.com/buraiyen"
              title="GitHub"
              target="_blank"
            >
              <div
                class="i-iconoir-github my-2 zero:text-xl sm:text-3xl md:text-2xl !text-white hover:!text-brian-blue transition-color duration-300"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: 'Home',
          path: '/',
          icon: 'i-iconoir-home',
        },
        {
          name: 'Portfolio',
          path: '/portfolio',
          icon: 'i-solar-suitcase-line-duotone'
        },
        {
          name: 'About',
          path: '/about',
          icon: 'i-solar-sunset-broken'
        },
        {
          name: 'Resume',
          path: '/resume',
          icon: 'i-solar-document-add-linear'
        },
        {
          name: 'Blog',
          path: '/blog',
          icon: 'i-solar-chat-round-line-linear'
        },
        {
          name: 'Contact',
          path: '/contact',
          icon: 'i-solar-mailbox-linear'
        },
      ],
    }
  },
}
</script>
