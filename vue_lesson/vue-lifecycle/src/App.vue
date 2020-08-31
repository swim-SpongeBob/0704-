<template>
  <div>
    <h1>生命周期</h1>
    <span>{{ num }}</span>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      num: 10,
      actives: [],
    };
  },
  // 生命周期
  // 阶段一
  // 初始渲染阶段，（其实就是页面刚进入的时候或者刷新的时候）
  // 该阶段需要实现的大概有  获取页面初始数据（进入页面就向后台获取数据然后更新页面，或者其他的一些进入也米娜就需要做的事）
  beforeCreate() {
    console.log("组件刚被创建，在初始化 data 之前");
  },
  created() {
    console.log(
      "数据观测 (data observer)，property 和方法的运算，watch/event 事件回调,配置完毕"
    );
    this.num = 1000;
    // 此阶段最适合进入页面就修改 data ，发送请求获取后台数据，修改data
  },
  beforeMount() {
    console.log("组件即将要渲染，挂载之前");
  },
  mounted() {
    console.log("渲染执行完毕");
    console.log(document.querySelector.length);
    // 刚进入页面想要获取真实的 dom 节点做一些功能，在此阶段可以实现
    // 比如说 swiper 插件 使用的时候  new Swiper('.container')  需要获取真实 dom 节点 container
  },
};
</script>

<style></style>
