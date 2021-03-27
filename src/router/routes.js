import adminRoutes from "./admin.routes";
import vendedorRoutes from "./vendedor.routes";
const routes = [
  vendedorRoutes,
  adminRoutes,
  {
    path: "/",
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
