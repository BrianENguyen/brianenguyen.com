<template>
  <section class="grid zero:grid-cols-1 gap-8 md:grid-cols-5 mb-48">
    <div class="col-span-2">
      <img
        src="https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1642186572/BEN_Website/BEN_profile_night.webp"
        alt="Me smiling at the camera"
        class="rounded-md w-[100%] max-w-[300px]"
        loading="lazy"
      />
    </div>
    <div class="col-span-3">
      <SectionHeader
        title="Things that define me"
        description="A few quick facts about me"
      />
      <ul>
        <li>
          I am a Linux enthusiast who actively supports online freedom and
          privacy, including organizations such as Wikipedia, the Free Software
          Movement, and the Electronic Frontier Foundation.
        </li>
        <li>
          My favorite music genre is pop punk, and my favorite artist is Linkin
          Park.
        </li>
        <li>
          I have two pomeranians: Kiki and Lucky, who I love dearly. My other
          pomeranian, Mimi, is on her new exciting journey in her new life.
        </li>
        <li>Like most people in tech, I have a big passion for video games.</li>
        <li>
          My passion for drumming came from making pen-tapping beats in
          middle-school, then that turned into bucket drumming, then into the
          cajon, then into a drum set.
        </li>
        <li>
          My biggest stress relief is walking on the beach <em>only when</em>
          the sun is setting.
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import SectionHeader from '~/components/ui/SectionHeader';

export default {
  components: {
    SectionHeader
  }
}
</script>
