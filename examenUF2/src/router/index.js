import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',name: 'home', component: () => import('../views/HomeView.vue') },
    
    { path: '/beques', name: 'beques',  
      component: () => import('../views/BequesView.vue'), props: true},

    { path: '/beques/:any', name: 'beques',  
      component: () => import('../views/CentresView.vue'), props: true},

    { path: '/beques/:any/:detall', name: 'beques',  
      component: () => import('../views/DetallBecaView.vue'), props: true }
  ],
})

export default router
