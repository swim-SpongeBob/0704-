import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    // 路由独享的守卫
    beforeEnter: (to, from, next) => {
      // console.log(to);
      // console.log(from);
      console.log("Home 路由独享的守卫");
      next();
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    // 当按下浏览器的前进后退按钮 savePositoin 就存在， 或者使用 路由的 back go 等方法也可以
    if (savedPosition) {
      return savedPosition;
    } else {
      // 没按下前进后退直接滚动到顶部
      return { x: 0, y: 0 };
    }
  },
});

// 可以使用路由导航守卫对路由进行控制
// 1. 全局守卫
//    a. 全局前置守卫 在所有路由转跳之气那执行的钩子
const login = true;
// 全局的路由前置守卫
router.beforeEach((to, from, next) => {
  // console.log(to); // to 是当前的路由
  // console.log(from); // from 是原来的路由
  // to from  获取的就是组件内的 $route
  // next 参数是一个函数 该函数的作用就是 通行
  // console.log("0");
  console.log("全局前置守卫");
  // next();

  // 方式一
  // if (to.path === "/") {
  //   next();
  // } else {
  //   if (login) {
  //     next();
  //   } else {
  //     alert("未登录，请先登录");
  //     next("/");
  //   }
  // }

  // 方式一简化
  //  a || b
  if (to.path === "/" || login) next();
  else alert("未登录，请先登录"), next("/");
});

// 全局解析守卫
router.beforeResolve((to, from, next) => {
  // console.log("1");
  console.log("全局解析守卫");
  // if (to.path === "/" || login) next();
  // else alert("未登录，请先登录"), next("/");
  next();
});

// 全局后置钩子
router.afterEach(() => {
  // console.log(to);
  // console.log(from);
  console.log("全局后置钩子");
});
export default router;
