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
  </section>
</template>

<style scoped lang="scss">
  .wrapper {
    @apply container flex flex-col gap-4;
  }
</style>
