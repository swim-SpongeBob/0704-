<template>
  <div>
    <h2>vue 的进入和离开的过渡</h2>
    <div>
      <button @click="handleClick">按钮</button><br />
      <!-- <button @click="show = !show">按钮</button><br /> -->
      <span v-if="showDom" :class="{ hide: !show, text: true }">hello</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyTranstionDemo",
  data() {
    return {
      show: true,
      showDom: true,
    };
  },
  methods: {
    handleClick() {
      // 需要判断效果是从 离开-->出现 还是 出现-->离开
      //出现-->离开
      if (this.showDom) {
        this.show = false;
        setTimeout(() => {
          this.showDom = false;
        }, 2000);
      } else {
        // 离开-->出现
        // 直接让元素出现并且删除了 hide 类名
        // 上述操作其实就是相当于初始化，所以 transition 检测不到 opacity 的变化
        this.showDom = true;
        setTimeout(() => {
          this.show = true;
        }, 1);
      }
    },
  },
};
</script>

<style>
.text {
  transition: opacity 2s;
}
.hide {
  opacity: 0;
}
</style>
