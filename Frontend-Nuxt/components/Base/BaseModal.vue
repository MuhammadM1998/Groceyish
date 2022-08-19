<script setup>
  const props = defineProps({
    isModalVisible: {
      type: Boolean,
      required: true,
    },
  });

  const emit = defineEmits(['update:isModalVisible']);
  const modal = ref(null);

  const closeModal = () => {
    emit('update:isModalVisible', false);
  };

  watch(
    () => props.isModalVisible,
    (newValue) => {
      if (newValue)
        onClickOutside(modal, () => closeModal(), {
          ignore: [],
        });
    }
  );
</script>

<template>
  <Teleport to="body">
    <Transition name="fade" appear>
      <div v-if="isModalVisible" class="backdrop"></div>
    </Transition>

    <Transition name="pop" appear>
      <div v-if="isModalVisible" ref="modal" class="modal" role="dialog">
        <slot />
        <button class="app-button" @click.prevent="closeModal">Close</button>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped lang="scss">
  .backdrop {
    @apply fixed top-0 left-0 z-40  h-screen w-screen  bg-black bg-opacity-75;

    &.fade-enter-active,
    &.fade-leave-active {
      @apply transition-colors duration-300;
    }

    &.fade-enter-from,
    &.fade-leave-to {
      @apply bg-opacity-0;
    }
  }

  .modal {
    @apply fixed top-1/2 left-1/2 z-50 flex max-w-[70vh] -translate-y-1/2 -translate-x-1/2 flex-col items-center gap-2 rounded-lg bg-white py-6  px-12 text-center;

    &.pop-enter-active,
    &.pop-leave-active {
      @apply transition-all duration-300;
    }

    &.pop-enter-from,
    &.pop-leave-to {
      @apply scale-95 opacity-0;
    }
  }
</style>
