<template>
  <li class="product">
    <div>
      <span>{{ product.title }}</span>
      <span> - </span>
      <span>${{ product.price }}</span>
      <span v-if="product.quantity"> × {{ product.quantity }}</span>
    </div>
    <button
      v-if="!product.quantity"
      @click="addToCart(product.id)"
      :disabled="getQuantityById(product.id) === product.inventory"
    >
      add to cart
    </button>
  </li>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Product",
  props: ["product"],
  computed: {
    ...mapGetters(["getQuantityById"]),
  },
  methods: {
    ...mapMutations(["addToCart"]),
  },
};
</script>

<style></style>
