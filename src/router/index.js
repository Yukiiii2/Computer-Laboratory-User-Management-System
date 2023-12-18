import { createRouter, createWebHistory } from "vue-router";

import Login from "../components/Login.vue";
import Page1 from "../components/Page1.vue";
import Page2 from "../components/Page2.vue";
import navbar from "../components/navbar.vue";

const routes = [
    {
      path: "/Login",
      name: "Login",
      component: Login,
    },
    {
      path: "/Page1",
      name: "Page1",
      component: Page1,
    },
    {
      path: "/Page2",
      name: "Page2",
      component: Page2,
    },
    {
      path: "/navbar",
      name: "NavBar",
      component: navbar,
    },
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router;