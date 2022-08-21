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
    name: props.product.attributes.Name,
    brand: props.product.attributes.Brand,
    priceCurrent: `${props.product.attributes.Price_Current} ${props.product.attributes.Price_Currency}`,
    priceOriginal: `${props.product.attributes.Price_Original} ${props.product.attributes.Price_Currency}`,
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
  const emit = defineEmits(['update:product']);

  // Store
  const cartStore = useCartStore();
  const removeProduct = () => {
    cartStore.removeProduct(props.product);
  };
  const updateProductQuantity = (newQuantity) => {
    const updatedProduct = { ...props.product, quantity: newQuantity };
    emit('update:product', updatedProduct);
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
      <p class="app-text-lg text-green-200">{{ productData.priceCurrent }}</p>
      <div v-if="productData.isSaving" class="price">
        <p class="text-gray-200 line-through">
          {{ productData.priceOriginal }}
        </p>

        <span class="bg-yellow-100 py-1 px-2 text-white">
          {{ productData.savingValue() }}
        </span>
      </div>

      <form class="flex items-center justify-between gap-4">
        <!-- Quantity -->
        <div class="quantity">
          <input :value="product.quantity" readonly />

          <div class="quantity-controls">
            <button
              class="quantity-controls-up"
              @click.prevent="updateProductQuantity(product.quantity + 1)"
            >
              <span i-bx-chevron-up></span>
            </button>

            <button
              :disabled="product.quantity <= 1"
              class="quantity-controls-down"
              @click.prevent="updateProductQuantity(product.quantity - 1)"
            >
              <span i-bx-chevron-down></span>
            </button>
          </div>
        </div>

        <button class="app-button controls" @click.prevent="removeProduct">
          <span i-bx-trash></span>
          <p>Remove</p>
        </button>
      </form>
    </div>
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

      .price {
        @apply flex items-center gap-2 text-sm font-medium;
      }

      .quantity {
        @apply relative w-24 rounded-lg border border-green-100 py-2 pl-4 pr-6 text-green-200;

        &-controls {
          @apply absolute right-2 top-1/2 -translate-y-1/2;
          @apply flex flex-col items-center;

          &--up {
          }

          &--down {
          }
        }

        input {
          @apply max-w-full outline-none;
        }
      }
    }
  }
</style>
