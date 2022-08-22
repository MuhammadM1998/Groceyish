<script setup>
  defineProps({
    isMenuVisible: { type: Boolean, required: true },
  });

  const isNavVisible = inject('isNavVisible');
  const closeMenu = () => {
    isNavVisible.value = false;
  };

  const logout = () => {
    const { logout } = useStrapiAuth();
    logout();
    closeMenu();
  };
</script>

<template>
  <ul class="user-menu" :class="{ 'user-menu--visible': isMenuVisible }">
    <li>
      <NuxtLink to="/user" class="flex items-center gap-2" @click="closeMenu">
        <span i-bx-user class="text-2xl"></span>
        My Account
      </NuxtLink>
    </li>

    <li>
      <NuxtLink to="/orders" class="flex items-center gap-2" @click="closeMenu">
        <span i-bx-box class="text-2xl"></span>
        Orders
      </NuxtLink>
    </li>

    <li>
      <button class="flex items-center gap-2" @click.prevent="logout">
        <span i-bx-log-out class="text-2xl"></span>
        Logout
      </button>
    </li>
  </ul>
</template>

<style scoped lang="scss">
  .user-menu {
    @apply flex flex-col gap-2;
    @apply lg:hidden lg:rounded-lg lg:border-b-4 lg:border-green-200 lg:bg-white lg:p-4 lg:shadow;
    @apply lg:absolute lg:right-0 lg:top-full lg:z-10 lg:mt-2 lg:w-max;

    &--visible {
      @apply flex;
    }

    li {
      @apply hover:text-green-200;
    }
  }
</style>
