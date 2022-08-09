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
        @apply text-green-200 font-medium;
        @apply w-full py-3 pr-4 pl-10 border border-green-200 outline-none rounded-l;

        &::placeholder {
          @apply font-normal;
        }
      }

      span {
        @apply text-2xl text-green-200 absolute left-2 top-1/2 -translate-y-1/2;
      }
    }
  }
</style>
