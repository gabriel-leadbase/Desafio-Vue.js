import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
    path: '/adm',
    name: 'admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/salesMan',
    name: 'salesMan',
    component: () => import('../views/SalesMan.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router