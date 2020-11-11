<template>
  <div>
    <ul>
      <!-- <ListItem v-for="(item,index) in arr" :key="index" :item="item"/> -->
      <ListItem1
        v-for="(item, index) in arr"
        :key="index"
        :item="item"
        :render="render"
      />
    </ul>
  </div>
</template>

<script>
import ListItem1 from "./ListItem1";
export default {
  name: "List",
  components: {
    ListItem1,
  },
  props: {
    arr: {
      type: Array,
      default: () => [],
    },
    render: {
      type: Function,
    },
  },
};
</script>

<style></style>
