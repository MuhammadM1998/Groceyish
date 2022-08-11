<script setup>
  import { SwiperSlide } from 'swiper/vue';

  defineProps({
    swiperOptions: { type: Object, required: false, default: () => {} },
  });
</script>

<template>
  <Swiper :swiper-options="swiperOptions">
    <SwiperSlide v-for="index in 7" :key="index">
      <slot />
    </SwiperSlide>
  </Swiper>
</template>
