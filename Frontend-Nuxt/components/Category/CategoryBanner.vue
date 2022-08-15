<script setup>
  defineProps({
    categoryName: { type: String, required: true },
    categoryImgUrl: { type: String, required: true },
  });
</script>

<template>
  <div class="category-banner">
    <h2>{{ categoryName }}</h2>
    <img :src="categoryImgUrl" :alt="categoryName" />
  </div>
</template>

<style scoped lang="scss">
  .category-banner {
    @apply rounded-lg bg-overlayGreen bg-cover bg-no-repeat py-2 px-4 shadow;
    @apply flex items-center justify-between gap-4;

    img {
      @apply max-w-[64px];
    }
  }
</style>
