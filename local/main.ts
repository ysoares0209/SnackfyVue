import './assets/base.css';

import { createApp } from 'vue';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import {
  BiCheckCircleFill,
  BiExclamationCircleFill,
  BiExclamationTriangleFill
} from 'oh-vue-icons/icons';
import App from './App.vue';

addIcons(BiCheckCircleFill, BiExclamationCircleFill, BiExclamationTriangleFill);

const app = createApp(App);
app.component('v-icon', OhVueIcon);

app.mount('#app');
