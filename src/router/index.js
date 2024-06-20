// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Biodata from '../views/biodataView.vue'
import Skill from '../views/skillView.vue'
import Pengalaman from '../views/PengalamanView.vue'
import Tugas from '../components/Tugas.vue' // Import the new Tugas component
import FreeTugas from '../components/FreeTugas.vue' 

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: About },
  { path: '/biodata', component: Biodata },
  { path: '/skill', component: Skill },
  { path: '/pengalaman', component: Pengalaman },
  { path: '/tugas', component: Tugas },
  { path: '/free-tugas', component: FreeTugas } // Add new route
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.path !== '/tugas') {
    localStorage.setItem('previousRoute', from.fullPath)
  }
  next()
})

export default router
