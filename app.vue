<template>
  <UiNavbar />
  <ClientOnly>
    <NuxtPage />
    <UiFooter />
  </ClientOnly>
</template>

<style>
html {
  color: black;
}
html.dark {
  color-scheme: dark;
  background-color: #1d1d1d;
  color: #cdd9e5;
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
