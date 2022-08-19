<script setup>
  const emit = defineEmits(['categoryIdChange']);

  // Swiper
  import { SwiperSlide } from 'swiper/vue';
  const swiperOptions = {
    pagination: false,
    centeredSlides: true,
  };

  // Strapi
  const isLoading = ref(true);
  const productDetails = reactive({});

  const getProduct = async (productID) => {
    isLoading.value = true;
    const data = await useStrapi().getProduct(productID);
    Object.assign(productDetails, data);
    isLoading.value = false;

    // Emiting the category ID to get the related products
    const categoryID = productDetails.attributes.Category.data.attributes.Name;
    emit('categoryIdChange', categoryID);
  };

  onMounted(() => {
    const productID = useRoute().params.id; // Getting the Product ID from the url
    getProduct(productID);
  });
</script>

<template>
  <section class="app-section">
    <div class="wrapper">
      <!-- Product Details -->
      <div class="flex flex-col gap-4 lg:col-span-3 lg:flex-row">
        <!-- Product Images -->
        <ClientOnly>
          <Swiper
            v-if="!isLoading"
            :swiper-options="swiperOptions"
            class="product-image-swiper"
          >
            <SwiperSlide
              v-for="image in productDetails.attributes.Image.data"
              :key="image.id"
            >
              <img :src="image.attributes.url" alt="" />
            </SwiperSlide>
          </Swiper>

          <div
            v-else
            class="h-80 w-80 animate-pulse rounded-full bg-gray-100"
          />

          <template #fallback>
            <div class="h-80 w-80 animate-pulse rounded-full bg-gray-100" />
          </template>
        </ClientOnly>

        <!-- Product Info -->
        <ProductCardFull
          v-if="!isLoading"
          :product="productDetails"
          class="lg:basis-full"
        />

        <div v-else class="flex grow flex-col gap-2">
          <div class="h-6 w-1/3 animate-pulse rounded-full bg-gray-100"></div>
          <div class="h-4 w-1/6 animate-pulse rounded-full bg-gray-100"></div>
          <div class="h-7 w-3/4 animate-pulse rounded-full bg-gray-100"></div>
          <div class="h-4 w-1/6 animate-pulse rounded-full bg-gray-100"></div>
          <div class="h-7 w-1/2 animate-pulse rounded-full bg-gray-100"></div>
        </div>
      </div>

      <!-- Product Perks -->
      <div class="product-perks">
        <ul>
          <li>
            <span i-carbon-reset class="text-2xl"></span>
            <p>Enjoy hassle free returns.</p>
          </li>

          <li>
            <span i-carbon-number-2 class="text-2xl"></span>
            <p>2 Years warranty.</p>
          </li>

          <li>
            <span i-bxs-check-shield class="text-2xl"> </span>
            <p>Guaranteed by <span>Groceyish</span>.</p>
          </li>
        </ul>
      </div>

      <AppCartTooltip :is-tooltip-activated="true" />
    </div>
  </section>
</template>

<style lang="scss">
  .wrapper {
    @apply container grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-20;
  }
  .product-image-swiper {
    --swiper-theme-color: #237d64;
    --swiper-navigation-size: 16px;

    @apply flex items-center;

    .swiper-wrapper {
      @apply max-h-[400px];
    }

    .swiper-button-next,
    .swiper-button-prev {
      @apply flex items-center justify-center rounded-full p-5 transition-colors;
      @apply bg-gray-100 text-gray-200 hover:bg-green-200 hover:text-white;

      &.swiper-button-lock {
        @apply hidden;
      }
    }

    .swiper-slide {
      @apply flex items-center px-16;
      img {
        @apply mx-auto max-h-full;
      }
    }
  }

  .product-perks {
    @apply lg:col-span-1 lg:border-l lg:border-gray-100 lg:px-4;

    ul {
      @apply flex flex-col gap-2;

      li {
        @apply flex items-center gap-2;

        span {
          @apply font-medium text-green-200;
        }
      }
    }
  }
</style>
