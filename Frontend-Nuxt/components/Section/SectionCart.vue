<script setup>
  const testData = [
    {
      id: 11,
      attributes: {
        Name: 'Creamy Fig Jam - 430g',
        Brand: 'Vitrac',
        Price_Current: 18,
        Price_Original: 30,
        Price_Currency: 'EGP',
        Image: {
          data: [
            {
              attributes: {
                url: 'https://res.cloudinary.com/cloud-m98/image/upload/v1659117713/Groceyish/Strapi/71_MO_l_O_Brw_L_AC_SL_1500_bbb4330a0d_9c23e83ed7.webp',
              },
            },
          ],
        },
      },
    },

    {
      id: 18,
      attributes: {
        Name: 'Fine Black Tea - 40 g',
        Brand: 'Blue Tea Pot',
        Price_Current: 3.5,
        Price_Original: 6,
        Price_Currency: 'EGP',
        Image: {
          data: [
            {
              attributes: {
                url: 'https://res.cloudinary.com/cloud-m98/image/upload/v1659117698/Groceyish/Strapi/1_9d1185f77b_69906d51bf.webp',
              },
            },
          ],
        },
      },
    },
  ];

  // Modal
  const isModalVisible = ref(false);
</script>

<template>
  <section class="app-section">
    <template v-if="testData.length">
      <div class="wrapper">
        <h2>Cart ({{ testData.length }})</h2>

        <div class="cart">
          <div class="cart-items">
            <div class="flex flex-col gap-3">
              <ProductCart
                v-for="product in testData"
                :key="product.id"
                :product="product"
              />
            </div>

            <NuxtLink to="/" class="app-button w-fit">
              <span i-bx-cart></span>
              <p>Continue Shopping</p>
            </NuxtLink>
          </div>

          <div class="cart-summary">
            <h3>Cart Summary</h3>

            <div class="mt-2 flex flex-col gap-2">
              <form class="flex gap-2">
                <div class="input-container">
                  <span i-bxs-coupon></span>
                  <input id="coupon" type="text" placeholder="Enter Coupon" />
                </div>

                <button
                  class="app-button mx-auto w-fit"
                  @click.prevent="isModalVisible = true"
                >
                  Apply
                </button>

                <BaseModal v-model:is-modal-visible="isModalVisible">
                  <p class="app-text-lg text-green-200">
                    This feature is coming soon!
                  </p>
                  <p class="text-sm font-medium text-gray-200">
                    We're working everyday to enhance your experience as client.
                  </p>
                </BaseModal>
              </form>

              <div class="summary-row">
                <p class="font-medium">Subtotal</p>
                <p class="app-text-lg text-green-200">28.5 EGP</p>
              </div>

              <div class="summary-row">
                <p class="font-medium">Shipping</p>
                <p class="app-text-lg text-green-200">Free</p>
              </div>

              <div class="summary-row">
                <p class="font-medium">Coupon</p>
                <p class="app-text-lg text-green-200">-8.5 EGP</p>
              </div>

              <hr class="border-2 border-green-100" />

              <div class="summary-row">
                <p class="font-medium">
                  Total
                  <span class="text-sm text-gray-200"> (including VAT) </span>
                </p>
                <p class="text-2xl font-semibold text-green-200">20 EGP</p>
              </div>

              <button class="app-button justify-center">
                <span i-bx-cart-alt />
                <p>Checkout</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template v-else>
      <div class="wrapper items-center text-center">
        <img
          src="~/assets/icons/Orders-Empty.svg"
          alt="Orders Empty Illustration"
          class="lg:h-[350px] lg:w-[500px]"
        />

        <h2>Your Cart is Empty</h2>

        <p class="font-medium text-gray-200">
          Explore the products and discover the best deals!
        </p>

        <NuxtLink to="/" class="app-button mx-auto w-fit bg-blue-200">
          Start Shopping
        </NuxtLink>
      </div>
    </template>
  </section>
</template>

<style scoped lang="scss">
  .wrapper {
    @apply container flex flex-col gap-4;
  }

  .cart {
    @apply flex flex-col gap-4 lg:flex-row;
  }

  .cart-items {
    @apply flex grow flex-col gap-4;
  }

  .cart-summary {
    @apply rounded-md border-2 border-green-100 py-2 px-4 lg:self-start;
  }

  .summary-row {
    @apply flex items-center justify-between gap-2;
  }

  .input-container {
    @apply relative overflow-hidden rounded-lg border border-green-200;

    span {
      @apply absolute top-1/2 left-2 -translate-y-1/2 text-gray-200;
    }

    input {
      @apply w-full py-2 pl-8 pr-4 text-sm font-medium outline-none placeholder:font-normal placeholder:text-gray-200;
    }
  }
</style>
