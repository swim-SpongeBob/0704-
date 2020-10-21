<template>
  <!-- 侦听器一般和计算属性做对比 -->
  <!-- 计算属性 -->
  <!-- data() {
    return {
      arr: [1, 2, 3, 4, 5, 6, 7],
    };
  },
  computed: {
    total() {
      return this.arr;
    },
  }, -->
  <div>
    <h2>计算属性的 setter</h2>
    <div>
      姓：<input type="text" v-model.lazy="fristName" /><br />
      名：<input type="text" v-model.lazy="lastName" /><br />
      <!-- 计算属性是不可以被直接修改的 当你使用了 v-model 指令的时候，输入内容是 fullName 就会发生改变 -->
      <!-- 当你想要对计算属性直接修改的时候需要给计算属性设置 setter -->
      全称是：<input type="text" v-model.lazy="fullName" />
    </div>
    <h2>watch 侦听器</h2>
    <div>
      question: <input type="text" v-model.lazy="question" /><br />
      <!-- 当你将 anwser 设置成计算属性的收 anwser 只能设置成同步函数获取，加不了异步操作 -->
      <!-- 那么就只能在设置一个 data 使用失去焦点事件去发送异步请求获取答案来修改 data -->
      <!-- 针对很平凡的操作修改data  vue 提供了一个 watch 方法 -->
      anwser: <span>{{ anwser }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "WatchDemo",
  data() {
    return {
      fristName: "张",
      lastName: "三儿",
      anwser: "请输入一个问题？",
      question: "",
    };
  },
  computed: {
    fullName: {
      get() {
        return this.fristName + "" + this.lastName;
      },
      set(newValue) {
        // newValue 代表新的计算属性 或者叫更改之后的计算属性
        // setter 用来修改计算属性的来源 data 的
        this.fristName = newValue.split(" ")[0];
        this.lastName = newValue.split(" ")[1];
      },
    },
  },
  watch: {
    question: {
      // 监听 question 修改 anwser
      handler() {
        // 当 question 发生变化时就会执行
        if (this.question) {
          setTimeout(() => {
            // 向后台获取答案
            this.question = "";
            this.anwser = Math.random();
          }, 100);
        }
      },
      // 进入页面就执行一次
      immediate: true,
    },
  },
};
</script>

<style></style>
