<template>
  <div>
    <h5>我是儿子1</h5>
    <!-- 我要展示 store 内的数据 arr 的求和结果 -->
    <div>{{ res }}</div>
    <div>展示某个限定的数：和20最近的数值 --- {{ limitNum(10) }}</div>
    <div>{{ testNum }}</div>
  </div>
</template>

<script>
// import store from "../store/index";
// import sum from '../common/sum'
// 获取 store 内 计算属性可以借助 vuex 的 mapGetters 辅助函数
import { mapGetters } from "vuex";
export default {
  name: "Son1",
  computed: {
    // sum() {
    //   return sum(store.state.arr)
    // },
    // limitNum() {
    //   return store.getters.getNum(20);
    // },
    // ...mapGetters(['sum','getNum'])
    ...mapGetters({
      res: "sum",
      limitNum: "getNum",
    }),
    testNum() {
      return this.$store.state.testNum
    }
  },
};
</script>

<style></style>
