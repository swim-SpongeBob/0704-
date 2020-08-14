#### ajax

AJAX = Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）。AJAX 最大的优点是在不重新加载整个页面的情况下，可以与服务器交换数据并更新部分网页内容。(xml html 的前身)

早已经进阶了，进阶成 Asynchronous JavaScript and JSON

##### JSON 比 XML 好处在哪

- 数据小，传输快
- 解析方便，json 就是一个对象
- 应用更广 等一系列

##### 原生 ajax

- 创建 XMLHttpRequest 对象
- 使用对象创建请求
- 使用 send 发出请求
- 使用 onreadystatechange 函数监听请求的过程，获取响应

```js
// get 请求

const xhr = new XMLHttpRequest();

// 创建请求使用open方法 open('请求的类型','地址','是否异步')
// 请求的类型： GET POST PATCH DELETE ....(后台规定的)
// 地址：后台规定的
// 是否异步：必须是异步 true
xhr.open("GET", "http://jsonplaceholder.typicode.com/posts", true);

xhr.send();

// http://jsonplaceholder.typicode.com/posts 这个地址其实是后台的接口，从这个接口拿数据
// 监听整个请求过程
// xhr.readyState 请求状态 0-4  4：请求成功相应就绪
// xhr.status  请求状态码 200 ok
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // 可以获取后台数据
    console.log(xhr.responseText);
    // 获取到的数据类似数组字符串 ，也就是说获取的是json串----> json 串
    // json 串的格式：属性名和属性 值必须使用双引号，数字和布尔值不需要，最后一项没有逗号
    // 可以使用 JSON.parse(json串)将json串 转换 为数组类型
  }
};

// post 请求

// ecf878d1-6052-476a-8262-824760c7872b 密码
const xhr = new XMLHttpRequest();
xhr.open("POST", "https://cnodejs.org/api/v1/accesstoken", true);
// 发送请求的时候需要传递给后台数据
// 但是原生 ajax 不能接收对象为参数，只能接收 json 串，而且得设置请求可以传递json
// 需要使用 xhr.setRequestHeader() 设置请求头
// 添加 json 为可传递数据，使用 JSON.stringify 将对象和转化为json串
xhr.setRequestHeader("Content-type", "application/json");
xhr.send(
  JSON.stringify({ accesstoken: "ecf878d1-6052-476a-8262-824760c7872b" })
);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // xhr.status === 200 可以删除
    // 可以获取后台数据
    console.log(JSON.parse(xhr.responseText));
    // 获取到的数据类似数组字符串 ，也就是说获取的是json串----> json 串
    // json 串的格式：属性名和属性 值必须使用双引号，数字和布尔值不需要，最后一项没有逗号
    // 可以使用 JSON.parse(json串)将json串 转换 为数组类型
  }
};
```

假设执行命令出错 除了可以使用 git bush ，还可以使用 powershell，如何打开 powershell 窗口，在文件夹内按住 shift 键 右击

##### jquery ajax

```js
// get 请求
// 格式： $.get('地址'，参数，回调函数，返回内容的格式)
// 地址：后台接口地址
// 参数：请求的参数，不需要可省略
// 回调函数：成功之后的回调函数默认接受一个参数就是返回的结果
// 返回内容的格式：默认带 json 不需要设置
$.get("http://jsonplaceholder.typicode.com/posts", function (res) {
  console.log(res);
});

// post 请求
// 格式： $.post('地址'，参数，回调函数，返回内容的格式)
// // 参数的意思和get一致

$.post(
  "https://cnodejs.org/api/v1/accesstoken",
  { accesstoken: "ecf878d1-6052-476a-8262-824760c7872b" },
  function (res) {
    console.log(res);
  }
);

// 常用的请求方法
// $.ajax()请求
// 用 $.ajax() 方法最多
// $.ajax({配置对象})

$.ajax({
  // 请求类型
  type: "POST",
  // 请求地址
  url: "https://cnodejs.org/api/v1/accesstoken",
  // 请求参数
  data: { accesstoken: "ecf878d1-6052-476a-8262-824760c7872b" },
  // 请求成功的回调
  success: function (res) {
    console.log(res);
  },
  // 请求失败的回调
  error: function (err) {
    console.log(err);
  },
  // 请求结束的回调
  complete: function () {},
  // 发给后台的内容类型 默认支持 对象类型
  // contentType: ''

  // 请求是否同域  false 代表同域请求  true 代表跨域请求
  // 默认为 false
  // 跨越是什么：请求的地址
  // 一般来说后台独立解决了跨域请求的问题，不需要前端进行配置，也有前后端一起解决跨域问题，后台需要前端做一些简单的配置
  // crissDinaub: 布尔值

  // 请求头的设置，可能需要配合后台做一些设置
  // headers
});
```

##### axios ajax

axios 是专门的 ajax 请求插件，它里面的异步解决方案使用的是 promise

```js
// axios 就是 promies 封装了异步操作
// axios.get('地址').then(res=>{}).catch(err=>{})
// then 是成功函数 ，res 是成功的返回值，axios 会将后台的数据存储到一个对象的data属性内
// catch 是失败函数， err 是失败的信息

// get
axios
  .get("http://localhost:3008/posts", {
    params: {
      _limit: 20,
    },
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

// post
// https://cnodejs.org/api/v1/accesstoken
axios
  .post("https://cnodejs.org/api/v1/accesstoken", {
    accesstoken: "ecf878d1-6052-476a-8262-824760c7872b",
  })
  .then(function (response) {
    console.log(response);
  });

// axios.delete
// axios.put
// axios.patch
```

##### 使用 json-server 模拟后台数据库

- 全局安装 json-server `npm i -g json-server` 可能有点慢
- 在需要功能的地方新建 xxx.json 文件，该文件内写法如下
  ```json
  {
    "posts": [
      { "id": 121, "username": "小王" },
      { "id": 121, "username": "小王" }
    ]
  }
  ```
  这样的 json 文件生成的数据代表 users 列表数据
- 在该 json 文件所在的地方打开命令行工具，启动数据库服务，`json-server --watch xxx.json -p 3008` 命令执行完毕之后，数据库就启动了，不要关闭该服务。安装上述 json 文件，启动的服务可以是用 'http://localhost:3008/posts' 接口就能访问用户列表了
- 更详细的接口文档说明参考[json-server](https://github.com/typicode/json-server)

- ctrl + c 关闭数据库服务

模拟数据库完成，如何使用如下：

```js
// 请求的地址
// http://localhost:3008/posts (自己创建的数据库网站)
// 这个网站里是有各种各样的查询的
// 地址栏的问号部分就是查询部分，还可以使用data进行查询，举例如下
// 以下两种执行结果是一样的

$.ajax({
  url: "http://localhost:3008/posts?_limit=10&_page=2",
  success(res) {
    console.log(res);
  },
});

$.ajax({
  url: "http://localhost:3008/posts",
  data: { _limit: 10, _page: 2 },
  success(res) {
    console.log(res);
  },
});
```

##### 将自己的项目拷在本地服务器上

- 全局安装 serve `npm i -g serve`
- 在你的项目内打开命令行工具，执行`serve .`
- 执行完毕之后，你的当前项目内的所有文件已经被拷在了 `http://localhost:5000`服务器上，默认打开 index.html

##### 项目服务器

项目开发的阶段，前端页面跑在本地(局域网)服务器上，后台数据库服务器只能公司内部访问。
