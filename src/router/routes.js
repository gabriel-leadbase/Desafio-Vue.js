const routes = [
  {
    path: "/vendedor",
    redirect: "/vendedor/index",
    component: () => import("src/layouts/VendedorLayout.vue"),
    children: [
      {
        path: "index",
        component: () => import("pages/Vendedor.vue")
      }
    ]
  },
  {
    path: "/admin",
    redirect: "/admin/index",
    component: () => import("src/layouts/AdminLayout.vue"),
    children: [
      {
        path: "index",
        component: () => import("pages/Admin.vue")
      },
      {
        path: "medicamentos",
        component: () =>
          import("components/Admin/Medicamentos/Medicamentos.vue")
      },
      {
        name: "vendas",
        path: "vendas",
        component: () => import("components/Admin/Vendas/Vendas.vue")
      },
      {
        path: "vendas/unidades",
        component: () =>
          import("components/Admin/Vendas/ListaUnidadesVendidas.vue")
      },
      {
        name: "unidades",
        path: "vendas/vendedor",
        component: () =>
          import("components/Admin/Vendas/ListaVendasVendedor.vue")
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
