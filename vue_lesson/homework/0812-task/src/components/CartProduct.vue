<template>
  <div class="product">
    <!-- 加入一个复选框 并实现其功能 -->
    <span>{{ product.num }}</span>
    <span>{{ product.name }}</span>
    <div>
      <button @click="$emit('changeQuantity', product.id, '-')">-</button>
      <input :value="product.quantity" type="text" />
      <!-- 输入值， 当失去焦点是修改 -->
      <!-- 输入的值不符合规范，失去焦点后 默认变回原来的值 -->
      <button @click="$emit('changeQuantity', product.id, '+')">+</button>
    </div>
    <span>￥{{ product.price }}</span>
    <span>￥{{ product.price * product.quantity }}</span>
    <button>移除</button>
  </div>
</template>

<script>
export default {
  name: "CartProduct",
  props: ["product"],
};
</script>

<style>
.product {
  display: flex;
  justify-content: space-between;
}
</style>
