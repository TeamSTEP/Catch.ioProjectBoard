import { createApp } from 'vue';
import VueRellax from 'vue-rellax';
import App from './App.vue';
import './registerServiceWorker';
import './assets/styles/base.css';
import router from './router';
import store from './store';

<<<<<<< Updated upstream
import Agile from 'vue-agile';

createApp(App)
    .use(store)
    .use(router)
    .use(Agile)
    .mount('#app');
=======
createApp(App).use(VueRellax).mount('#app');
>>>>>>> Stashed changes
