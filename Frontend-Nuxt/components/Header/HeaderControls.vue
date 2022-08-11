<template>
  <div class="header-controls">
    <div class="wrapper">
      <div class="cart-user">
        <AppCart />
        <HeaderUserCard class="hidden lg:flex" />
      </div>
      <AppLogo />
      <HeaderHamburger @click="$emit('hamburger-clicked')" />
      <HeaderSearchBar />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .header-controls {
    @apply border-b border-green-200 py-2;

    .wrapper {
      @apply container flex flex-wrap items-center justify-between gap-2;

      .cart-user {
        @apply flex items-center gap-8 lg:order-last;
      }
    }
  }
</style>
