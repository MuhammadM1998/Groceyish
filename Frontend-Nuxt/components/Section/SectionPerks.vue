<template>
  <section class="app-section">
    <div class="wrapper">
      <div class="perk-card">
        <NuxtIcon name="Best-Price" fill class="text-5xl" />

        <div>
          <p class="app-text-lg">Best Prices & Deals</p>
          <span>Don't miss our daily amazing deals and prices</span>
        </div>
      </div>

      <div class="perk-card">
        <NuxtIcon name="Refundable" fill class="text-5xl" />

        <div>
          <p class="app-text-lg">Refundable</p>
          <span>If your items have damage we agree to refund it</span>
        </div>
      </div>

      <div class="perk-card">
        <NuxtIcon name="Free-Delivery" fill class="text-5xl" />

        <div>
          <p class="app-text-lg">Free Delivery</p>
          <span> Do purchase over $50 and get free delivery anywhere </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .wrapper {
    @apply container flex flex-col items-center gap-8 lg:flex-row lg:justify-center lg:gap-16;
  }

  .perk-card {
    @apply flex max-w-xs items-center gap-4;

    span {
      @apply text-gray-200;
    }
  }
</style>
