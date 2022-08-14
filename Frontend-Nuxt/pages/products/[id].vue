<script setup>
  const categoryID = ref('');

  const updateCategoryID = (newCategoryID) => {
    categoryID.value = newCategoryID;
  };
</script>

<template>
  <div class="container">
    <ProductDetails @category-id-change="updateCategoryID" />
    <SectionRelatedProducts :category-id="categoryID" />
    <SectionCategories />
    <SectionPerks />
  </div>
</template>
