<script setup>
const isVisible = useState('is-visible', () => true);

function visibilityHandler() {
  isVisible.value = false;
  localStorage.setItem('modalHidden', '1');
}

onMounted(() => {
  const item = localStorage.getItem('modalHidden');
  if (!item) return;
  if (item >= 3) {
    isVisible.value = true;
    localStorage.removeItem('modalHidden');
    return;
  }
  isVisible.value = false;
  let refreshCount = item;
  refreshCount = +refreshCount + 1;
  localStorage.setItem('modalHidden', refreshCount);
})
</script>

<template>
  <Teleport to="body">
    <div
      id="welcome-modal"
      class="fixed gap-4 flex bottom-0 z-2 bg-white rounded p-4 dark:bg-[#131313] border-2 border-solid border-brian-blue"
      v-if="isVisible"
    >
      <div>
        <p>Welcome to my newly designed website, built with Nuxt3!</p>
        <p>Blog detailing these changes coming soon...</p>
      </div>
      <span
        @click="visibilityHandler()"
        class="cursor-pointer text-2xl font-bold float-right"
        >X</span
      >
    </div>
  </Teleport>
</template>
