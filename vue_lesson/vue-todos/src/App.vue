<template>
  <div class="todos">
    <div class="todos1">
      <h1>todo mvc</h1>
      <!-- <TodoHeader
      ref="todoHeader"
      :headerValue="headerValue"
      @add-todo="addTodo"
    /> -->
      <TodoHeader :headerValue="headerValue" @add-todo="addTodo" />
      <TodoList
        :delTodo="delTodo"
        :changeTodoState="changeTodoState"
        :todos="showTodos"
      />
      <TodoFooter
        @change-type="changeType"
        :activeNum="activeNum"
        :type="type"
      />
    </div>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
export default {
  name: "App",
  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
  },
  data() {
    return {
      headerValue: "",
      todos: [
        {
          id: "123",
          text: "666",
          done: true,
        },
        {
          id: "12334",
          text: "hahahha",
          done: false,
        },
        {
          id: "12333",
          text: "zbc",
          done: false,
        },
      ],
      type: "all",
    };
  },
  computed: {
    activeNum() {
      return this.todos.filter((item) => !item.done).length;
    },
    showTodos() {
      // 要根据todo 底部的类别筛选出满足条件的数组，然后给 todolist 展示
      // all ===> 保留所有
      // active ===> 保留未完成的
      // completed ===> 保留已完成的
      const { type } = this;
      return this.todos.filter((item) =>
        type === "all" ? true : type === "active" ? !item.done : item.done
      );
    },
  },
  methods: {
    // addTodo 功能完全在父组件内执行
    // addTodo(todoText, qingkong) {
    //   this.todos.push({
    //     id: new Date().getTime().toString(),
    //     text: todoText,
    //     done: false,
    //   });
    //   // this.$refs.todoHeader.value = "";
    //   qingkong();
    // },
    //addTodo 只是父组件的修改data 方法，什么时候修改需要在子组件判断，推荐方法
    addTodo(todoText) {
      this.todos.push({
        id: new Date().getTime().toString(),
        text: todoText,
        done: false,
      });
    },
    delTodo(id) {
      this.todos = this.todos.filter((item) => item.id !== id);
    },
    changeTodoState(id) {
      const currentTodo = this.todos.find((item) => item.id === id);
      currentTodo.done = !currentTodo.done;
    },
    changeType(type) {
      this.type = type;
    },
  },
};
</script>

<style>
.todos {
  width: 100%;
}
.todos1 {
  width: 18%;
  margin: 0 auto;
}
</style>
