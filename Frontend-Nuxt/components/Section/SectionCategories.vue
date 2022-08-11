<script setup>
  // Swiper
  import { SwiperSlide } from 'swiper/vue';
  const swiperOptions = {
    pagination: false,
    navigation: {
      prevEl: '.category-swiper-prev',
      nextEl: '.category-swiper-next',
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5,
      },
      1280: {
        slidesPerView: 6,
      },
      1440: {
        slidesPerView: 7,
      },
    },
  };

  // Strapi
  const isLoading = ref(true);
  const categories = reactive({});
  const getCategories = async () => {
    isLoading.value = true;
    const data = await useStrapi().getCategories();
    Object.assign(categories, data);
    isLoading.value = false;
  };
  onMounted(() => {
    getCategories();
  });
</script>

<template>
  <section class="app-section wrapper">
    <div class="flex items-center justify-between gap-2">
      <h2>Explore Categories</h2>
      <SwiperButtons name="category" />
    </div>

    <ClientOnly>
      <Swiper v-if="!isLoading" :swiper-options="swiperOptions">
        <SwiperSlide v-for="category in categories" :key="category.id">
          <CategoryCard :category="category" />
        </SwiperSlide>
      </Swiper>

      <SwiperSkeleton v-else :swiper-options="swiperOptions">
        <CategorySkeleton />
      </SwiperSkeleton>

      <template #fallback>
        <CategorySkeleton />
      </template>
    </ClientOnly>
  </section>
</template>

<style scoped lang="scss">
  .wrapper {
    @apply container flex flex-col gap-4;
  }
</style>
