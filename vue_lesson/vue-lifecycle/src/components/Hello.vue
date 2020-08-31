<template>
  <div>
    <h2>子组件</h2>
  </div>
</template>

<script>
export default {
  name: "Hello",
  beforeCreate() {
    console.log("子组件的 beforeCreate");
  },
  created() {
    console.log("子组件的created");
  },
  beforeMount() {
    console.log("子组件的beforeMount");
  },
  mounted() {
    console.log("子组件的mounted");
  },
};
</script>

<style></style>
