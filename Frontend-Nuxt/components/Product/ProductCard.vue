<script setup>
  const props = defineProps({
    product: {
      type: Object,
      required: false,
      default: () => {},
    },
  });

  const productData = {
    name: props.product.attributes.Name,
    brand: props.product.attributes.Brand,
    category: props.product.attributes.Category.data.attributes.Name,
    priceCurrent: `${props.product.attributes.Price_Current} ${props.product.attributes.Price_Currency}`,
    priceOriginal: `${props.product.attributes.Price_Original} ${props.product.attributes.Price_Currency}`,
    ratingValue: props.product.attributes.Rating_Value,
    ratingCount: props.product.attributes.Rating_Users,
    isBestDeal: props.product.attributes.isBestDeal,
    isSaving: props.product.attributes.Price_Original,
    savingValue: () => {
      if (!props.product.attributes.Price_Original) return null;

      const saving =
        100 -
        Math.round(
          (props.product.attributes.Price_Current /
            props.product.attributes.Price_Original) *
            100
        );
      return saving + '%';
    },
    img: () => {
      return props.product.attributes.Image.data
        ? props.product.attributes.Image.data[0].attributes.url
        : 'https://res.cloudinary.com/cloud-m98/image/upload/v1659123319/Groceyish/Image_Placeholder.webp';
    },
  };
</script>

<template>
  <NuxtLink class="product-card" :to="`/products/${product.id}`">
    <!-- Tags -->
    <BaseTag v-if="productData.isBestDeal" class="tag tag--best-deal">
      Best Deal
    </BaseTag>

    <BaseTag v-else-if="productData.isSaving" class="tag tag--saving">
      Save {{ productData.savingValue() }}
    </BaseTag>

    <!-- Img -->
    <img :src="productData.img()" :alt="productData.name" class="img" />

    <!-- Brand & Category -->
    <div class="brand-category">
      <p>{{ productData.brand }}</p>
      <p>{{ productData.category }}</p>
    </div>

    <!-- Name -->
    <p class="app-text-lg line-clamp-1">{{ productData.name }}</p>

    <!-- Rating -->
    <div class="flex items-center gap-1 text-yellow-200">
      <span i-bxs-star></span>
      <p class="font-medium">{{ productData.ratingValue }}</p>
      <p class="text-sm text-gray-200">({{ productData.ratingCount }})</p>
    </div>

    <!-- Price -->
    <div class="flex items-center gap-2">
      <p class="app-text-lg text-green-200">{{ productData.priceCurrent }}</p>

      <span
        v-if="productData.isSaving"
        class="text-sm font-medium text-gray-200 line-through"
      >
        {{ productData.priceOriginal }}
      </span>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss">
  .product-card {
    @apply rounded-lg border border-gray-100 transition-colors hover:border-green-200;
    @apply px-6 pt-12 pb-4;
    @apply flex h-full flex-col justify-center gap-2;
    @apply relative overflow-hidden;
  }

  .tag {
    @apply absolute top-0 left-0  py-2 px-4;

    &--best-deal {
      @apply bg-green-100 text-green-200;
    }

    &--saving {
      @apply bg-yellow-100 text-white;
    }
  }

  .img {
    @apply mx-auto mb-4 h-[96px] w-[96px];
  }

  .brand-category {
    @apply flex items-center justify-between gap-2 text-sm font-medium text-gray-200;

    p {
      @apply line-clamp-1;
    }
  }
</style>
