<script setup>
  // Swiper
  import { SwiperSlide } from 'swiper/vue';
  const swiperOptions = {
    pagination: false,
    navigation: {
      prevEl: '.daily-best-sells-swiper-prev',
      nextEl: '.daily-best-sells-swiper-next',
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
      },
    },
  };

  // Strapi
  const isLoading = ref(true);
  const dailyBestSells = reactive({});
  const getDailyBestSells = async () => {
    isLoading.value = true;
    const data = await useStrapi().getDailyBestSells();
    Object.assign(dailyBestSells, data);
    isLoading.value = false;
  };
  onMounted(() => {
    getDailyBestSells();
  });
</script>

<template>
  <section class="app-section">
    <div class="wrapper">
      <div class="flex items-center justify-between gap-2">
        <h2>Daily Best Sells</h2>
        <SwiperButtons name="daily-best-sells" />
      </div>

      <div class="flex items-center gap-4">
        <AppAd />

        <ClientOnly>
          <Swiper v-if="!isLoading" :swiper-options="swiperOptions">
            <SwiperSlide v-for="product in dailyBestSells" :key="product.id">
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
    </div>
  </section>
</template>

<style scoped lang="scss">
  .wrapper {
    @apply container flex flex-col gap-4;
  }
</style>
