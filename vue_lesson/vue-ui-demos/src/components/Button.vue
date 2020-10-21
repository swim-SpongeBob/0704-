<template>
  <div>
    <button @click="handleClick" :class="['btn', { active: value }]">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: ["value"],
  methods: {
    handleClick() {
      // 切换开关
      this.$emit("input", !this.value);
    },
  },
};
</script>

<style>
.btn {
  color: aqua;
}
.active {
  color: red;
}
</style>
