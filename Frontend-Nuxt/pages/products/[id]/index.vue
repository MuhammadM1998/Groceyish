<script setup>
  const categoryID = ref('');

  const updateCategoryID = (newCategoryID) => {
    categoryID.value = newCategoryID;
  };
</script>

<template>
  <main>
    <ProductDetails @category-id-change="updateCategoryID" />
    <SectionRelatedProducts :category-id="categoryID" />
    <SectionCategories />
    <SectionPerks />
  </main>
</template>
