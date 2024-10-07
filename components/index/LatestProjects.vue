<script setup>
import projectData from '~/data/projectData';

const recentProjects = projectData.slice(0, 2);
</script>

<template>
  <section class="my-4">
    <UiSectionHeader
      title="Latest projects"
      description="My latest projects that I've worked on"
    />
    <div class="grid zero:grid-cols-1 md:grid-cols-2 gap-4">
      <div v-for="project in recentProjects" :key="project.title">
        <PortfolioProjectCard :project="project" />
      </div>
    </div>
  </section>
</template>
