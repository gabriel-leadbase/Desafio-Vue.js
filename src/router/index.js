import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/Login')
  },
  {
    path: '/home',
    name: 'Dashboard',
    component: () => import('@/views/Dashboard')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('@/views/Products')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
