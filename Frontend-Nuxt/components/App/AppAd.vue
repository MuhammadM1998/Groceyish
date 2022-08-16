<template>
  <div class="site-banner">
    <h3>10% OFF</h3>
    <p class="font-medium">For new newsletter subscribers only!</p>

    <form>
      <div class="input-container">
        <span i-carbon-email></span>
        <input id="email" type="email" placeholder="Email address" />
      </div>

      <button class="app-button w-fit" @click.prevent="">Sign up</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
  .site-banner {
    @apply hidden flex-col justify-center gap-4 self-stretch lg:flex;
    @apply bg-banner-3 bg-cover bg-no-repeat py-4 px-6 text-center;

    form {
      @apply flex flex-col items-center gap-2 text-start;

      .input-container {
        @apply relative;

        span {
          @apply absolute top-1/2 left-2 -translate-y-1/2 text-gray-200;
        }

        input {
          @apply py-2 pl-8 pr-4 text-sm font-medium outline-none placeholder:font-normal placeholder:text-gray-200;
        }
      }
    }
  }
</style>
