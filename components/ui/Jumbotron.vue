<template>
  <div
    class="relative
          mb-12
        bg-black
          border-none 
          zero:mt-[75px]
          zero:h-[35vh]
          xs:mt-[85px]
          xs:h-[50vh]
          md:mt-0
          md:h-[70vh]
          lg:h-screen"
  >
    <picture>
      <source :srcset="src || ''" media="(min-width: 600px)" />
      <img
        :src="srcMobile || ''"
        :lazy-src="srcMobile || ''"
        alt=""
        decoding="async"
        :class="srcMobile && 'object-cover w-screen relative z-0 zero:h-[35vh] xs:h-[50vh] md:h-[70vh] lg:h-screen'"
      />
    </picture>
    <div
      class="text-white absolute inset-0 flex justify-center items-center flex-col"
    >
      <h1 class="zero:text-[7vw] xs:text-[5vw] md:text-[5rem]">
        {{ jumbotronTitle }}
      </h1>
      <h2 class="zero:text-[1.2rem] xs:text-[1.2rem] md:text-[1.6rem]">
        {{ jumbotronDesc }}
      </h2>
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
