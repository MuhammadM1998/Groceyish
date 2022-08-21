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
  };

  // Quantity
  const quantity = ref(1);

  // // Adding an item to Cart
  const cart = useCartStore();
  const addToCart = () => {
    cart.addProduct(props.product, quantity.value);
  };
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex flex-col gap-2">
      <!-- Tags -->
      <div class="flex items-center gap-4">
        <BaseTag v-if="productData.isBestDeal" class="tag tag--best-deal">
          Best Deal
        </BaseTag>

        <BaseTag v-if="productData.isSaving" class="tag tag--saving">
          Save {{ productData.savingValue() }}
        </BaseTag>
      </div>

      <!-- Brand & Category -->
      <div class="brand-category">
        <p>{{ productData.brand }}</p>
        <p>{{ productData.category }}</p>
      </div>

      <!-- Name -->
      <p class="app-text-lg">{{ productData.name }}</p>

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

      <!-- Buy -->
      <form class="buy">
        <!-- Quantity -->
        <div class="quantity">
          <input :value="quantity" readonly />

          <div class="quantity-controls">
            <button class="quantity-controls-up" @click.prevent="quantity++">
              <span i-bx-chevron-up></span>
            </button>

            <button
              :disabled="quantity <= 1"
              class="quantity-controls-down"
              @click.prevent="quantity--"
            >
              <span i-bx-chevron-down></span>
            </button>
          </div>
        </div>

        <button class="app-button buy-button" @click.prevent="addToCart">
          <span i-bx-cart-add></span>
          <p>Add to Cart</p>
        </button>
      </form>
    </div>

    <div class="banner bg-banner-1">
      <BaseTag class="bg-yellow-100 text-white">Free Delivery</BaseTag>
      <h3>Free Delivery over 350 EGP</h3>
      <p>Shop 350 EGP product and get free delivery anywhre.</p>
      <button class="app-button bg-yellow-100">
        Shop Now <span i-bx-right-arrow-alt></span>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .tag {
    @apply py-2 px-4;

    &--best-deal {
      @apply bg-green-100 text-green-200;
    }

    &--saving {
      @apply bg-yellow-100 text-white;
    }
  }

  .brand-category {
    @apply flex items-center justify-between gap-2 text-sm font-medium text-gray-200;

    p {
      @apply line-clamp-1;
    }
  }

  .buy {
    @apply flex items-center gap-4;

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

    &-button {
      @apply w-full justify-center bg-green-100 text-green-200 transition-colors hover:bg-green-200 hover:text-white;
    }
  }

  .banner {
    @apply mx-auto w-full max-w-[600px] py-8 px-12;
    @apply flex flex-col justify-center gap-4;
    @apply rounded-lg bg-cover bg-no-repeat shadow-lg;

    > * {
      @apply 2xs:max-w-[90%] xs:max-w-[80%];
    }

    p {
      @apply font-medium text-gray-200;
    }

    button {
      @apply w-fit;
    }
  }
</style>
