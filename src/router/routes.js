const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Layout01.vue") },
      { path: "/Layout1", component: () => import("pages/Layout01.vue") },
      { path: "/Layout2", component: () => import("src/pages/Layout02.vue") }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
