// 路由文件

// 一、 创建页面路由

// 1，导入页面组件
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Company from "./views/Company.vue";
import VueRouter from "vue-router";
import Vue from "vue";

// 因为路由创建完毕之后是需要使用一些 vue-router 内的自带组件展示和跳转页面，所以需要使用 use 方法
// use 方法使用了之后，vue-router 内的自带组件就可以在整个 vue 项目中使用了
Vue.use(VueRouter);

// 2. 根据页面组件创建路由数组
const routes = [
  // 该数组内的某一项就相当于一个页面，页面一般有两部分构成 ：1，页面地址 2. 页面对应的页面组件
  // / 的意思是代表当前服务器的根目录 我们现在其实就是  http://localhost:8080
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/company", component: Company },
];

// 3. 根据路由数组创建成路由实例
// 创建实例的时候需要传递 routes 属性，属性值时路由数组
// 当对象的属性名和属性值对应的那个变量名相同的时候，就可以省略
// 创建路由实例的时候是可以选择路由模式的 有两种 1. hash 使用 URL 的hash 默认的 2.  history 完全模拟浏览器
// 可以使用 mode 设置路由模式

const router = new VueRouter({
  // routes: routes
  routes,
  mode: "history",
});

// 4. 路由实例创建完毕之后，导出路由实例，可以添加到整个 vue 项目中使用了 参考 main.js 的写法
export default router;

// 二、使用路由

// 在组件内部使用 <router-view> 就可以展示路由了
