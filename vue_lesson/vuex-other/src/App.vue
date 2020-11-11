<template>
  <div>
    <h2>vuex 的一些小知识点</h2>
    <hr />
    <PluginDemo />
    <hr />
    <StrictDemo />
    <hr />
    <VModelDemo />
    <hr />
    <ModulesNameSpaced />
    <hr />
    <AsyncAction />
  </div>
</template>

<script>
import PluginDemo from "./components/PluginDemo";
import StrictDemo from "./components/StrictDemo";
import VModelDemo from "./components/VModelDemo";
import ModulesNameSpaced from "./components/ModulesNameSpaced";
import AsyncAction from "./components/AsyncAction";

export default {
  name: "App",
  components: {
    PluginDemo,
    StrictDemo,
    VModelDemo,
    ModulesNameSpaced,
    AsyncAction
  },
};
</script>

<style></style>
