<template>
  <div>
    <h1>vue 综合表格功能制作案例</h1>
    <BookSearch
      @open="open"
      :searchInfo="searchInfo"
      @change-search-info="changeSearchInfo"
    />
    <BookTable v-if="isSuccess" :books="showBooks" />
    <img
      v-else
      src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2073439784,2147418910&fm=26&gp=0.jpg"
      alt=""
    />
    <Dialog
      @close="close"
      :showDialog="showDialog"
      :currentBook="currentBook"
    />
  </div>
</template>

<script>
// $attrs  $listeners
import BookSearch from "./components/BookSearch";
import BookTable from "./components/BookTable";
import Dialog from "./components/Dialog";
import axios from "axios";
import { $http } from "./axios.js";

export default {
  name: "App",
  components: {
    BookTable,
    BookSearch,
    Dialog,
  },
  data() {
    return {
      books: [],
      // 当你将下列数据的每一个属性，都分别对应一个点击事件做修改
      // 那么修改的方法没有必要写成三个分别修改，可以写成一个  xx.(属性名，属性值){this[名]=值}
      searchInfo: {
        title: "",
        importance: 0,
        country: "",
      },
      isSuccess: false,
      showDialog: false,
      editBookId: "",
    };
  },
  computed: {
    // 筛选之后的书籍
    showBooks() {
      // 因为该计算属性是在页面初始的时候就执行，所以在父组件的 computed 内无法获取子组件实例
      // 也就是不可能使用 $refs 和 $children
      // console.log(this.$children);\

      const { title, importance, country } = this.searchInfo;
      // const re = new RegExp(title, "i");
      // return this.books.filter(
      //   (book) =>
      //     (title ? re.test(book.title) : true) &&
      //     (importance ? book.importance === importance : true) &&
      //     (country ? book.country === country : true)
      // );
      return this.books.filter(
        (book) =>
          // i 是区分大小写用的   g 为全局
          (title ? book.title.match(new RegExp(title, "i")) : true) &&
          (importance ? book.importance === importance : true) &&
          (country ? book.country === country : true)
      );
      // return this.books.filter(
      //   (book) =>
      //     (title ? book.title.included(title) : true) &&
      //     (importance ? book.importance === importance : true) &&
      //     (country ? book.country === country : true)
      // );
    },
    currentBook(id) {
      // console.log(this.books.find((item) => item.id === id.editBookId));

      // 该计算属性是点击编辑的时候展示正确的书籍内容
      // 设置了一个编辑的书籍 id 点击编辑的时候修改 ，然后用该 id 和 books 做计算，计算出来需要编辑的书籍并展示
      // 但是当没有点击编辑的时候，编辑的书籍 id 不存在 ，那么计算出来的书籍就是 undefined 传递给 dialog 会报错(因为 Dialog 写的是 v-show)
      // 所以当编辑的书籍 id 不存在的时候，该计算属性返回一个默认对象
      return this.editBookId
        ? this.books.find((item) => item.id === this.editBookId)
        : {
            // id: "0",
            title: "",
            author: "",
            importance: 0,
            status: "",
            country: "",
            comment: "",
          };
    },
  },
  created() {
    // $http("get", "url", "data");

    $http({ method: "get" }).then((res) => {
      setTimeout(() => {
        this.isSuccess = true;
        this.books = res.data;
      }, 1000);
    });
    // $http("get", "").then((res) => {
    //   setTimeout(() => {
    //     this.isSuccess = true;
    //     this.books = res.data;
    //   }, 1000);
    // });
    // axios.get("http://localhost:3000/books").then((res) => {
    //   setTimeout(() => {
    //     this.isSuccess = true;
    //     this.books = res.data;
    //   }, 1000);
    // });
  },

  // get delete post patch(更新修改) put(替换是修改)
  methods: {
    delBook(id) {
      // 因为数据是后台的数据，想要实现删除功能
      // 首先需要删除后台数据
      // axios.delete(`http://localhost:3000/books/${id}`).then(() => {
      //   // 等待后台数据删除完毕之后再去删除本地的data
      //   this.books = this.books.filter((item) => item.id !== id);
      //   // console.log("删除成功");
      // });

      $http({ method: "delete", url: id }).then(() => {
        // 等待后台数据删除完毕之后再去删除本地的data
        this.books = this.books.filter((item) => item.id !== id);
        // console.log("删除成功");
      });
      // $http("delete", id).then(() => {
      //   // 等待后台数据删除完毕之后再去删除本地的data
      //   this.books = this.books.filter((item) => item.id !== id);
      //   // console.log("删除成功");
      // });
      //   this.books = this.books.filter((item) => item.id !== id);
    },
    // searchEvent() {
    //   console.log(this.searchInfo);
    // },
    // 当你将下列数据的每一个属性，都分别对应一个点击事件做修改
    // 那么修改的方法没有必要写成三个分别修改，可以写成一个  xx.(属性名，属性值){this[名]=值}
    changeSearchInfo(title, importance, country) {
      this.searchInfo.title = title;
      this.searchInfo.importance = importance;
      this.searchInfo.country = country;
    },
    open() {
      this.showDialog = true;
    },
    close() {
      this.showDialog = false;
    },
    // toggle(val){
    //   this.showDialog= val
    // }
    changeEditBookId(id) {
      this.editBookId = id;
    },
    editBook(newBook) {
      // 当时使用数组下标对数组直接进行修改是不会触发视图更新

      axios
        .patch(`http://localhost:3000/books/${newBook.id}`, newBook)
        .then(() => {
          // console.log(res);
          this.books = this.books.map((item) =>
            item.id === newBook.id ? newBook : item
          );
          this.editBookId = "";
        });
    },
    addBook(newBook) {
      // 删除 newBook 对象下的 id 属性
      // delete newBook.id;

      $http({ method: "post", data: newBook }).then((res) => {
        // console.log(res);
        this.books.push(res.data);
      });
      // $http("post", "", newBook).then((res) => {
      //   // console.log(res);
      //   this.books.push(res.data);
      // });

      // axios.post(`http://localhost:3000/books`, newBook).then((res) => {
      //   console.log(res);
      //   // this.books = this.books.map((item) =>
      //   //   item.id === newBook.id ? newBook : item
      //   // );
      //   this.books.push(res.data);
      // });
    },
  },
};
</script>

<style></style>
