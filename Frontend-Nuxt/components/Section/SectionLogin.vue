<template>
  <section class="app-section">
    <div class="wrapper">
      <img
        src="~/assets/icons/Shopping.svg"
        alt="Shopping Illustration"
        class="mx-auto lg:h-[350px] lg:w-[500px]"
      />

      <div>
        <h2 class="mb-2">Login</h2>
        <p>
          Don't have an account?
          <span class="font-medium text-green-200">Sign up</span>
        </p>
      </div>

      <form class="flex flex-col gap-2">
        <div class="input-container">
          <span i-carbon-email></span>
          <input id="email" type="email" placeholder="Email address" />
        </div>

        <div class="input-container">
          <span i-bx-lock-alt></span>
          <input id="password" type="password" placeholder="Password" />
        </div>

        <button class="app-button mx-auto w-fit">Login</button>
      </form>

      <div class="flex items-center gap-2">
        <div class="h-0.5 grow bg-gray-200" />
        <p class="font-medium">Or continue with</p>
        <div class="h-0.5 grow bg-gray-200" />
      </div>

      <div class="flex items-center justify-center gap-4">
        <button class="rounded-full bg-green-200 p-2 text-white">
          <span class="text-2xl" i-bxl-facebook />
        </button>
        <button class="rounded-full bg-green-200 p-2 text-white">
          <span class="text-2xl" i-bxl-google />
        </button>
        <button class="rounded-full bg-green-200 p-2 text-white">
          <span class="text-2xl" i-bxl-twitter />
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .wrapper {
    @apply container flex flex-col gap-4;
  }

  .input-container {
    @apply relative overflow-hidden rounded-lg border border-green-200;

    span {
      @apply absolute top-1/2 left-2 -translate-y-1/2 text-gray-200;
    }

    input {
      @apply w-full py-2 pl-8 pr-4 text-sm font-medium outline-none placeholder:font-normal placeholder:text-gray-200;
    }
  }
</style>
