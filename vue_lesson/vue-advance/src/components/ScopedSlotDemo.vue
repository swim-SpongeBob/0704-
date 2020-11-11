<template>
  <div>
      <h2>作用域插槽</h2>
      <div>
          <h3>接收父组件中传过来的数据</h3>
          <!-- <slot  v-bind:obj="obj"/> -->
          <slot  :obj="obj"/>
      </div>
  </div>
</template>

<script>
export default {
name:'ScopedSlotDemo',
data(){
    return{
        obj:{
            name:'小黑',
            age: 18
        }
    }
}
}
</script>

<style>

</style>