<template>
  <section class="app-section">
    <div class="wrapper">
      <div class="banner bg-banner-1">
        <BaseTag class="bg-yellow-100 text-white">Free Delivery</BaseTag>
        <h3>Free Delivery over 350 EGP</h3>
        <p>Shop 350 EGP product and get free delivery anywhre.</p>
        <button class="app-button bg-yellow-100">
          Shop Now <span i-bx-right-arrow-alt></span>
        </button>
      </div>

      <div class="banner bg-banner-2">
        <BaseTag class="bg-green-200 text-white">Best Deal</BaseTag>
        <h3>Organic Food</h3>
        <p>Save up to 60% off on your first order</p>
        <button class="app-button">
          Order Now <span i-bx-right-arrow-alt></span>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .wrapper {
    @apply container flex flex-col items-center justify-center gap-4 lg:flex-row;
  }

  .banner {
    @apply w-full max-w-[600px] py-8 px-12;
    @apply flex flex-col justify-center gap-4;
    @apply rounded-lg bg-cover bg-no-repeat shadow-lg;

    > * {
      @apply 2xs:max-w-[90%] xs:max-w-[80%];
    }

    p {
      @apply font-medium text-gray-200;
    }

    button {
      @apply w-fit;
    }
  }
</style>
