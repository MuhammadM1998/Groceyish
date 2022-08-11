<script setup>
  // Imports
  import { Swiper } from 'swiper/vue';
  import { Pagination, Navigation, EffectFade, Lazy, Autoplay } from 'swiper';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  import 'swiper/css/effect-fade';
  import 'swiper/css/lazy';

  // Swiper Config
  const props = defineProps({
    swiperOptions: { type: Object, required: false, default: () => {} },
  });

  const defaultOptions = {
    modules: [Pagination, Navigation, EffectFade, Lazy, Autoplay],
    pagination: {
      clickable: true,
    },
    navigation: true,

    lazy: {
      checkInView: true,
      enabled: true,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    preloadImages: false,
    rewind: true,
    autoplay: true,
  };

  const swiperConfig = {
    ...defaultOptions,
    ...props.swiperOptions,
  };
</script>

<template>
  <Swiper v-bind="swiperConfig" class="w-full">
    <slot />
  </Swiper>
</template>

<style lang="scss">
  .swiper-slide {
    @apply h-auto;
  }
</style>
