<template>
  <div>
    <h2>Your Cart</h2>
    <ul>
       <Product v-for="item in productsInCart" :key="item.id" :product='item' />
    </ul>
   <div v-if="!productsInCart.length">Please add some products to cart.</div>
   <div>
     <span>total:${{total.toFixed(2)}}</span>
     <br>
     <button :disabled='!productsInCart.length' @click="checkout(productsInCart)" >checkout</button>
   </div>
  </div>
</template>

<script>
import Product from "./Product";
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: "ShoppingCart",
  components: {
    Product,
  },
  computed:{
    ...mapGetters(['productsInCart','total'])
  },
  methods:{
    ...mapMutations(['checkout'])
  }
};
</script>

<style></style>
