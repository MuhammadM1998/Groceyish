<script setup>
  const props = defineProps({ categoryId: { type: String, required: true } });

  // Swiper
  import { SwiperSlide } from 'swiper/vue';
  const swiperOptions = {
    pagination: false,
    navigation: {
      prevEl: '.related-swiper-prev',
      nextEl: '.related-swiper-next',
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1280: {
        slidesPerView: 5,
      },
    },
  };

  // Strapi
  const isLoading = ref(true);
  const related = reactive({});

  watch(
    () => props.categoryId,
    async (newValue) => {
      if (newValue) getRelatedProducts(newValue);
    }
  );

  const getRelatedProducts = async (categoryID) => {
    isLoading.value = true;
    const productID = useRoute().params.id;
    const data = await useStrapi().getRelatedProducts(productID, categoryID);
    Object.assign(related, data);
    isLoading.value = false;
  };
</script>

<template>
  <section class="app-section">
    <div class="wrapper">
      <div class="flex items-center justify-between gap-2">
        <h2>Related Products</h2>
        <SwiperButtons name="related" />
      </div>

      <ClientOnly>
        <Swiper v-if="!isLoading" :swiper-options="swiperOptions">
          <SwiperSlide v-for="product in related" :key="product.id">
            <ProductCard :product="product" />
          </SwiperSlide>
        </Swiper>

        <SwiperSkeleton v-else :swiper-options="swiperOptions">
          <ProductSkeleton />
        </SwiperSkeleton>

        <template #fallback>
          <ProductSkeleton />
        </template>
      </ClientOnly>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .wrapper {
    @apply container flex flex-col gap-4;
  }
</style>
