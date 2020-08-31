<template>
  <div>
    <div v-if="products.length" class="shopping-cart">
      <h2>购物车</h2>
      <CartProductList
        :changeQuantity="changeQuantity"
        :products="products"
        :changeChecked="changeChecked"
      />
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
          checked: true,
        },
        {
          id: "123qw",
          num: 120,
          name: "小米",
          price: 5000,
          quantity: 9,
          checked: true,
        },
        {
          id: "124qw",
          num: 130,
          name: "华为",
          price: 4500,
          quantity: 6,
          checked: true,
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
          value: res.value + (item.checked ? item.quantity * item.price : 0),
          num: res.num + (item.checked ? item.quantity : 0),
        }),
        { value: 0, num: 0 }
      );
    },
    // total() {
    //   return this.products.reduce((res, item) => {
    //     if (isChecked) {
    //       res = res * 1 + item.quantity * item.price;
    //       // num: res.num + item.quantity;
    //     }
    //     return res;
    //   }, []);
    // },
  },
  methods: {
    changeQuantity(id, sign, value) {
      // 已知一个 id 已知一个数组
      //将该数组内和 id 匹配的那一条 quantity 加 1
      const currentProduct = this.products.find((item) => item.id === id);
      if (sign === "+") {
        currentProduct.quantity++;
      } else if (sign === "-") {
        if (currentProduct.quantity > 1) {
          currentProduct.quantity--;
        }
      } else if (sign === "input") {
        // 其实输入框的值是否满足条件不需要再修改父组件 data 的函数内执行，因为只有满足了条件才能修改 data ，所以说该函数直接接收正确的值即可
        // 先获取输入框的内容，然后做判断，判断该值是否满足数字要求，满足做修改，不满足不修改
        // console.log(value);
        // if(Number(value)){
        //   // 输入的是数字是除了 0 之外的数字
        //  c
        // }else{
        //   // 0 或者非数字
        //   alert('不太行')
        // }
        currentProduct.quantity = value;
      }
    },
    changeChecked(id) {
      const currentProduct = this.products.find((item) => item.id === id);
      currentProduct.checked = !currentProduct.checked;
    },
  },
};
</script>

<style>
.shopping-cart {
  width: 600px;
}
</style>
