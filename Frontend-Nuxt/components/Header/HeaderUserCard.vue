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

  // On Click Outside
  const target = ref(null);
  const menuButton = ref(null);
  onClickOutside(target, () => (isUserMenuVisible.value = false), {
    ignore: [menuButton],
  });
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
        <button
          ref="menuButton"
          class="hidden outline-none transition-transform lg:block"
          :class="{ 'rotate-180': isUserMenuVisible }"
          @click="toggleUserMenu"
        >
          <span i-bx-chevron-down class="hidden lg:block"></span>
        </button>
      </div>

      <HeaderUserMenu ref="target" :is-menu-visible="isUserMenuVisible" />
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
