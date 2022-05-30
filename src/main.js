import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@adminkit/core/dist/js/app.js';
import '@adminkit/core/dist/css/app.css';

createApp(App).use(router).mount('#app')
