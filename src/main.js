import '@adminkit/core/dist/js/app.js';
import '@adminkit/core/dist/css/app.css';

import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import App from './App.vue';
import router from './router';

library.add(fas);

createApp(App)
    .component('fa', FontAwesomeIcon)
    .use(router)
    .mount('#app')
