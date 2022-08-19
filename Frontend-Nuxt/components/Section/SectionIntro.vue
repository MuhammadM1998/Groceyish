<script setup>
  import { SwiperSlide } from 'swiper/vue';

  const swiperOptions = {
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    centeredSlides: true,
  };
</script>

<template>
  <section>
    <Swiper class="intro-swiper" :swiper-options="swiperOptions">
      <SwiperSlide class="intro-slide bg-intro-slide-1">
        <h1>Bring nature into your home</h1>
        <p>Get everything you need with a single click!</p>
      </SwiperSlide>

      <SwiperSlide class="intro-slide bg-intro-slide-2">
        <h1>Don't miss our daily amazing deals</h1>
        <p>Sign up for the weekly newsletter</p>
        <AppNewsletter class="justify-center lg:justify-start" />
      </SwiperSlide>

      <SwiperSlide class="intro-slide bg-intro-slide-3">
        <h1>Fresh Vegetables, Big Discount</h1>
        <p>Save up to 60% off on your first order</p>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<style lang="scss">
  .intro-swiper {
    --swiper-theme-color: #237d64;
    --swiper-navigation-size: 16px;

    .intro-slide {
      @apply bg-cover bg-no-repeat py-32 px-20;
      @apply flex h-auto flex-col items-center justify-center gap-4 text-center;
      @apply lg:items-start lg:text-start;

      > * {
        @apply lg:max-w-3xl;
      }

      > p {
        @apply font-medium;
      }
    }

    .swiper-button-next,
    .swiper-button-prev {
      @apply flex items-center justify-center rounded-full p-5 transition-colors;
      @apply bg-gray-100 text-gray-200 hover:bg-green-200 hover:text-white;
    }
  }
</style>
