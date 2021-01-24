import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/Login'),
    meta: {

    }
  },
  {
    path: '/home',
    name: 'Dashboard',
    component: () => import('@/views/Dashboard'),
    meta: {
      isPrivate: true,
      rules: ['statistics:list']
    }
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('@/views/Products'),
    meta: {
      isPrivate: true,
      rules: ['products:list']
    }
  },
  {
    path: '/sales',
    name: 'Sales',
    component: () => import('@/views/Sales'),
    meta: {
      isPrivate: true,
      rules: ['sales:list']
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.isPrivate)) {
    if (store.getters['auth/isAuthenticated']) {
      const checkUserHasRule = (rule) => {
        return store.state.auth.user.permissions.rules.includes(rule)
      }

      const hasPermissions = to.matched.some(
        record => record.meta.rules.every(checkUserHasRule)
      )

      hasPermissions ? next() : next('/')

      return
    }
    console.log('notAuthenticated')
    next('/')
  } else {
    console.log('notPrivate')
    next()
  }
})

export default router
