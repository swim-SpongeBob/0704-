<template>
  <div>
    <Tabs />
    <TransitionDemo />
    <WatchDemo />
    <!-- <MyTranstionDemo /> -->
  </div>
</template>

<script>
import Tabs from "./components/Tabs";
// import MyTranstionDemo from "./components/MyTranstionDemo";
import TransitionDemo from "./components/TransitionDemo";
import WatchDemo from "./components/WatchDemo";
export default {
  name: "App",
  components: {
    Tabs,
    TransitionDemo,
    // MyTranstionDemo,
    WatchDemo,
  },
};
</script>

<style>
body {
  height: 2000px;
}
</style>
