import {createApp} from 'vue';
import {VueCookieNext} from 'vue-cookie-next';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';

createApp(App)
  .use(VueCookieNext)
  .use(VueAxios, axios)
  .mount('#app');
