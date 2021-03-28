import { store } from "./../store/index";

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters["auth/token"]) {
    next("/login");
    return;
  }
  next();
};

const ifAuthenticated = (to, from, next) => {
  if (store.getters["auth/token"]) {
    if (store.getters["auth/user"].type === "Admin") {
      next("/admin");
      return;
    } else if (store.getters["auth/user"].type === "Vendedor") {
      next("/vendedor");
      return;
    }
  }
  next();
};

let adminRoutes = {
  path: "/admin",
  beforeEnter: ifNotAuthenticated,
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

let vendedorRoutes = {
  path: "/vendedor",
  beforeEnter: ifNotAuthenticated,
  redirect: "/vendedor/index",
  component: () => import("src/layouts/VendedorLayout.vue"),
  children: [
    {
      path: "index",
      component: () => import("pages/Vendedor.vue")
    }
  ]
};

const routes = [
  vendedorRoutes,
  adminRoutes,
  {
    path: "/",
    beforeEnter: ifAuthenticated,
    alias: "/login",
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
