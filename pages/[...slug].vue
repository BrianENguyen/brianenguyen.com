<script setup>
// TODO: need to figure out how to do SEO stuff
const { pathname } = new URL(location.href);
const match = pathname.match(/\/(blog|portfolio)/)[0];
</script>

<template>
  <article class="nuxt-content">
    <ContentDoc class="mt-48 mt-48 mx-auto max-w-700px min-h-[100vh] px-4">
      <template #not-found>
        <Error />
      </template>
    </ContentDoc>
    <div class="mx-auto max-w-700px px-4">
      <UiCd :to="match" />
    </div>
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
