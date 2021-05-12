
const routes = [
  {
    path: '/',
    component: () => import('layouts/Default.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') },
    ]
  },

  {
    path: '/logged',
    component: () => import('layouts/Main.vue'),
    children: [
      { path: 'seller', component: () => import('pages/Seller.vue') },
      { path: 'admin', component: () => import('pages/Admin.vue') }
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
