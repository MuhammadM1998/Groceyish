<template>
  <div class="product-skeleton gap-4">
    <div class="skeleton-img"></div>

    <div class="flex items-center justify-between gap-2">
      <div class="skeleton-text h-[10px] w-[30%]"></div>

      <div class="skeleton-text h-[10px] w-[30%]"></div>
    </div>

    <div class="skeleton-text h-[14px] w-[85%]"></div>

    <div class="skeleton-text h-[10px] w-[40%]"></div>

    <div class="skeleton-text h-[14px] w-[30%]"></div>
  </div>
</template>

<style scoped lang="scss">
  .product-skeleton {
    @apply flex h-full flex-col justify-center gap-2 py-4 px-6 text-center;
    @apply rounded-lg border  border-gray-100 bg-white hover:border-green-200;
    @apply transition-colors duration-300;
  }

  .skeleton {
    &-img {
      @apply mx-auto mb-2 h-[120px] w-[120px] animate-pulse rounded-full bg-gray-100;
    }

    &-text {
      @apply animate-pulse rounded-full bg-gray-100;
    }
  }
</style>
