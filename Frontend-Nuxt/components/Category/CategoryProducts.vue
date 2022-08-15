<script setup>
  defineProps({ products: { type: Array, required: true } });

  const currentPage = ref(1);
</script>

<template>
  <div class="category-products">
    <!-- Summary -->
    <div class="summary">
      <!-- Results Count -->
      <p class="text-gray-200">
        Found
        <span class="font-medium text-green-200">{{ products.length }}</span>
        Items!
      </p>

      <!-- Controls -->
      <div class="flex flex-col gap-2 2xs:flex-row">
        <BaseDropdown :values="[10, 20, 30]" class="basis-full">
          <template #icon> <span i-carbon-show-data-cards></span> </template>
          <template #caption> Show: </template>
        </BaseDropdown>

        <BaseDropdown
          class="basis-full"
          :values="[
            'Name - Descending',
            'Name - Ascending',
            'Price - Low to High',
            'Price - High to Low',
          ]"
        >
          <template #icon> <span i-bx-sort></span> </template>
          <template #caption> Sort: </template>
        </BaseDropdown>
      </div>
    </div>

    <div class="products-grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />

      <!-- Pagination -->
      <SwiperButtons
        class="col-span-full justify-center"
        name="category"
        @prev-btn-clicked="currentPage--"
        @next-btn-clicked="currentPage++"
      >
        <p class="text-gray-200">
          Page
          <span class="font-medium text-blue-200">1</span>
          of
          <span class="font-medium text-blue-200">4</span>
        </p>
      </SwiperButtons>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .category-products {
    @apply flex flex-col gap-4;
  }

  .summary {
    @apply flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between;
  }
  .products-grid {
    @apply grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5;

    @media (min-width: 480px) and (max-width: 768px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
</style>
