<script setup>
const { sayHi } = useUtils();
sayHi();

useHead({
  title: 'Resume | BEN',
  meta: [
    {
      name: 'description',
      content: "View my detailed resume to learn more about my experiences, expertiese, and qualifications."
    }
  ]
});
</script>

<template>
  <div>
    <UiJumbotron
      jumbotronTitle="My Resume"
      src="https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1200,b_black,o_70/v1659204062/BEN_Website/jumbotron/BEN_thinkpad.webp"
      srcMobile="https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600,b_black,o_70/v1659204062/BEN_Website/jumbotron/BEN_thinkpad.webp"
    />
    <NuxtLayout>
      <ResumeEducation />
      <ResumeExperience />
      <ResumeProjects />
      <ResumeSkills />
      <UiCd to="/" />
    </NuxtLayout>
  </div>
</template>
