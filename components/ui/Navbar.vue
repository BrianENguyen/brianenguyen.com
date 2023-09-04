<script setup>
const backgroundEnabled = useState('background-enabled', () => false);
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
  window.addEventListener('scroll', showBackground);
})
</script>

<template>
  <nav
    class="fixed w-[100%] h-100px z-[1] top-0 transition duration-300"
    :class="backgroundEnabled ? 'bg-[#282c34e5] shadow-xl' : 'bg-transparent'"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 filter-none"
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
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-brian-blue bg-gray-light rounded-lg md:hidden"
        aria-controls="navbar-default"
        aria-expanded="false"
        @click="toggleMobileMenu"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="list-none font-medium md:flex flex-col p-4 md:p-0 border md:flex-row md:space-x-8 md:border-0"
          :class='isMobileMenuOpen ? "flex bg-[#282c34e5] m-0 h-screen w-screen relative left-[-20px] top-[-4px]" : "hidden"'
        >
          <li v-for="link in links" :key="link">
            <NuxtLink
              :to="link.path"
              class="block py-2 pl-3 font-bold !text-white hover:!text-brian-blue transition-color duration-300 decoration-none"
              >{{ link.name.toUpperCase() }}</NuxtLink
            >
          </li>
          <li class="align-middle">
            <NuxtLink to="/donate" title="Donate">
              <div
                class="i-solar-user-heart-rounded-linear text-2xl !text-white hover:!text-brian-blue transition-color duration-300"
              />
            </NuxtLink>
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
          path: '/'
        },
        {
          name: 'Portfolio',
          path: '/portfolio'
        },
        {
          name: 'About',
          path: '/about'
        },
        {
          name: 'Resume',
          path: '/resume'
        },
        {
          name: 'Blog',
          path: '/blog'
        },
        {
          name: 'Contact',
          path: '/contact'
        },
      ],
      isMobileMenuOpen: false // Track the mobile menu state
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      if (this.isMobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      }
      else {
        document.body.style.overflow = 'auto';
      }
    }
  }
}
</script>
