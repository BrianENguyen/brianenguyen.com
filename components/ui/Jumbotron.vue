<template>
  <div
    class="relative
        bg-black
          border-none 
          lg:h-screen
          zero:mt-[75px]
          zero:h-[35vh]
          xs:mt-[85px]
          xs:h-[50vh]"
  >
    <picture>
      <source :srcset="src || ''" media="(min-width: 600px)" />
      <img
        :src="srcMobile || ''"
        :lazy-src="srcMobile || ''"
        alt=""
        decoding="async"
        :class="srcMobile && 'object-cover w-screen relative z-0 zero:h-[35vh] xs:h-[50vh]'"
      />
    </picture>
    <div
      class="text-white absolute inset-0 flex justify-center items-center flex-col"
    >
      <h1 class="zero:text-[7vw] xs:text-[5vw]">{{ jumbotronTitle }}</h1>
      <h1 class="zero:text-[1.2rem] xs:text-[1.2rem]">{{ jumbotronDesc }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  src?: string
  srcMobile?: string
  jumbotronTitle?: string
  jumbotronDesc?: string
}>()
</script>
