<template>
  <div class="main">
    <Button text="Show More" :isActive="false" />
  </div>
</template>

<script>
import Button from "./Button";
export default {
  name: "Main",
  components: {
    Button,
  },
};
</script>

<style>
.main {
  width: 80%;
  margin: 0 auto;
  height: 400px;
  background-color: #00b3d4;
}
</style>
