<script setup lang="ts">
  defineProps({
    duration: { type: Number, required: true },
    color: { type: String, required: true }
  });
</script>

<template>
  <div class="SnackfyVue-loading-bar-wrapper">
    <div class="SnackfyVue-loading-bar" :style="{ '--color': color, '--duration': duration }" />
  </div>
</template>

<style scoped>
  .SnackfyVue-loading-bar-wrapper {
    height: 4px;
    width: 100%;
  }

  .SnackfyVue-loading-bar {
    height: 100%;
    border-radius: 8px;
    animation: roundtime calc(var(--duration) * 1s) linear forwards;
    transform-origin: left center;
    background: linear-gradient(to bottom, var(--color), var(--color));
  }

  @-webkit-keyframes roundtime {
    to {
      transform: scaleX(0);
    }
  }

  @keyframes roundtime {
    to {
      transform: scaleX(0);
    }
  }
</style>
