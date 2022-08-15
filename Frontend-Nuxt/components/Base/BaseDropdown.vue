<script setup>
  defineProps({ values: { type: Array, required: true } });
  defineEmits(['value-changed']);
</script>

<template>
  <div class="dropdown-wrapper">
    <slot name="icon" />

    <select @change="$emit('value-changed', $event.target.value)">
      <option v-for="value in values" :key="value" :value="value">
        <slot name="caption" /> {{ value }}
      </option>
    </select>
  </div>
</template>

<style lang="scss">
  .dropdown-wrapper {
    @apply relative flex text-green-200;

    span {
      @apply absolute top-1/2 left-2 -translate-y-1/2;
    }

    select {
      @apply w-full  rounded-md border border-green-100 bg-white py-2 pl-8 pr-6;

      option:hover {
        @apply bg-green-200;
      }
    }
  }
</style>
