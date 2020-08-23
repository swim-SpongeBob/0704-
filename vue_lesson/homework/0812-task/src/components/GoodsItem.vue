<template>
  <li class="goods-item">
    <span :class="[{ 'no-stock': !goods.stocked }]">{{ goods.name }}</span>
    <span>{{ goods.price }}</span>
  </li>
</template>

<script>
export default {
  name: "GoodsItem",
  props: ["goods"],
};
</script>

<style>
.goods-item span {
  width: 50%;
  display: block;
  float: left;
}
.no-stock {
  color: red;
}
</style>
