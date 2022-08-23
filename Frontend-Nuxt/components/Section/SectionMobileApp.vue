<template>
  <section class="app-section bg-overlayGreen bg-cover bg-no-repeat">
    <div class="wrapper">
      <div class="flex items-center lg:basis-full">
        <picture>
          <source
            srcset="
              https://res.cloudinary.com/cloud-m98/image/upload/v1658221710/Groceyish/Groceyish-App.webp
            "
            media="(min-width: 1023px)"
          />

          <img
            src="https://res.cloudinary.com/cloud-m98/image/upload/c_scale,w_400/v1658221710/Groceyish/Groceyish-App.webp"
            alt="Groceyish Mobile App"
            loading="lazy"
          />
        </picture>
      </div>

      <div
        class="flex basis-full flex-col items-center gap-4 text-center lg:items-start lg:text-start"
      >
        <h2 class="lg:text-5xl">Shop Faster With Groceyish App</h2>

        <p class="font-medium text-gray-200">Available on both IOS & Android</p>

        <div class="flex items-center gap-2">
          <button aria-label="app-store">
            <NuxtImg src="app-store" aria-label="app-store" />
          </button>

          <button aria-label="google-play">
            <NuxtImg src="google-play" aria-label="google-play" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .wrapper {
    @apply container flex flex-col items-center gap-8 lg:flex-row-reverse;
  }
</style>
