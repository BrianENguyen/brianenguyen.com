<template>
  <section class="grid zero:grid-cols-1 md:grid-cols-2 gap-4 mb-32">
    <div>
      <img
        src="https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_450/v1675707556/BEN_Website/BEN_profile3.webp"
        width="450px"
        height="450px"
        loading="lazy"
        className="rounded
                  w-[100%] min-w-[200px] max-w[400px]
                  h-auto max-h-[400px]"
        alt="Profile shot of me, sitting on the stairway at the Getty Museum"
      />
    </div>
    <div>
      <h2>My passion is web development and Information Technology</h2>
      <p>
        I am a web developer with a focus on frontend / fullstack development
        with over 7 years of experience. I don't just write code, I create
        solutions and transform them into digital realities
      </p>
      <p>
        In 2024, I was introduced to IT through web development. Learning about
        software led made be interested in hardware. This made me want to learn
        about networking, hardware, servers and more!
      </p>
      <NuxtLink class="btn" to="/portfolio">View My Work</NuxtLink>
    </div>
  </section>
</template>
