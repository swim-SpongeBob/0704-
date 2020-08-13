// const $ = require("jquery");
// const x = require("./about");
//自定义模块都是 js 文件，导入的时候可以省略 js 后缀名
// console.log($, x);

//在js文件内导入了 js
// 该语法浏览器不支持

// $(".btn").click(function () {
//   $(".box").hide();
// });

//node 模块语法
// 前端模块分类  核心模块 第三方模块 自定义模块
// 模块语法分为 模块导入  require('包名') 前两中模块直接写包名 自定义模块需要写路径
// 模块语法分为 模块导出  module.exports = 值

//es6模块写法

// 模块路径 第三方和核心模块直接写包名
import $ from "jquery";

// 默认导入 导入的名称可以和导出不一致
import x from "./about";

// 命名导入 名字必须和导出一致 可以使用as换名
// import { a } from "./about";
// import { a as x, b } from "./about";
// import xxx, { a as x, b } from "./about";

// 全部导入，不管是默认的还是命名的 obj 内存在的所有导出
import * as obj from "./about";

// console.log($, x, b, xxx);
// console.log(obj);
import { a } from "./about";
console.log(a);
$(".btn").click(function () {
  $(".box").hide();
});
