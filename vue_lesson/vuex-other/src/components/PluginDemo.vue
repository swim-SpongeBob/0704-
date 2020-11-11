<template>
  <div>
      <h4>使用 logger 插件</h4>
      <div>store 内的数据 count {{count}}</div>
      <button @click="add">修改count</button>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'PluginDemo',
  components: {},
  computed:{
    ...mapState(['count'])
  },
  methods:{
      ...mapMutations(['add'])
  }
}
</script>

<style>

</style>