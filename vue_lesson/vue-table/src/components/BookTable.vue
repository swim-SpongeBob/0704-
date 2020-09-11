<template>
  <table>
    <thead>
      <tr>
        <th style="width:'100px'">序号</th>
        <!-- <th>时间</th> -->
        <th>标题</th>
        <th>作者</th>
        <th>重要性</th>
        <th>阅读数</th>
        <th>状态</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody v-if="books.length">
      <BookItem
        v-for="(book, index) in books"
        :key="book.id"
        :book="book"
        :index="index"
      />
    </tbody>
    <div v-else>暂无匹配结果</div>
  </table>
</template>

<script>
import BookItem from "./BookItem";

// 在子组件内内使用 $parent 可以获取父组件实例
// 在父组件内使用 $children 可以获取所有子组件实例组成的数组
export default {
  name: "BookTable",
  components: {
    BookItem,
  },
  props: ["books"],
};
</script>

<style>
table {
  border-collapse: collapse;
}
td,
th {
  border: 1px solid #999;
  line-height: 40px;
}
</style>
