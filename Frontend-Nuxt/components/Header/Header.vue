<script setup>
  const isNavVisible = ref(false);

  const toggleNav = () => {
    isNavVisible.value = !isNavVisible.value;
  };
</script>

<template>
  <header class="relative">
    <HeaderControls @hamburger-clicked="toggleNav" />
    <HeaderNav :is-nav-visible="isNavVisible" />
  </header>
</template>
