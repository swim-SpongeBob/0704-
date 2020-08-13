#### ECMAScript 6

##### const 和 let

let const 和 var 的不同

- 不能重复声明
- 没有声明提升
- 存在块级作用域(作用域定义在 {} 内)，（只要是花括号就有作用域,花括号就为块级作用域）

const 是声明常量(不可修改的例如 Π)的，常量的名称都是全大写的
let 声明的变量是可以修改的。 非常量就用 let 声明

##### 变量的结构赋值

对象的结构赋值

```js
const obj = {
  username: "貂蝉",
  userage: 18,
  level: 10,
};
const { username, userage: age } = obj;
console.log(username, userage);
```

数组的结构赋值

```js
const arr = [1, 2, 3, 4, 5];
const [a, b, c] = arr;
console.log(a, b, c);
```

函数参数的结构赋值

```js
const obj = {
  username: "貂蝉",
  userage: 18,
  level: 10,
};
function showInfo(username, level) {
  console.log(`该英雄的名称是${username}`, `等级${level}`);
}
showInfo(username, level);

function showInfo(obj) {
  console.log(`该英雄的名称是${obj.username}`, `等级${obj.level}`);
}
showInfo(obj);

function showInfo({ username, level }) {
  //{username,level} 等于 const { username, userage: age } = obj
  console.log(`该英雄的名称是${username}`, `等级${level}`);
}
showInfo(obj);
// 以上三种方式结果一样
```

技巧： 实现变量的调换

```js
let x = 1;
let y = 2;
[x, y] = [y, x];
```

##### 字符串的扩展

模板字符串

```js
const username = "luck";
console.log(`my name is ${username}`);
```

新增的字符串方法

includes(),startsWith(),endsWith(),trim(),
trimStart(),trimEnd()，padStart(),padEnd()
matchAll()

- includes(): 包不包含括号里面的内容

```js
const str = "hello 2020";
console.log(str.includes("h"));
```

- startsWith(): 是否以括号内的内容开头

```js
const str = "hello 2020";
console.log(str.startsWith("h"));
```

- endsWith(): 是否以括号内的内容结尾

```js
const str = "hello 2020";
console.log(str.endsWith("h"));
```

- trim(): 去除字符串头部和尾部的空格并返回
- trimStart(): 消除字符串头部的空格
- trimEnd(): 消除字符串尾部的空格

- padStart(): 用于头部补全

```js
"x".padStart(5, "ab"); // 'ababx'
```

- padEnd(): 用于尾部补全

```js
"x".padEnd(5, "ab"); // 'xabab'
```

##### 函数的扩展

函数参数的默认值
普通方式参数非对象

```js
const fun = function (color = "黑色", bgColor = "红色") {
  console.log("颜色", color);
  console.log("背景色", bgcolor);
  //修改高亮
};
fun("蓝色");
```

参数为对象

```js
const fun = function ({ color = "黑色", bgColor = "蓝色" }) {
  console.log("颜色", color);
  console.log("背景色", bgcolor);
  //修改高亮
};
fun({ color: "粉色" });
// 不能什么都不传，最起码传递一个空对象
```

rest(剩余) 参数

```js
function add(a, ...rest) {
  console.log(rest); // 2,3,4,5,6
  // rest 是数组
  //...rest 代表除了a以外的其余数组
}
add(1, 2, 3, 4, 5, 6);
```

箭头函数
写法

```js
// function add(num1,num2){
//   return num1+num2
// }
//箭头左边属于参数，箭头右侧属于操作内容，要干什么
const add = (num1, num2) => num1 + num2;
//箭头函数定义只能变量式定义
//箭头左边是 函数的参数部分 使用()包裹参数，逗号拼接，当参数只有一个的时候省略()小括号。
//箭头右边是 函数的主题 使用{} ,返回值设置依然使用 return, 当函数不需要操作就设置返回值的话可以省略{}和return 直接写返回值即可
const res = add(10, 20);
console.log(res);
```

箭头函数和普通函数的区别

- 函数体内的 this 对象，就是定义时所在的对象，而不是使用时所在的对象。

- 不可以当作构造函数，也就是说，不可以使用 new 命令，否则会抛出一个错误。

- 不可以使用 arguments 对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

- 不可以使用 yield 命令，因此箭头函数不能用作 Generator 函数。

##### 数组的扩展

Array.from(): 将类数组转化为数组

```js
const fun1 = function () {
  console.log(arguments);
  console.log(Array.form(arguments));
};
fun1(1, 2, 3, 4, 5, 6);

const obj = {
  "0": 12312,
  "1": 98798,
  length: 2,
  //随便
};
console.log(obj);
console.log(Array.from(obj));
```

Array.of(): 将一组值，转换为数组

```js
const num1 = 11;
const num2 = 111;
const num3 = 111;
const num4 = 112;
console.log(Array.of(num1, num2, num3, num4)); // [11, 111, 111, 112]
```

数组新增方法 ： flat() , flatMap()

##### 扩展运算符 (和拷贝方面有关)

作用是对象的拷贝， 还有类数组转化数组

- 对象展开
- 数组展开

```js
const obj = {
  name: "庄周",
  age: "18",
};
const obj1 = { ...obj };
obj1.hobby = "浪";
console.log(obj, obj1); // obj: {name: "庄周", age: "18"}
// obj1:{name: "庄周", age: "18", hobby: "浪"}

const arr = [1, 2, 3];
const arr1 = [...arr];
arr1.push(4);
console.log(arr, arr1); //[1, 2, 3]  [1, 2, 3, 4]

//构造函数
function Hero(name, age) {
  this.name = name;
  this.age = age;
}
Hero.prototype.say = function () {
  console.log("我是王者荣耀的英雄" + this.name);
};
const a = new Hero("妲己", 18);
a.say(); //我是王者荣耀的英雄 妲己
const b = { ...a };
b.say(); //is not a function
```

##### 对象的扩展

对象的简洁表示法

```js
const username = "哈哈";
const userage = 20;
const obj = {
  username,
  //当对象的属性名和作为该属性的属性值的变量名相同时，就可以省略
  userage,
  //函数可以省略 function , 前提是为普通函数
  say() {},
};
console.log(obj); //{username: "哈哈", userage: 20, say: ƒ}
```

##### 对象的新增方法

Object.keys(): 返回一个数组，(数组由属性的键名组成)

```js
const obj1 = {
  xx: 100,
  xxx: 1,
  xxxx: 10000,
};
console.log(Object.keys(obj1)); // ["xx", "xxx", "xxxx"]
```

Object.values(): 返回一个数组，(数组有属性的键值组成)

```js
const obj1 = {
  xx: 100,
  xxx: 1,
  xxxx: 10000,
};
console.log(Object.values(obj1)); // [100, 1, 10000]
```

##### Symbol 第七种数据类型

前六种数据类型：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）

用 Symbol 定义的就代表着独一无二的值

```js
let s1 = Symbol("foo"); //引号里面的值是对 Symbol 的描述
let s2 = Symbol("foo");
const s3 = s1 + "哈哈哈";
console.log(s3); // 运行错误
console.log(s1, s2); // Symbol(foo) Symbol(foo)
console.log(s1 === s2); // flase
```

##### Set 数据结构 (属于数组里面特殊的一种)

类似于数组， 不弄存储重复的值

```js
//使用格式：
const ary = new Set(数组);

const ary = new Set([1, 2, 131, 312, 1, 2, 131]);
console.log(ary); //Set(4) {1, 2, 131, 312}
//不可随便访问

//属性
//size 获取 set 数组的长度
console.log(ary.size); // 4

//方法  add()  delete()  clear()  has()
//add() 向 set 数组内添加一个成员 ,返回Set数据本身
ary.add(10000);
console.log(ary); // Set(5) {1, 2, 131, 312, 10000}
//delete()  删除某个值，返回一个布尔值，表示删除是否成功。
//clear()   清除所有成员，没有返回值。
//has()   返回一个布尔值，查看该值是否为Set的成员。

//如何将set 数据转化为数组
console.log([...ary]); // (5) [1, 2, 131, 312, 10000]

//可以实现数组去重
const newArr = [1, 2, 131, 312, 1, 2, 131];
console.log([...new Set(newArr)]); // (4) [1, 2, 131, 312]
```

Set 结构的实例有四个遍历方法，可以用于遍历成员。

- Set.prototype.keys()：返回键名的遍历器
- Set.prototype.values()：返回键值的遍历器
- Set.prototype.entries()：返回键值对的遍历器
- Set.prototype.forEach()：使用回调函数遍历每个成员

还有一个额外的 WeakSet 数据结构，内部成员只能是对象类型

```js
const ary1 = new WeakSet([
  [1, 2],
  [1, 2],
]);
console.log(ary1); // WeakSet {Array(2), Array(2)}
```

##### class 类

- 类的 {} 内只能写方法，默认一般只写方法，而且方法之间不需要逗号。
- constructor 是 class 自带函数， 该函数被称作构造器和以前的构造函数类似。
- constructor 函数当 船舰实例化类的时候会自动触发。
- 如果不需要 constructor 可以省略。

```js
class Hero {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //除了 constructor 函数之外定义的函数都相当于原来的 prototype 内的方法
  // say() {
  //   console.log("我是王者荣耀的英雄" + this.name);
  // }
  say = () => {
    console.log("我是王者荣耀的英雄" + this.name);
  };
}
const a = new Hero("牛", 20);
const b = new Hero("小乔", 18);
console.log(a); //Hero {name: "牛", age: 20}
console.log(b); //Hero {name: "小乔", age: 18}
a.say();
```

##### class 的继承

```js
class Hero {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // say() {
  //   console.log("我是王者荣耀的英雄" + this.name);
  // }
  say = () => {
    console.log("我是王者荣耀的英雄" + this.name);
  };
}
class CarryHero extends Hero {
  constructor(name, age) {
    //super() 调用了才真正实现了继承
    super(name, age);
  }
}
const c = new CarryHero("赵云", 19);
console.log(c); // CarryHero {name: "赵云", age: 19, say: ƒ}
```

##### 使用 Webpack 打包编译我们的项目

你的 node 项目内使用 node 模块导入各种依赖，webpake 可以实现将模块的导入导出编译成浏览器认识的语法。也可以将所有的导入模块操作打包.

如何使用[参考网址](https://www.webpackjs.com/guides/)

- 项目内安装 webpack

  ```
    npm install webpack webpack-cli --save-dev
  ```

- 将 js 文件夹的名字改成 src， 保证项目的根目录有 src ，并且 src 下存在 index.js 。还有 index.js 是页面的主要用的 js

- 执行编译打包命令`npx webpack`，执行成功后会将 src 下 index.js 打包编译到项目下的 dist 文件夹下的 main.js

- 页面导入打包好的 main.js

- 上面是使用了 webpack 的默认配置进行的打包，可以在项目根目录下新建 `webpack.config.js` 文件，当作 webpack 编译的配置文件，参考网址 `https://www.webpackjs.com/guides/getting-started/#%E4%BD%BF%E7%94%A8%E4%B8%80%E4%B8%AA%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6` 复制基本的配置到该文件内，

- 一直敲编译命令很繁琐，可以使用 package.json 中的 scripts 字段配置 '快捷键', 使用 `npm run 名` 快捷执行

###### module

导入两种方式

- 默认导入

  ```js
  // 默认导入 导入的名称可以和导出不一致，import 后面的 常量 不带{}
  import x from "./about";
  ```

- 命名导入

  ```js
  //命名导入 名字必须和导出一致 可以使用as换名, import 后面的 常量 带{}
  import { a } from "./about";
  import { a as x, b } from "./about";
  import xxx, { a as x, b } from "./about";
  ```

- 全部导入

  ```js
  // 全部导入，不管是默认的还是命名的 obj 内存在的所有导出
  import * as obj from "./about";
  ```

导出两种方式

- 默认导出

  ```js
  // 默认导出a  可以随意导出（函数fur 对象{} 数组[]）只能使用一次
  export default a;
  export default c;
  ```

- 命名导出

  ```js
  // 命名导出
  // 可以使用多次
  // 默认导出和命名导出可以同时存在
  export { a, b };
  export const a = 100;
  export { a };
  export { b };
  ```

#### typescirpt
