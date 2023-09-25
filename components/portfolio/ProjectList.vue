<script setup>
import projectData from '~/data/projectData';
</script>

<template>
  <section class="grid zero:grid-cols-1 md:grid-cols-2 gap-4">
    <div v-for="project in projectData" :key="project.title">
      <PortfolioProjectCard :project="project" />
    </div>
  </section>
</template>
