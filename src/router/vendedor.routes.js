const routes = {
  path: "/vendedor",
  redirect: "/vendedor/index",
  component: () => import("src/layouts/VendedorLayout.vue"),
  children: [
    {
      path: "index",
      component: () => import("pages/Vendedor.vue")
    }
  ]
};

export default routes;
