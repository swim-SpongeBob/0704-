<template>
  <div>
    <h2>我是一个选项卡</h2>
    <div>
      <button
        @click="activeType = 'Home'"
        :class="{ active: activeType === 'Home' }"
      >
        Home
      </button>
      <button
        @click="activeType = 'Posts'"
        :class="{ active: activeType === 'Posts' }"
      >
        Posts
      </button>
      <button
        @click="activeType = 'About'"
        :class="{ active: activeType === 'About' }"
      >
        About
      </button>
    </div>
    <!-- 展示某一个组件 -->
    <!-- <Home v-if="activeType === 'Home'" />
    <Posts v-else-if="activeType === 'Posts'" />
    <About v-else /> -->

    <!-- 语法糖 -->
    <!-- 使用vue 自带的 component 元素加上特殊的 is 属性简化上述的写法 -->
    <!-- 注意： is 属性的属性值必须和组件名相同才能正确展示组件-->
    <!-- 动态组件 -->
    <!-- <component :is="activeType"></component> -->
    <!-- <text-document
      v-bind:title="doc.title"
      v-on:update:title="doc.title = $event"
    ></text-document> -->

    <!-- $event 就代表子组件传递的参数 -->
    <!-- <component
      :title="title"
      @update:title="this.$event"
      :is="activeType"
    ></component> -->
    <!-- 下面是上述写法的语法糖 -->
    <!-- 子组件内调用传递的事件名必须写成 update:propName -->
    <!-- <component :title.sync="title" :is="activeType"></component> -->

    <!-- 子组件想要修改(同步)父组件的data ，一般情况是在父组件定义修改方法然后传递给子组件执行，通过自定义事件方式 -->
    <!-- 上述做法官方提供了一个语法糖 -->

    <!-- keep-alive -->
    <keep-alive include="Posts">
      <component :is="activeType"></component>
    </keep-alive>
  </div>
</template>

<script>
import Home from "./Home";
import Posts from "./Posts";
import About from "./About";
export default {
  name: "Tabs",
  data() {
    return {
      activeType: "Home",
      //   title: "",
    };
  },
  components: {
    Home,
    Posts,
    About,
  },
  methods: {
    changePost(newTitle) {
      this.title = newTitle;
    },
  },
};
</script>

<style>
.active {
  color: red;
  /* border: 1px solid #000; */
}
</style>
