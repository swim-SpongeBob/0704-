<template>
  <div class="list">
    <!-- /frontend -->
    <!-- /frontend/sort=popular -->
    <!-- 当 link 的地址是查询条件的时候，不用将地址写全，只需要写查询部分即可 -->
    <!-- 当 link 的地址是查询条件的时候，并不是跳转路由（页面），展示的还是当前页面，只不过是给当前页面地址加了一些筛选条件 -->

    <div class="filter-nav">
      <router-link
        :class="
          $route.query.sort === 'popular' || !$route.query.sort ? 'active' : ''
        "
        to="?sort=popular"
        >热门</router-link
      >|
      <router-link
        :class="$route.query.sort === 'newest' ? 'active' : ''"
        to="?sort=newest"
        >最新</router-link
      >
    </div>
    <ul v-if="list.length">
      <li v-for="post in list" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
    <!-- <div v-else-if='!success'>稍等</div> -->
    <div v-else>{{ showText }}</div>
  </div>
</template>

<script>
// 我们要根据地址栏的信息判断当前要展示的文章裂变的类别
// vue-router  提供了一些方案获取地址栏的信息
// $route 代表档期那配到的路由 的信息
// $router 代表整个 vue 的路由实例信息，也就是自己创建的路由实例
import axios from "axios";
export default {
  name: "Postlist",
  data() {
    return {
      list: [],
      // 请求是否成功，请求执行期间显示稍等成功之后显示列表或者 暂无此类文章
      // success:false
      showText: "稍等",
      props: ["type"],
    };
  },
  watch: {
    // 侦听器监听的不一定是 data 也可以是该组件内的各种信息 data props #route 等等，计算属性也一样
    // 如果是监听的$route 对象，可能会造成污染
    // 我们要做的事就是页面地址稍微发生的时候，获取对应的文章列表
    "$route.fullPath": {
      handler(newValue, oldValue) {
        console.log(this.type);
        console.log(this.$route.params.type);
        // console.log(newValue.params.type);
        // console.log(newValue);
        // console.log(this.$route);
        // setTimeout(() => {
        //   console.log("更新文章数据");
        //   this.list = [1, 2, 3];
        // }, 500);
        // 获取列表列别以及筛选条件
        // 当地址是 / 的是 type = recommended   sort = popular
        // 当地址只有 '/xx?sort=xxx' 是 type = xx   sort = xxx
        // const {$route}=this
        // const type= $route.path ==='/'? 'recommended': $route.query.sort ?

        // /frontend ---> /frontend?sort=popular  不能发请求重复了
        console.log(newValue, oldValue);
        if (!(newValue.includes(oldValue) && newValue.includes("popular"))) {
          const { params, query } = this.$route;
          if (
            ["frontend", "backend", "recommended"].includes(
              params.type || !params.type
            )
          ) {
            this.list = [];
            this.showText = "稍等";
            const type = params.type || "recommended";
            const sort = query.sort || "popular";
            //   请求的地址以及查询的语句都是后台提供的，我们只需要再发送请求之前获取所需要的各种信息然后发送不同的请求
            // 一般来说页面跳转过程中获取一些信息的时候可以通过页面地址获取
            const queryStr =
              type === "recommended"
                ? `isRecommended=true&sort=${sort}`
                : `type=${type}&sort=${sort}`;
            // this.success= false
            axios.get(`http://localhost:3001/posts?${queryStr}`).then((res) => {
              setTimeout(() => {
                // this.success = true
                this.list = res.data;
              }, 500);
            });
          } else {
            this.showText = "暂无此类文章";
          }
        }
      },
      immediate: true,
    },
    // 1. 监听$route.path （如果切换了页面），发请求获取对应的所有的文章列表，然后再根据计算属性计算出当前需要展示的 最新 或者 推荐 或者 热榜的文章
    // 2.监听 $route.fullPath (切换了页面以及点击当前页面内的三个类别按钮都会执行),然后根据当前页面的类别 和 页面内的文章的最新 或者 推荐 或者 热榜 去发送请求拿数据显示
  },
  //   created() {
  //     // 当前的 Postlist 组件作为动态组件，当动态页面之间进行切换的时候组件并不会销毁而是一直存在的
  //     console.log(this.$route);
  //     // 根据获取到的类别向后台发送请求获取对应的数据展示 文章列表
  //   },
  // 只要在分别点击 推荐 前端和后端链接的时候控制台输出对应的类别

  // [{id: '1dsad',type: 'frontend',isRecommended: true,....},{id: '1dsad',type: 'backend',isRecommended: false,...}]
};
</script>

<style>
.filter-nav {
  padding: 0 150px;
  line-height: 20px;
  background-color: #fff;
  margin: 10px 0;
}
.filter-nav a {
  color: #ccc;
  text-decoration: none;
}
.filter-nav .active {
  color: #007fff;
}
</style>
