<template>
  <div>
    <h1 class="title">生命周期</h1>
    <!-- <div class="test">
      {{ text }} <button @click="text = '第嘉'">修改文字</button>
      <button @click="handleClick">异步操作修改文字</button>
    </div> -->

    <!-- <div v-if="articles.length">
      <div v-for="article in articles" :key="article.id">
        <h3>{{ article.title }}</h3>
        <span style="font-size:20px;color:red;" class="iconfont icon-dianzan"></span>
      </div>
    </div>
    <div v-else>假的 gif</div> -->

    <!-- <Hello :text="text" /> -->

    <ArticleList v-show="articles.length" :articles="articles" />
    <button @click="show = !show">修改 show</button>
    <Box v-if="show" />
    <!-- <ArticleList /> -->
  </div>
</template>

<script>
// import Hello from "./components/Hello";
import ArticleList from "./components/ArticleList";
import Box from "./components/Box";
import axios from "axios";
// import "./assets/font_aydezu0p3a/iconfont.css";
export default {
  name: "App",
  components: {
    // Hello,
    ArticleList,
    Box,
  },
  data() {
    return {
      articles: [],
      show: true,
      // text: "默认文字",
    };
  },
  // 生命周期
  // 阶段一
  // 初始渲染阶段，（其实就是页面刚进入的时候或者刷新的时候）
  // 该阶段需要实现的大概有  获取页面初始数据（进入页面就向后台获取数据然后更新页面，或者其他的一些进入也米娜就需要做的事）
  // beforeCreate() {
  //   console.log("组件刚被创建，在初始化 data 之前");
  // },
  created() {
    console.log(
      "数据观测 (data observer)，property 和方法的运算，watch/event 事件回调,配置完毕"
    );
    axios.get("http://localhost:3001/articles").then((res) => {
      setTimeout(() => {
        this.articles = res.data;
      }, 1000);
    });
    // 此阶段最适合进入页面就修改 data ，发送请求获取后台数据，修改data
  },
  // beforeMount() {
  //   console.log("组件即将要渲染，挂载之前");
  // },
  // mounted() {
  //   console.log("渲染执行完毕");
  //   // console.log(document.querySelector(".title"));
  //   // 刚进入页面想要获取真实的 dom 节点做一些功能，在此阶段可以实现
  //   // 比如说 swiper 插件 使用的时候  new Swiper('.container')  需要获取真实 dom 节点 container
  // },
  // beforeUpdate() {
  //   console.log("数据更新之前");
  //   // console.log(window, document.querySelector("test"));
  // },
  // updated() {
  //   // 一般用于获取数据更新之后的新的 dom 节点
  //   console.log("数据更新完毕，并且页面更新渲染完毕");
  //   // console.log(this.test);
  //   // console.log(window, document.querySelector("test"));
  // },
  // methods: {
  //   handleClick() {
  //     setTimeout(() => {
  //       this.text = "异步过后的修改";
  //     }, 1000);
  //   },
  // },
};
</script>

<style></style>
