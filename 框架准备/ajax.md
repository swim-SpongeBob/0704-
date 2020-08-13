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

##### jquery ajax

##### axios ajax
