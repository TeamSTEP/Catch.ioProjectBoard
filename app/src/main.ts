import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import './assets/styles/base.css';
import router from './router';
import store from './store';

import Agile from 'vue-agile';

createApp(App)
    .use(store)
    .use(router)
    .use(Agile)
    .mount('#app');
