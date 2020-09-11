<template>
  <div class="box">
    <h3>这是一个测试销毁生命周期的组件</h3>
  </div>
  <!-- <div class="box" v-if="show">
    <h3>这是一个测试销毁生命周期的组件</h3>
  </div> -->
</template>

<script>
export default {
  name: "Box",
  //   props: ["show"],
  data() {
    return {
      //   run: 0,
    };
  },
  mounted() {
    // 直接给组件实例新增一个属性将相当于在组件内部创建了一个局部变量
    // this.run = setInterval(() => {
    //   console.log("1");
    // }, 100);
    console.log("组件被创建了");
  },
  beforeDestroy() {
    console.log("组件即将被销毁");
  },
  destroyed() {
    clearInterval(this.run);
    console.log("组件销毁完毕");
  },
};
</script>

<style>
.box {
  height: 200px;
  width: 200px;
  background-color: red;
}
</style>
