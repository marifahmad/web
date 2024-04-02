import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/biodata',
      name: 'biodata',
    
      component: () => import('../views/biodataView.vue')
    },
    {
      path: '/Pengalaman',
      name: 'Pengalaman',
 
      component: () => import('../views/PengalamanView.vue')
    },
    {
      path: '/skill',
      name: 'skill',
    
      component: () => import('../views/skillView.vue')
    }
  ]
})

export default router
