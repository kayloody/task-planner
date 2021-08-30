import {createApp} from 'vue';
import {VueCookieNext} from 'vue-cookie-next';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';

// Import and use vue-cookie-next for cookies with Vue 3
// Import and use axios/vue-axios for HTTP requests
createApp(App)
	.use(VueCookieNext)
	.use(VueAxios, axios)
	.mount('#app');
