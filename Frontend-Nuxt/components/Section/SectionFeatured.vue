<script setup>
  // Swiper
  import { SwiperSlide } from 'swiper/vue';
  const swiperOptions = {
    pagination: false,
    navigation: {
      prevEl: '.featured-swiper-prev',
      nextEl: '.featured-swiper-next',
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
  const featured = reactive({});
  const getFeatured = async () => {
    isLoading.value = true;
    const data = await useStrapi().getFeatured();
    Object.assign(featured, data);
    isLoading.value = false;
  };
  onMounted(() => {
    getFeatured();
  });
</script>

<template>
  <section class="app-section">
    <div class="wrapper">
      <div class="flex items-center justify-between gap-2">
        <h2>Featured Products</h2>
        <SwiperButtons name="featured" />
      </div>

      <ClientOnly>
        <Swiper v-if="!isLoading" :swiper-options="swiperOptions">
          <SwiperSlide v-for="product in featured" :key="product.id">
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
