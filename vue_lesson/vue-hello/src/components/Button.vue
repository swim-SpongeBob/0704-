<template>
  <!-- 当 js 的内容需要写到 template 中方法如下 -->
  <!-- 1.在双尖括号之间，使用{{text}} -->
  <!-- 2.在标签的属性内使用需要将属性写成 v-bind:style='`background-color: ${color}`' 引号内就可以写 js 语法 -->
  <!-- 语法就是 v-bind:属性名="`这里面直接写 js(只能是值或者运算不能是语句) 语法即可`" v-bind: 可以简写成: -->
  <!-- <button v-bind:style="`background-color: ${color}`" class="btn">
    {{ text }}
  </button> -->

  <!-- isActive 如何应用 -->
  <!-- <button v-bind:class="'btn ' + (isActive ? 'color' : '')">{{ text }}</button> -->
  <!-- <button v-bind:class="`btn ${isActive ? 'color' : ''}`">{{ text }}</button> -->
  <!-- <button v-bind:class="isActive ? 'btn color' : 'btn'">{{ text }}</button> -->
  <button :title="value" v-bind:class="isActive ? 'btn color' : 'btn'">
    {{ text }}
  </button>
</template>

<script>
// 可以负责展示不同的文字内容
// 那么就将这个不同的内容设置成 props 让父组件传递
export default {
  name: "Button",
  // 接收的收使用的是字符串
  // props: ["text", "isActive"],
  // 对象方式 高级可以做简单的校验
  props: {
    // text: String,
    text: {
      // 可以设置属性的类型和默认值
      type: String,
      default: "default button",
      // required: true
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: "success",
      validator: function(value) {
        // value 代表的就是父组件传递的值
        // 这个值必须匹配下列字符串中的一个
        return ["success", "warning", "danger"].indexOf(value) !== -1;
      },
    },
  },
};
</script>

<style>
.btn {
  padding: 10px 40px;
  border-radius: 10px;
  background-color: #ffffff;
  font-size: 20px;
  text-align: center;
  border: 0;
  outline: 0;
  cursor: pointer;
  display: block;
}
.color {
  background-color: #00f;
}
</style>
