<template>
  <div class="footer">
    <span class="item"
      >{{ activeNum }} {{ activeNum !== 1 ? "items" : "item" }} left</span
    >

    <span
      class="all"
      @click="$emit('change-type', 'all')"
      :class="type === 'all' ? ' todoall' : ''"
      ><a href="#">all</a></span
    >
    <span
      class="active"
      @click="$emit('change-type', 'active')"
      :class="type === 'active' ? 'todoall' : ''"
      ><a href="#">active</a>
    </span>
    <span
      class="completed"
      @click="$emit('change-type', 'completed')"
      :class="type === 'completed' ? 'todoall' : ''"
      ><a href="#">completed</a>
    </span>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  props: ["activeNum", "type", "change-type"],
};
</script>

<style>
.footer {
  width: 500px;
  height: 90px;
}
.item {
  float: left;
}
.all {
  display: block;
  width: 30px;
  height: 25px;
  float: left;
  margin-left: 30px;
  text-align: center;
}
.active {
  display: block;
  width: 60px;
  height: 25px;
  float: left;
  margin-left: 10px;
  text-align: center;
}
.completed {
  display: block;
  width: 90px;
  height: 25px;
  float: left;
  text-align: center;
  margin-left: 10px;
}
.todoall {
  border: 1px solid red;
  border-radius: 5px;
}
.footer span a {
  color: #000;
  text-decoration: none;
}
</style>
