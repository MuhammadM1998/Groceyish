<template>
  <form @submit.prevent="">
    <div class="input-wrapper">
      <span i-carbon-email></span>
      <input type="text" placeholder="Email address" />
    </div>

    <button class="app-button rounded-l-none">Subscribe</button>
  </form>
</template>

<style scoped lang="scss">
  form {
    @apply w-full lg:max-w-xs;
    @apply flex;

    .input-wrapper {
      @apply relative;

      input {
        @apply font-medium text-green-200;
        @apply w-full rounded-l border border-green-200 py-3 pr-4 pl-10 outline-none;

        &::placeholder {
          @apply font-normal;
        }
      }

      span {
        @apply absolute left-2 top-1/2 -translate-y-1/2 text-2xl text-green-200;
      }
    }
  }
</style>
