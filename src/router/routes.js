const routes = [
  {
    path: "/",
    component: () => import("src/layouts/AdminLayout.vue"),
    children: [
      { name: "feed", path: "", component: () => import("pages/index.vue") },
      {
        name: "feedItem",
        path: "/feed/:feedId",
        component: () => import("pages/feedItemDetails.vue")
      }
    ]
  },
  {
    path: "/admin",
    component: () => import("src/layouts/AdminLayout.vue"),
    children: [
      {
        name: "index",
        path: "index",
        component: () => import("pages/Admin.vue")
      },
      {
        name: "medicamentos",
        path: "medicamentos",
        component: () =>
          import("components/Admin/Medicamentos/Medicamentos.vue")
      },
      {
        name: "vendas",
        path: "vendas",
        component: () => import("components/Admin/Vendas/Vendas.vue"),
        children: []
      },
      {
        name: "unidades",
        path: "vendas/unidades",
        component: () =>
          import("components/Admin/Vendas/ListaUnidadesVendidas.vue")
      }
    ]
  },
  {
    path: "/login",
    component: () => import("layouts/LoginLayout.vue"),
    children: [{ path: "", component: () => import("pages/Login.vue") }]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
