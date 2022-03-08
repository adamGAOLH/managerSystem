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
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/table/index.vue"),
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
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
