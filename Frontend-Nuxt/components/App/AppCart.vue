<template>
  <NuxtLink to="/cart" class="cart">
    <div class="relative">
      <span i-bx-cart class="text-4xl"></span>
      <span class="cart-items">2</span>
    </div>

    <div class="text-start">
      <p>Cart</p>
      <span class="cart-price">21 EGP</span>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss">
  .cart {
    @apply flex gap-2 items-center font-medium;

    .cart-items {
      @apply text-white text-[8px] font-bold;
      @apply bg-green-200 border-2 border-white rounded-full;
      @apply grid place-content-center;
      @apply w-[18px] h-[18px] absolute top-0 -right-1.5;
    }

    .cart-price {
      @apply text-green-200 text-sm;
    }
  }
</style>
