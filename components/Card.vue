<template>
  <div class="card" :class="{'w-full': isFullWidth, 'w-max': !isFullWidth}">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  isFullWidth: {
    type: Boolean,
    default: true,
  },
})
</script>

<style scoped>
.card {
  position: relative;
  border-radius: 14px;
  padding: 24px;
  background: linear-gradient( to bottom right, #404040 0%, #40404000 50% );
  z-index: 1;
}

.card::before {
  content: "";
  position: absolute;
  inset: 1px;
  background: linear-gradient( to bottom right, #2d2d2e40 0%, #1b1b1d00 100% ), #202022;
  border-radius: inherit;
  z-index: -1;
}
</style>