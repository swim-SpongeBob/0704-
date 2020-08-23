<template>
  <div>
    <LoopDemo />
    <Showimg />
    <StyleDemo />
  </div>
</template>

<script>
import LoopDemo from "./components/LoopDemo";
import Showimg from "./components/Showimg";
import StyleDemo from "./components/StyleDemo";
export default {
  name: "App",
  components: {
    LoopDemo,
    Showimg,
    StyleDemo,
  },
};
</script>

<style></style>
