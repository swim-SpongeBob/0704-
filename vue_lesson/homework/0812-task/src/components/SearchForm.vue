<template>
  <div>
    <!-- 如果直接设置成 v-model  -->
    <!-- 报错 Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders.  -->
    <!-- 意思是： 避免直接改变属性，因为每当父组件重新渲染时，该值都将被覆盖。 -->
    <!-- 在 template 中当事件函数内想要使用事件对象请使用 $event -->
    <!-- <input
      type="text"
      @input="$emit('change-searchvalue', $event.target.value)"
    />
    <br />
    <input
      type="checkbox"
      @change="$emit('change-ishasstock', $event.target.checked)"
      id="checked"
    />
    <label for="checked">Only show products in stock</label> -->

    <input ref="searchInput" type="text" :value="searchValue" />
    <br />
    <input
      ref="checkboxInput"
      type="checkbox"
      id="checked"
      :checked="isHasStock"
    />
    <label for="checked">Only show products in stock</label><br />
    <!-- 只要是修改查询条件，页面就直接显示查询结果 -->
    <!-- 现在要点击查询按钮之后在显示查询内容 -->
    <!-- 方案1. 点击按钮之后再修改父组件的 data -->
    <button @click="search">查询</button>
    <button @click="chongzhi">重置</button>
  </div>
</template>

<script>
export default {
  name: "SearchsearchValueFrom",
  props: ["searchValue", "isHasStock"],
  methods: {
    search() {
      // 修改父组件的 data
      // 获取真是的 dom 节点，可以使用原生方法 document， 在 vue 中提供了 ref 方式获取真实 dom
      this.$emit("change-searchvalue", this.$refs.searchInput.value),
        this.$emit("change-ishasstock", this.$refs.checkboxInput.checked);
    },
    chongzhi() {
      this.$emit("change-searchvalue", ""),
        this.$emit("change-ishasstock", false);
    },
  },
};
</script>

<style></style>
