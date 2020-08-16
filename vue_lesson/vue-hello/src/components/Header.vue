<template>
  <header>
    <!-- 只要是在 template 中想要使用 js 的话都要遵循两个语法 -->
    <!-- 父组件传递给子组件内容的时候是通过使用 html 属性的形式传递的，那么默认属性传递的值只能是字符串 -->
    <!-- 模板语法    v-bind    {{}} -->
    <Button :isActive="true" value="danger" />
    <span>成绩:{{ number }}</span>

    <!-- 事件函数如何传递参数 -->
    <!-- 第一种 -->
    <button @click="handleClick(100)">修改上面的成绩</button>
    <!-- 第二种 -->
    <!-- <button @click="function(event){handleClick(10,event)}">修改上面的成绩</button> -->
  </header>
</template>

<script>
import Button from "./Button";
export default {
  name: "Header",
  components: {
    Button,
  },
  data: function() {
    return {
      number: 80,
    };
  },

  // Cannot set property 'number' of undefined (无法设置未定义的属性“number”)
  // methods 内的方法一般只能设置成普通函数，因为要用到 this 关键字
  // 第一种 event 方式
  methods: {
    handleClick: function(value) {
      console.log();
      this.number = value;
    },
  },
  // 第二种 event 方式
  //   methods: {
  //     handleClick: function (value,event) {
  //         console.log();
  //       this.number = value;
  //       // 这的 this 指的是组件实例，指的就是整个组件本身
  //       // 我们可以直接通过 this 能访问到 组件的 data  methods props ...
  //     },
  //   },
};
</script>

<style>
header {
  width: 100%;
  height: 200px;
  background-color: #cbd817;
}
</style>
