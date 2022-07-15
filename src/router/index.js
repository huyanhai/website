import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/plan",
      name: "Plan",
      component: () => import("@/views/Plan.vue"),
    },
    {
      path: "/servers",
      name: "Servers",
      component: () => import("@/views/Servers.vue"),
    },
    {
      path: "/partner",
      name: "Partner",
      component: () => import("@/views/Partner.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("@/views/About.vue"),
    },
    {
      path: "/call",
      name: "Call",
      component: () => import("@/views/CallUs.vue"),
    },
  ],
});
