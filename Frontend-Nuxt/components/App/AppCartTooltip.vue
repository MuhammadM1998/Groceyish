<script setup>
  const props = defineProps({
    isTooltipActivated: { type: Boolean, required: true },
  });

  watch(
    () => props.isTooltipActivated,
    (newValue) => {
      if (newValue) animateTooltip();
    }
  );

  const animateTooltip = () => {
    showTooltip();
    setTimeout(() => {
      hideTooltip();
    }, 3000);
  };

  const showTooltip = () => {
    isTooltipVisible.value = true;
  };

  const hideTooltip = () => {
    isTooltipVisible.value = false;
  };

  const isTooltipVisible = ref(false);

  if (props.isTooltipActivated) animateTooltip();
</script>

<template>
  <Teleport to="body">
    <div class="tooltip opacity-0" :class="{ 'opacity-100': isTooltipVisible }">
      <p>Item Added to Cart</p>

      <button @click.prevent="hideTooltip">
        <span i-carbon-close></span>
      </button>

      <div
        class="tooltip-progress"
        :class="{ 'animate-progress': isTooltipVisible }"
      />
    </div>
  </Teleport>
</template>

<style scoped>
  .tooltip {
    @apply absolute bottom-4 right-4 flex items-center justify-between gap-4 overflow-hidden;
    @apply rounded-lg bg-green-100 py-2 px-4 font-medium text-green-200  shadow;
    @apply transition-opacity;
  }
  .tooltip-progress {
    @apply absolute bottom-0 left-0 h-1 w-full  bg-green-200  transition-all;
  }
</style>
