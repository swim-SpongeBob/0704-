<template>
  <span :class="isActive ? 'active' : ''" @mouseenter="handleMouseenter">{{
    text
  }}</span>
</template>

<script>
export default {
  name: "Span",
  props: ["text", "isActive"],
  methods: {
    handleMouseenter() {
      // 调用父组件的自定义事件并传参
      // 传参的方式在父组件内直接传递也可以在子组件内传递
      this.$emit("change");
    },
  },
};
</script>

<style>
span {
  display: block;
  width: calc(820px / 5);
  float: left;
  height: 40px;
  text-align: center;
  outline: none;
  border: 0;
  background-color: #e3e2e2;
  line-height: 40px;
  font-size: 14px;
}
.active {
  color: #ab8e66;
  background-color: #f7f6f6;
  border-bottom: 2px #cea861 solid;
}
</style>
)
