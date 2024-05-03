<script setup lang="ts">
  import { ref } from 'vue';
  import SnackfyVue from './components/SnackfyVue.vue';

  const SnackfyVueRef = ref<typeof SnackfyVue>(SnackfyVue);
  const message = ref<string>('');
  const type = ref<string>('success');
  const duration = ref<number>(2.5);

  const formSubmit = (e: Event) => {
    e.preventDefault();
    SnackfyVueRef.value.showNotification({
      message: message.value,
      type: type.value as 'success' | 'error',
      duration: duration.value
    });
  };
</script>

<template>
  <main class="container">
    <h1 class="title">Test your changes to the alert</h1>
    <form class="notification-form" @submit="formSubmit">
      <div class="form-group">
        <label for="message">Message</label>
        <input id="message" v-model="message" />
      </div>
      <div class="form-group">
        <label for="type">Type</label>
        <select id="type" v-model="type">
          <option value="success">Success</option>
          <option value="error">Error</option>
        </select>
      </div>
      <div class="form-group">
        <label for="duration">Duration (in seconds)</label>
        <input id="duration" required v-model="duration" />
      </div>
      <button type="submit">Show Notification</button>
    </form>
  </main>
  <SnackfyVue ref="SnackfyVueRef" />
</template>

<style scoped>
  .container {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .title {
    text-align: center;
  }

  .notification-form {
    width: 60%;
    min-width: 18rem;
    max-width: 30rem;
    padding: 2rem;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: 1px solid #181818;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    input,
    select {
      height: 2rem;
      border-radius: 4px;
      border: 1px solid #181818;
      padding: 6px;
    }

    input:focus {
      outline: none;
    }
  }
</style>
