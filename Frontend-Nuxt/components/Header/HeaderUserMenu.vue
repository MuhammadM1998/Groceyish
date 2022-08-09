<script setup>
  defineProps({
    isMenuVisible: { type: Boolean, required: true },
  });
</script>

<template>
  <ul class="user-menu" :class="{ 'user-menu--visible': isMenuVisible }">
    <li>
      <NuxtLink to="/user" class="flex items-center gap-2">
        <span i-bx-user class="text-2xl"></span>
        My Account
      </NuxtLink>
    </li>

    <li>
      <NuxtLink to="/orders" class="flex items-center gap-2">
        <span i-bx-box class="text-2xl"></span>
        Orders
      </NuxtLink>
    </li>

    <li>
      <NuxtLink to="/logout" class="flex items-center gap-2">
        <span i-bx-log-out class="text-2xl"></span>
        Logout
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped lang="scss">
  .user-menu {
    @apply flex flex-col gap-2;
    @apply lg:hidden lg:p-4 lg:bg-white lg:border-b-4 lg:border-green-200 lg:shadow lg:rounded-lg;
    @apply lg:absolute lg:right-0 lg:top-full lg:w-full lg:mt-2 lg:z-10;

    &--visible {
      @apply flex;
    }

    li {
      @apply hover:text-green-200;
    }
  }
</style>
