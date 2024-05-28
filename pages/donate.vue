<script setup>
const { sayHi } = useUtils();
sayHi();

useHead({
  title: 'Donate | BEN',
  meta: [
    {
      name: 'description',
      content: "Support my passion for high-quality and open-source projects"
    }
  ]
})
</script>

<template>
  <section class="min-h-[50vh]">
    <NuxtLayout class="mt-48"
      ><h1>Donate</h1>
      <p>
        Developing high-quality applications that is used by many is where my
        passion lies. I also love developing and contributing to free and open
        source (FOSS) projects. I truly believe FOSS can help revolutionize the
        way we approach technology, promote our online freedom, protect our
        privacy, and empower individuals to take control of their digital
        experiences.
      </p>
      <p>
        Any sponsor, no matter how big or small, means a lot to me. It will help
        me sustain my projects actively, pay for costs of hosting my projects,
        help me be more active in the open source community, and make my ideas
        come true! Thank you very much! &#x1F499;
      </p>
      <a
        href="https://github.com/sponsors/brianenguyen/"
        target="_blank"
        class="transition duration-300 !text-gray decoration-none 
              inline-block rounded border-2 border-gray-light border-solid 
              p-4 !hover:text-rose hover:bg-[#ff828211]"
      >
        <div class="i-solar-heart-outline text-xl inline-block align-middle" />
        <span class="inline"> Sponsor me to support my work </span>
      </a>
      <br />
      <UiCd to="/" />
    </NuxtLayout>
  </section>
</template>
