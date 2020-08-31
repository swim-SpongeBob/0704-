<template>
  <div>
    <input type="text" v-model.trim="value" />
    <!-- <button @click="qingkong, $emit('add-todo', value, qingkong)">提交</button> -->
    <button @click="handleHeader">提交</button>
  </div>
</template>

<script>
export default {
  name: "TodoHeader",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    handleHeader() {
      const { value } = this;
      if (value) this.$emit("add-todo", value), (this.value = "");
      else alert("不成功");
    },
    // qingkong() {
    //   this.value = "";
    // },
  },
};
</script>

<style></style>
