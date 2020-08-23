<template>
  <div class="product-list">
    <CartProduct
      v-for="product in products"
      :key="product.id"
      :product="product"
      @changeQuantity="changeQuantity"
    />
  </div>
</template>

<script>
import CartProduct from "./CartProduct";
export default {
  name: "CartProductList",
  props: ["products", "changeQuantity"],
  components: {
    CartProduct,
  },
};
</script>

<style></style>
