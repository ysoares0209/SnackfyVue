<script setup lang="ts">
  import { computed } from 'vue';
  const props = defineProps({
    isVisible: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      required: true
    }
  });

  const computedDuration = computed(() => `${props.duration}s`);
</script>

<template>
  <div
    v-show="isVisible"
    class="SnackfyVue-Snackbar"
    :class="{ 'SnackfyVue-Snackbar-show': isVisible }"
    :style="{ '--duration': computedDuration }"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
  .SnackfyVue-Snackbar {
    visibility: hidden;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    max-width: 330px;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    z-index: 1;
    background: white;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    box-shadow: 1px 2px 6px #181626;

    @media screen and (min-width: 620px) {
      max-width: 550px;
    }

    @media screen and (min-width: 1048px) {
      bottom: 2rem;
      right: 2rem;
    }
  }

  .SnackfyVue-Snackbar-show {
    visibility: visible;
    -webkit-animation:
      fadein 0.5s,
      fadeout 0.5s var(--duration);
    animation:
      fadein 0.5s,
      fadeout 0.5s var(--duration);
  }

  @-webkit-keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }

  @keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeout {
    from {
      bottom: 30px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }

  @keyframes fadeout {
    from {
      bottom: 30px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }
</style>
