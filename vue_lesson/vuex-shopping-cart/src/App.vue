<template>
  <div>
    <h2>Vuex Shoppping Cart</h2>
    <hr>
    <ProductList />
    <hr>
    <ShoppingCart />
  </div>
</template>

<script>
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";
export default {
  name: "App",
  components: {
    ProductList,
    ShoppingCart,
  },
};
</script>

<style></style>
