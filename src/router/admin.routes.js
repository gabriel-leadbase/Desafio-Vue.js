const routes = {
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
      component: () => import("components/Admin/Medicamentos/Medicamentos.vue")
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
      component: () => import("components/Admin/Vendas/ListaVendasVendedor.vue")
    }
  ]
};

export default routes;
