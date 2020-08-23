<template>
  <div class="show-goods">
    <!-- 用自定义事件传递函数的时候，希望将自定义事件名称使用 kebab-case 命名，不使用 camelCase 方式 -->
    <SearchForm
      :searchValue="searchValue"
      :isHasStock="isHasStock"
      @change-searchvalue="changeSearchValue"
      @change-ishasstock="changeIsHasStock"
    />
    <ShowContent :searchValue="searchValue" :isHasStock="isHasStock" />
    <!-- <button @click="showValue">展示</button> -->
  </div>
</template>

<script>
import SearchForm from "./SearchForm";
import ShowContent from "./ShowContent";
export default {
  name: "ShowGoods",
  data() {
    return {
      searchValue: "",
      isHasStock: false,
    };
  },
  components: {
    SearchForm,
    ShowContent,
  },
  methods: {
    // showValue() {
    //   console.log("输出", this.searchValue);
    //   console.log("输出", this.isHasStock);
    // },
    changeSearchValue(newValue) {
      this.searchValue = newValue;
    },
    changeIsHasStock(newValue) {
      this.isHasStock = newValue;
    },
  },
};
</script>

<style>
.show-goods {
  width: 322px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
}
</style>
