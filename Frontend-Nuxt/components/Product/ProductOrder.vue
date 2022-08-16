<script setup>
  const props = defineProps({
    product: {
      type: Object,
      required: false,
      default: () => {},
    },
  });

  const productData = {
    id: props.product.id,
    status: props.product.status,
    name: props.product.attributes.Name,
    brand: props.product.attributes.Brand,
    img: () => {
      return props.product.attributes.Image.data
        ? props.product.attributes.Image.data[0].attributes.url
        : 'https://res.cloudinary.com/cloud-m98/image/upload/v1659123319/Groceyish/Image_Placeholder.webp';
    },
  };

  const capitalize = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
</script>

<template>
  <div class="product-order">
    <div class="product-img">
      <img :src="productData.img()" :alt="productData.name" />
    </div>
    <div class="product-details">
      <p class="brand">{{ productData.brand }}</p>
      <p class="app-text-lg">{{ productData.name }}</p>
      <p class="status" :class="`status--${productData.status}`">
        {{ capitalize(productData.status) }}
      </p>
    </div>

    <NuxtLink :to="`/products/${productData.id}`" class="text-green-200">
      <span i-bx-chevron-right></span>
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
  .product-order {
    @apply rounded-md border-2 border-green-100 py-2 px-4;
    @apply flex items-center gap-4;

    .product-img {
      @apply flex h-[64px] w-[64px] justify-center;

      img {
        @apply max-h-full max-w-full;
      }
    }

    .product-details {
      @apply flex grow flex-col gap-0.5;

      .brand {
        @apply text-sm font-medium text-gray-200;
      }

      .status {
        @apply w-fit py-0.5 px-2 text-sm;

        &--delivered {
          @apply bg-green-100 text-green-200;
        }

        &--canceled {
          @apply bg-red-700 text-white;
        }
      }
    }
  }
</style>
