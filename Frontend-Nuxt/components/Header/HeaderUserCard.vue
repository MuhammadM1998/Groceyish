<script setup>
  const isUserMenuVisible = ref(false);

  const toggleUserMenu = () => {
    isUserMenuVisible.value = !isUserMenuVisible.value;
    console.log('whateber');
    console.log(isUserMenuVisible.value);
  };
</script>

<template>
  <div class="relative flex flex-col gap-2">
    <div class="flex items-center gap-2">
      <img src="https://picsum.photos/200" alt="User Image" />
      <p class="line-clamp-1">Muhammad Mahmoud</p>
      <button class="hidden outline-none lg:block" @click="toggleUserMenu">
        <span i-bx-chevron-down class="hidden lg:block"></span>
      </button>
    </div>

    <HeaderUserMenu :is-menu-visible="isUserMenuVisible" />
  </div>
</template>

<style scoped lang="scss">
  div {
    img {
      @apply h-12 w-12 rounded-full border-2 border-green-200 bg-white p-0.5;
    }
  }
</style>
