import { createRouter, createWebHistory } from "vue-router";

import Login from "../components/Login.vue";
import register from "../components/register.vue";
import report from "../components/Report.vue";

import navbar from "../components/navbar.vue";
import Page1 from "../components/Page1.vue";
import Page2 from "../components/Page2.vue";

import main from "../components2/main.vue";
import attendance from "../components2/Attendance.vue"
import account from "../components2/Account.vue"
import records from "../components2/Records.vue"
import reports from "../components2/Reports.vue"

const routes = [
    {
      path: "/Login",
      name: "Login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: register,
    },
    {
      path: "/report",
      name: "report",
      component: report,
    }, 
    {
      path: "/navbar",
      name: "NavBar",
      component: navbar,
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
      path: "/main",
      name: "main",
      component: main,
    },
    {
      path: "/attendance",
      name: "attendance",
      component: attendance,
    },
    {
      path: "/account",
      name: "account",
      component: account,
    },
    {
      path: "/records",
      name: "records",
      component: records,
    },
    {
      path: "/reports",
      name: "reports",
      component: reports,
    },
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router;