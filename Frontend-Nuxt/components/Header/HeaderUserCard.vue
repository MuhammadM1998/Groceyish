<script setup>
  const user = useStrapiUser();

  const isNavVisible = inject('isNavVisible');
  const closeMenu = () => {
    isNavVisible.value = false;
  };

  const isUserMenuVisible = ref(false);
  const toggleUserMenu = () => {
    isUserMenuVisible.value = !isUserMenuVisible.value;
  };
</script>

<template>
  <div class="relative flex flex-col gap-2">
    <!-- If there's no user -->
    <template v-if="!user">
      <NuxtLink to="/user/login" class="app-button w-fit" @click="closeMenu">
        <span i-bx-log-in class="text-2xl"></span>
        <p>Login</p>
      </NuxtLink>
    </template>

    <!-- If a user is logged in -->
    <template v-else>
      <div class="flex items-center gap-2">
        <img src="https://picsum.photos/200" alt="User Image" />
        <p class="line-clamp-1">{{ user.username }}</p>
        <button class="hidden outline-none lg:block" @click="toggleUserMenu">
          <span i-bx-chevron-down class="hidden lg:block"></span>
        </button>
      </div>

      <HeaderUserMenu :is-menu-visible="isUserMenuVisible" />
    </template>
  </div>
</template>

<style scoped lang="scss">
  div {
    img {
      @apply h-12 w-12 rounded-full border-2 border-green-200 bg-white p-0.5;
    }
  }
</style>
