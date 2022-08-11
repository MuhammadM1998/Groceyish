<template>
  <div class="app-tag">
    <slot />
  </div>
</template>

<style scoped lang="scss">
  .app-tag {
    @apply text-center text-sm;
    @apply w-fit rounded-tl rounded-br p-2;
  }
</style>
