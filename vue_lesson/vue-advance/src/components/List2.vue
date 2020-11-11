<template>
  <div>
    <ul>
      <li v-for="(item,index) in data" :key='index'>
        <slot :item='item' />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "List2",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    
  },
};
</script>

<style></style>
