
const routes = [
  {
    path: '/',
    component: () => import('layouts/Default.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') },
    ]
  },

  {
    path: '/main',
    component: () => import('layouts/Main.vue'),
    children: [
      { path: 'main', component: () => import('pages/Index.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
