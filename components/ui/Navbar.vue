<script setup>
import { isDark } from '~/composables/dark';
import { useToggle } from '@vueuse/shared'
const backgroundEnabled = useState('background-enabled', () => false);
const toggleDark = useToggle(isDark);

function showBackground()  {
  if (isDark.value) {
    if ((window.scrollY >= 100 || window.innerWidth <= 992)) {
      backgroundEnabled.value = true;
    }
    else {
      backgroundEnabled.value = false;
    }
  }
  else {
    backgroundEnabled.value = true;
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
    :class="backgroundEnabled ? 'bg-[#efefef] dark:bg-[#282c34e5] shadow-xl' : 'bg-transparent'"
  >
    <div
      class="max-w-screen-xl flex items-center justify-between mx-auto p-4 filter-none"
    >
      <div class="flex items-center">
        <NuxtLink to="/">
          <img
            class="zero:w-75px md:w-100px"
            :src="isDark ? 'https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_110/v1662578878/BEN_Website/BEN-logo-navbar.webp' 
                      : 'https://res.cloudinary.com/buraiyen/image/upload/v1620240495/BEN_Website/BEN-logo-black.png' "
            alt="BEN logo"
          />
        </NuxtLink>
      </div>
      <div class="w-full inline-block md:w-auto" id="navbar-default">
        <ul
          class="list-none mr-16 font-medium flex flex-row items-center justify-end border md:flex-row md:space-x-8 md:border-0"
        >
          <li v-for="link in links" :key="link">
            <NuxtLink
              v-if="!link.href"
              :to="link.path"
              class="mx-1 block font-bold text-black hover:text-brian-blue-dark dark:!text-white dark:hover:!text-brian-blue transition-color duration-300 decoration-none"
            >
              <span class="zero:display-none md:block">
                {{ link.name.toUpperCase() }}
              </span>
              <div
                :title="link.name"
                :class="`${link.icon} my-2 md:display-none zero:text-xl sm:text-3xl md:text-2xl dark:!text-white dark:hover:!text-brian-blue transition-color duration-300`"
              />
            </NuxtLink>
            <NuxtLink
              v-if="link.href"
              :href="link.href"
              target="_blank"
              class="mx-1 block font-bold text-black hover:text-brian-blue-dark dark:!text-white dark:hover:!text-brian-blue transition-color duration-300 decoration-none"
            >
              <span class="zero:display-none md:block">
                {{ link.name.toUpperCase() }}
              </span>
              <div
                :title="link.name"
                :class="`${link.icon} my-2 md:display-none zero:text-xl sm:text-3xl md:text-2xl dark:!text-white dark:hover:!text-brian-blue transition-color duration-300`"
              />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/donate" title="Donate">
              <div
                class="i-solar-user-heart-rounded-linear my-2 zero:text-xl sm:text-3xl md:text-2xl text-black hover:text-brian-blue-dark  dark:!text-white dark:hover:!text-brian-blue transition-color duration-300"
              />
            </NuxtLink>
          </li>
          <li>
            <a
              href="https://github.com/BrianENguyen"
              title="GitHub"
              target="_blank"
            >
              <div
                class="i-iconoir-github mx-2 my-2 zero:text-xl sm:text-3xl md:text-2xl text-black hover:text-brian-blue-dark dark:!text-white dark:hover:!text-brian-blue transition-color duration-300"
              />
            </a>
          </li>
          <li>
            <div
              class="i-solar-sun-outline dark:i-solar-moon-line-duotone cursor-pointer text-black hover:text-brian-blue-dark zero:text-xl sm:text-3xl dark:!text-white dark:hover:!text-brian-blue transition-color duration-300"
              @click="toggleDark()"
            />
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
        // {
        //   name: 'Resume',
        //   path: '/resume',
        //   icon: 'i-solar-document-add-linear'
        // },
        {
          name: 'Blog',
          href: 'https://blog.brianenguyen.com',
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
