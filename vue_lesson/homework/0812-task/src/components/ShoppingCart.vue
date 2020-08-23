<template>
  <div>
    <div v-if="products.length" class="shopping-cart">
      <h2>购物车</h2>
      <CartProductList :changeQuantity="changeQuantity" :products="products" />
      <CartFooter :total="total" />
    </div>
    <div v-else>
      <h2>购物车为空</h2>
    </div>
  </div>
</template>

<script>
import CartProductList from "./CartProductList";
import CartFooter from "./CartFooter";
export default {
  name: "ShoppingCart",
  data() {
    return {
      products: [
        {
          id: "12qw",
          num: 110,
          name: "iphone",
          price: 4000,
          quantity: 4,
        },
        {
          id: "123qw",
          num: 120,
          name: "小米",
          price: 5000,
          quantity: 9,
        },
        {
          id: "124qw",
          num: 130,
          name: "华为",
          price: 4500,
          quantity: 6,
        },
      ],
    };
  },
  components: {
    CartProductList,
    CartFooter,
  },
  computed: {
    total() {
      return this.products.reduce(
        (res, item) => ({
          value: res.value + item.quantity * item.price,
          num: res.num + item.quantity,
        }),
        { value: 0, num: 0 }
      );
    },
  },
  methods: {
    changeQuantity(id, sign) {
      // 已知一个 id 已知一个数组
      //将该数组内和 id 匹配的那一条 quantity 加 1
      const currentProduct = this.products.find((item) => item.id === id);
      if (sign === "+") {
        currentProduct.quantity++;
      } else {
        if (currentProduct.quantity > 1) {
          currentProduct.quantity--;
        }
      }
    },
  },
};
</script>

<style>
.shopping-cart {
  width: 600px;
}
</style>
