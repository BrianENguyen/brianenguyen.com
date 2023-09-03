<template>
  <UiNavbar />
  <UiJumbotron
    jumbotronTitle="404 Error"
    jumbotronDesc="The page that you are trying to reach does not exist or is no longer available."
    src="https://res.cloudinary.com/buraiyen/image/upload/c_scale,b_black,o_70/v1620240515/BEN_Website/BEN_huntingtonbeach_ac9rzj.jpg"
    srcMobile="https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600,b_black,o_70/v1620240515/BEN_Website/BEN_huntingtonbeach_ac9rzj.jpg"
  />

  <NuxtLayout class="text-lg">
    <p>
      If this is a problem, please don't hesitate to
      <a href="mailto:brian.edison.nguyen@gmail.com">email me</a>, or
      <a
        href="https://github.com/Buraiyen/brianenguyen.com/issues"
        target="_blank"
      >
        send an issue on GitHub.
      </a>
    </p>
    <p>While you're here, here's a random joke:</p>
    <NuxtLink to="/">Go back home</NuxtLink>
  </NuxtLayout>
</template>
