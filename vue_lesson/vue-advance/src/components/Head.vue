<template>
  <div>
      <h1 v-if="level===1">
          <a href="#"><slot/></a>
      </h1>
      <h2 v-else-if="level===2">
          <a href="#"><slot/></a>
      </h2>
      <h3 v-else-if="level===3">
          <a href="#"><slot/></a>
      </h3>
  </div>
</template>

<script>
export default {
name:'Head',
props:{
    level:{
        type:Number,
        default:1
    }
}
}
</script>

<style>

</style>