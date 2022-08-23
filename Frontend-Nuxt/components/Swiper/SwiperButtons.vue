<script setup>
  defineProps({
    name: { type: String, required: true },
  });
</script>

<template>
  <div class="swiper-controls">
    <button :class="`${name}-swiper-prev`" aria-label="previous-item">
      <span block i-bx-left-arrow-alt></span>
    </button>

    <slot />

    <button :class="`${name}-swiper-next`" aria-label="next-item">
      <span block i-bx-right-arrow-alt></span>
    </button>
  </div>
</template>

<style scoped lang="scss">
  .swiper-controls {
    @apply flex  items-center gap-2;

    button {
      @apply flex w-fit items-center justify-center  p-2;
      @apply rounded-full bg-gray-100 transition-colors  hover:bg-green-200 hover:text-white;

      &.swiper-button-lock {
        @apply hidden;
      }

      span {
        @apply text-xl;
      }
    }
  }
</style>
