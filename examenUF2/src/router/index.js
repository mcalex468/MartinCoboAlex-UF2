import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Anys from '../views/BequesView.vue';
import Centres from '../views/CentresView.vue';
import Detall from '../views/DetallBecaView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/beques', component: Anys },
  { path: '/beques/:any/centres', component: Centres, props: true },
  { path: '/beques/:any/centres/:centre', component: Detall, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
