<script setup>
// TODO: need to figure out how to do SEO stuff
</script>

<template>
  <article class="nuxt-content">
    <ContentDoc class="mt-48 mt-48 mx-auto max-w-700px min-h-[100vh] px-4">
      <template #not-found>
        <Error />
      </template>
    </ContentDoc>
  </article>
</template>

<script>
import Error from '~/error.vue'

export default {
  components: {
    Error
  }
}
</script>
