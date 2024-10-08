<template>
  <div
    class="rounded-md 
            bg-[#efefef] dark:bg-[#131313]
              min-h-[200px] h-auto
              transition-colors
              border-1px dark:border-gray-light border-solid
              border-l-[4px] hover:border-l-brian-blue hover:border-[#434a57]"
  >
    <div class="mt-4 ml-4">
      <h3 class="text-2xl font-bold">{{ page.title }}</h3>
      <p class="text-lg mb-5">
        {{ page.description }}
      </p>
      <NuxtLink
        :to="page.url"
        :target="page.external && '_blank'"
        class="inline-block transition-colors dark:text-brian-blue dark:hover:text-brian-blue-light 
                cursor-pointer 
                font-bold no-underline mt-auto mb-4"
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
