<template>
  <div>
      <h2>mixin 混入</h2>
      <div>组件内的 data num: {{num}}</div>
  </div>
</template>

<script>
import helloMixin from '../mixins/hello'
export default {
    name:'MixinDemo',
    mixins:[helloMixin],
    data(){
        return {
            num:1000
        }
    },
    created(){
        // console.log('组件自己的 created');
    }
}
</script>

<style>

</style>