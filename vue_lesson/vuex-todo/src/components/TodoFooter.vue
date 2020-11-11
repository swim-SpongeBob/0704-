<template>
  <div v-if="todos.length" class="todo-footer">
    <div>
      {{ getTypeNums('active') }} item{{
        getTypeNums('active') === 1 ? '' : 's'
      }}
      left
    </div>
    <div class="btns">
      <button
        :class="{ active: showType === 'all' }"
        @click="changeType('all')"
      >
        All
      </button>
      <button
        :class="{ active: showType === 'active' }"
        @click="changeType('active')"
      >
        Active
      </button>
      <button
        :class="{ active: showType === 'completed' }"
        @click="changeType('completed')"
      >
        Completed
      </button>
    </div>
    <div @click="delAllCompleted" :class="['del',{hide : getTypeNums('completed')===0}]">
      clear Completed
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
export default {
  name: "TodoFooter",
  computed: {
    ...mapState(["todos", "showType"]),
    ...mapGetters(["getTypeNums"]),
  },
  methods: {
    ...mapMutations(["changeType",'delAllCompleted']),
  },
};
</script>

<style>
.todo-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}
.todo-footer .btns > button {
  margin-left: 8px;
}
.todo-footer .btns > button:first-child {
  margin-left: 0px;
}
.btns > button.active {
  color: red;
}
.del:hover{
    cursor: pointer;
    text-decoration: underline;
    /* 下划线 underline */
}
.hide {
  visibility: hidden;
}
</style>
