<script setup>
  const cartStore = useCartStore();
  const cartproductsNumber = computed(() => cartStore.productsNumber);
  const cartTotalPrice = computed(() => cartStore.totalPrice);
  onMounted(() => {
    cartStore.loadLocalStorage();
  });
</script>

<template>
  <NuxtLink to="/cart" class="cart">
    <div class="relative">
      <span i-bx-cart class="text-4xl"></span>
      <span v-if="cartproductsNumber" class="cart-items">
        {{ cartproductsNumber }}
      </span>
    </div>

    <div class="text-start">
      <p>Cart</p>
      <span v-if="cartTotalPrice" class="cart-price">
        {{ cartTotalPrice }} EGP
      </span>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss">
  .cart {
    @apply flex items-center gap-2 font-medium;

    .cart-items {
      @apply text-[8px] font-bold text-white;
      @apply rounded-full border-2 border-white bg-green-200;
      @apply grid place-content-center;
      @apply absolute top-0 -right-1.5 h-[18px] w-[18px];
    }

    .cart-price {
      @apply text-sm text-green-200;
    }
  }
</style>
