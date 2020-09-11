<template>
  <div>
    <h3>文章列表子组件</h3>
    <ul v-if="articles.length">
      <LiTiem
        v-for="article in articles"
        :key="article.id"
        :article="article"
      />
    </ul>
    <div v-else>gif</div>
  </div>
</template>

<script>
import LiTiem from "./LiTiem";
// import axios from "axios";
export default {
  name: "ArticleList",
  props: ["articles"],
  components: {
    LiTiem,
  },
  created() {
    console.log("文章列表子组件 created");
    // axios.get("http://localhost:3001/articles").then((res) => {
    //   setTimeout(() => {
    //     this.articles = res.data;
    //   }, 1000);
    // });
  },
  mounted() {
    console.log("文章列表子组件 mounted");
  },
  updated() {
    console.log("文章列表子组件 updated");
  },
};
</script>

<style></style>
