<template>
  <div class="category-skeleton">
    <div class="skeleton-img animate-pulse"></div>
    <div class="skeleton-name animate-pulse"></div>
    <div class="skeleton-items animate-pulse"></div>
  </div>
</template>

<style scoped lang="scss">
  .category-skeleton {
    @apply flex h-full flex-col items-center justify-center gap-4 py-4 px-6 text-center;
    @apply rounded-lg border  border-gray-100 bg-white hover:border-green-200;
    @apply transition-colors duration-300;
    @apply cursor-pointer;
  }

  .skeleton {
    &-img {
      @apply h-[96px] w-[96px] rounded-full bg-gray-100;
    }

    &-name {
      @apply h-[14px] w-[80%] rounded-full bg-gray-100;
    }

    &-items {
      @apply h-[12px] w-[40%] rounded-full bg-gray-100;
    }
  }
</style>
