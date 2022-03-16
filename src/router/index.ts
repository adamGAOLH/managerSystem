/*
 * @Description:
 * @Version: 1.0
 * @Author: Gao
 * @Date: 2022-03-09 09:37:18
 * @LastEditors: Gao
 * @LastEditTime: 2022-03-14 11:18:57
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/home/Home.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/index",
        name: "Index",
        meta: {
          title: "系统首页",
          index: 1,
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/table/index.vue"),
      },
      {
        path: "/echarts",
        name: "Echarts",
        meta: {
          title: "柱状图表",
          index: 1,
        },
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/echarts/columnChart.vue"
          ),
      },
      {
        path: "/lineChart",
        name: "LineChart",
        meta: {
          title: "折线图表",
          index: 1,
        },
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/echarts/lineChart.vue"
          ),
      },
      {
        path: "/drag",
        name: "Drag",
        meta: {
          title: "拖拽",
          index: 1,
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/drag/index.vue"),
      },
      {
        path: "/excel",
        name: "Excel",
        meta: {
          title: "Excel",
          index: 1,
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/excel/index.vue"),
      },
      {
        path: "/component",
        name: "Component",
        meta: {
          title: "组件",
          index: 1,
        },
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/component/index.vue"
          ),
      },
      {
        path: "/guide",
        name: "Guide",
        meta: {
          title: "引导页",
          index: 1,
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/guide/index.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登陆",
      index: 1,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/login/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const token = sessionStorage.getItem("token");
//   if (!token && to.path !== "/login") {
//     console.log("3");

//     next("/login");
//   } else {
//     next();
//   }
// });

export default router;
