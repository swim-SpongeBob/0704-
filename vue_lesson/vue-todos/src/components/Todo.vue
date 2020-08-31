<template>
  <div class="todo-item">
    <img @click="$emit('change-todo-state', todo.id)" :src="src" alt="" />
    <!-- <input type="checkbox" /> -->
    <span :class="{ done: todo.done }">{{ todo.text }}</span>
    <button @click="$emit('del-todo', todo.id)">删除</button>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: ["todo"],
  data() {
    return {
      src: "../assets/1.svg",
    };
  },
};
</script>

<style>
.todo-item span {
  cursor: pointer;
  user-select: none;
}

.done {
  color: #ccc;
  text-decoration: line-through;
}
</style>
