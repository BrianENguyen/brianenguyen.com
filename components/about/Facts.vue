<template>
  <section class="grid zero:grid-cols-1 gap-4 md:grid-cols-2 mb-8">
    <div>
      <img
        src="https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1642186572/BEN_Website/BEN_profile_night.webp"
        alt="Me smiling at the camera"
        class="rounded-md w-[100%] max-w-[300px]"
        loading="lazy"
      />
    </div>
    <SectionHeader
      title="Things that define me"
      description="I am a web developer, photgrapher, drummer, gamer, 
                  pro-wrestling enjoyer, and Linkin Park listener"
    />
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
