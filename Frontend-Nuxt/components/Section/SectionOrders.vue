<script setup>
  const testData = [
    {
      id: 11,
      status: 'delivered',
      attributes: {
        Name: 'Creamy Fig Jam - 430g',
        Brand: 'Vitrac',
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
      status: 'canceled',
      attributes: {
        Name: 'Fine Black Tea - 40 g',
        Brand: 'Blue Tea Pot',
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
</script>

<template>
  <section class="app-section">
    <template v-if="testData.length">
      <div class="wrapper">
        <h2>Orders</h2>

        <div class="flex flex-col gap-3">
          <ProductOrder
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
    </template>

    <template v-else>
      <div class="wrapper items-center text-center">
        <img
          src="~/assets/icons/Orders-Empty.svg"
          alt="Orders Empty Illustration"
          class="lg:h-[350px] lg:w-[500px]"
        />

        <h2>You have no orders yet</h2>

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
</style>
