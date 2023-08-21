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
    <SectionHeader
      class="col-span-3"
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
