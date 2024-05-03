<script setup lang="ts">
  import { ref, computed, defineExpose } from 'vue';
  import LoadingBar from './LoadingBar.vue';
  import Snackbar from './Snackbar.vue';

  /* Types */
  type NotificationType = 'success' | 'error';
  type ShowNotificationsProps = {
    message: string;
    type: NotificationType;
    duration?: number;
  };

  /* CONSTANTS */
  const SUCCESS_COLOR = '#63b365';
  const ERROR_COLOR = '#f22e2e';

  const DEFAULT_DURATION = 2.5;
  // offset to ensure the notification is removed after the animation plays out
  const DURATION_OFFSET_IN_MS = 300;

  /* REFs */
  const _isVisible = ref<boolean>(false);
  const _message = ref<string>('');
  const _type = ref<NotificationType>('success');
  const _duration = ref<number>(DEFAULT_DURATION);

  /* Computed */
  const notificationColor = computed(() => {
    return _type.value === 'success' ? SUCCESS_COLOR : ERROR_COLOR;
  });

  function showNotification({
    message = '',
    type = 'success' as NotificationType,
    duration = DEFAULT_DURATION
  }: ShowNotificationsProps) {
    _isVisible.value = true;
    _message.value = message;
    _type.value = type;
    _duration.value = duration;

    // reset automatically after notification plays out
    // duration * 1000 to convert to milliseconds
    const timeout = duration * 1000 + DURATION_OFFSET_IN_MS;
    setTimeout(() => {
      _isVisible.value = false;
      _message.value = '';
      _type.value = 'success';
      _duration.value = DEFAULT_DURATION;
    }, timeout);
  }

  defineExpose({
    showNotification
  });
</script>

<template>
  <Snackbar :isVisible="_isVisible" :duration="_duration">
    <div class="SnackfyVue-message-wrapper">
      <p class="SnackfyVue-message">{{ _message }}</p>
    </div>
    <LoadingBar :duration="_duration" :color="notificationColor" />
  </Snackbar>
</template>

<style scoped>
  .SnackfyVue-message-wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .SnackfyVue-message {
    font-size: 0.875rem;
    color: #323743ff;
    width: 100%;
    text-align: center;
  }
</style>