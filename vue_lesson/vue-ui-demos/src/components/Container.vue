<template>
  <div>
    <h3>布局组件</h3>
    <div class="left">
      左边
      <!-- <slot name="sidebar"></slot> -->
      <!-- 默认插槽使用 -->
      <slot></slot>
    </div>
    <div class="rigit">
      右边
      <slot name="list"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Container",
};
</script>

<style></style>
