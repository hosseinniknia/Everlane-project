// router.js or router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/LandingPage.vue'

const routes = [
  { path: '/', component: Home },
  // add more routes as needed
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router