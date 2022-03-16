import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './pages/Home.vue';
import ConfigPage from './pages/ConfigPage.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/config', component: ConfigPage },
];

const router = createRouter({ routes, history: createWebHistory() });
const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app');
