<template>
  <div class="product-list">
    <CartProduct
      v-for="product in products"
      :key="product.id"
      :product="product"
      @changeQuantity="changeQuantity"
      @change-checked="changeChecked"
    />
  </div>
</template>

<script>
import CartProduct from "./CartProduct";
export default {
  name: "CartProductList",
  props: ["products", "changeQuantity", "changeChecked"],
  components: {
    CartProduct,
  },
};
</script>

<style></style>
