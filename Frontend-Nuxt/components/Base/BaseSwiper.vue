<script setup>
  // Imports
  import { Swiper } from 'swiper/vue';
  import { Pagination, Navigation, EffectFade, Lazy, Keyboard } from 'swiper';
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
    modules: [Pagination, Navigation, EffectFade, Lazy, Keyboard],
    pagination: {
      clickable: true,
    },
    navigation: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    lazy: true,
    lazy: {
      checkInView: true,
      enabled: true,
    },
    keyboard: {
      enabled: true,
    },
    slidesPerView: 1,
    centeredSlides: true,
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
  <Swiper v-bind="swiperConfig">
    <slot />
  </Swiper>
</template>
