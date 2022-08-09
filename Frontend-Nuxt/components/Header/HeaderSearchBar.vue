<template>
  <form @submit.prevent="">
    <input type="text" placeholder="What are you looking for ?" />
    <span i-carbon-search></span>
  </form>
</template>

<style scoped lang="scss">
  form {
    @apply relative w-full lg:max-w-xs;

    input {
      @apply text-green-200 font-medium;
      @apply border border-green-200 outline-none rounded;
      @apply w-full py-3 pl-4 pr-10;

      &::placeholder {
        @apply font-normal;
      }
    }

    span {
      @apply text-2xl text-green-200;
      @apply absolute right-2 top-1/2 -translate-y-1/2;
    }
  }
</style>
