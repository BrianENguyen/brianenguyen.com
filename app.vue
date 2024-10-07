<template>
  <UiNavbar />
  <ClientOnly>
    <NuxtPage />
    <UiFooter />
    <!-- <UiWelcomeModal /> -->
  </ClientOnly>
</template>

<style>
html {
  color: #202020;
}

html a {
  color: #0495b1;
  transition: 0.3s color;
}
html a:hover {
  color: #015768;
}
html.dark {
  color-scheme: dark;
  background-color: #1d1d1d;
  color: #cdd9e5;
}


html.dark a {
  color: #79c2d0;
  transition: 0.3s color;
}
html.dark a:hover {
  color: #efefef;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
