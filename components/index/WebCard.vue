<template>
  <div
    class="text-white rounded-md bg-[#131313]
              min-h-[200px] h-auto
              transition-colors
              border-1px border-[#282c34] border-solid
              border-l-[4px] hover:border-l-[#79c2d0] hover:border-[#434a57]"
  >
    <div class="mt-4 ml-4">
      <h3 class="text-2xl font-bold">{{ page.title }}</h3>
      <p class="text-lg mb-5">
        {{ page.description }}
      </p>
      <NuxtLink
        :to="page.url"
        class="text-brian-blue cursor-pointer font-bold italic mt-auto"
      >
        Learn More
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props : ['page']
}
</script>
