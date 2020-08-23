<template>
  <div>
    <div>
      <h2>input:text | password 和 textarea</h2>
      <label for="">用户名：</label>
      <!-- @change 对于 input:text | password 老说属于失去焦点事件 -->
      <!-- <input type="text" :value="username" @change="handleChange" /><br /><br /> -->
      <!-- @input  对于 input:text | password 来说是域的内容发生改变就会触发 -->
      <!-- <input type="text" :value="username" @input="handleChange" /><br /><br /> -->
      <!-- 使用 v-model 简化表单的双向绑定 -->
      <input type="text" v-model="username" /><br /><br />
      <label for="">密码：</label>
      <!-- <input type="password" :password="password" /> -->
      <input type="password" v-model="password" /><br />
      <textarea v-model="text"></textarea>
      <br />
      <!-- <button @click="username = '赵四'">修改用户名</button> -->
      <button @click="handleClick">获取用户名</button>
    </div>
    <div>
      <h2>复选框</h2>
      <!-- 单一复选框 -->
      <!-- <input type="checkbox" :checked="singleCheck" /> -->
      <input type="checkbox" v-model="singleCheck" /><br />
      <!-- 一组复选框 -->
      <h3>你喜欢的王者英雄是</h3>
      <!-- 想要一个选中的结果数组 -->
      虞姬<input type="checkbox" v-model="likeHeros" value="虞姬" /><br />
      孙尚香<input type="checkbox" v-model="likeHeros" value="孙尚香" /><br />
      小乔<input type="checkbox" v-model="likeHeros" value="小乔" /><br />
      吕布<input type="checkbox" v-model="likeHeros" value="吕布" /><br />
      <h3>购物车商品列表</h3>
      <!-- 已经有了整套数组，想要修改数组内的某个数据 -->
      <div v-for="goods in goodsArr" :key="goods.id">
        <input type="checkbox" v-model="goods.isChecked" />
        <span>{{ goods.name }}</span>
      </div>
      <button @click="handleClick1">获取选中的状态</button>
    </div>
    <div>
      <h2>单选按钮 radio 和 选择框 select</h2>
      <!-- radio 选择性别 -->
      <div>
        <span>男</span><input type="radio" v-model="sex" value="男" /><br />
        <span>女</span><input type="radio" v-model="sex" value="女" /><br />
      </div>
      <!-- select 选择框  -->
      <select v-model="word">
        <option value="a">a</option>
        <option value="b">b</option>
        <option value="c">c</option>
        <option value="d">d</option> </select
      ><br />
      <button @click="handleClick2">获取性别</button>
    </div>
    <div>
      <h2>表单的修饰符 给 v-model 指令使用</h2>
      <!-- .lazy  v-model.lazy= 'xxx' 意思是懒加载，默认v-model 在 input:text | password 和 textarea 使用的时候是 域的内容变化就监听去修改data， 使用的是 input 事件，而加上了 lazy 之后使用的就是 change 事件，是失去焦点的修改 data -->
      <!-- .number  意思是直接将相关的 data 转化成数字，默认输入的内容是字符串，如果你想要的结果是数字就可以使用 .number 修饰符 -->
      <!-- .trim 去点左右的空白 -->
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      username: "张三",
      password: "",
      text: "",
      singleCheck: true,
      likeHeros: ["吕布"],
      goodsArr: [
        {
          id: 11,
          name: "小米",
          price: 1000,
          isChecked: false,
        },
        {
          id: 112,
          name: "小米1",
          price: 1000,
          isChecked: false,
        },
        {
          id: 113,
          name: "小米2",
          price: 1000,
          isChecked: true,
        },
        {
          id: 114,
          name: "小米3",
          price: 1000,
          isChecked: false,
        },
      ],
      sex: "男",
      word: "b",
    };
  },
  // methods: {
  //   handleChange() {
  //     console.log("1111");
  //   },
  // },
  methods: {
    // handleChange() {
    //   // 将 username 设置成输入的值
    //   // 如何获取输入的内容
    //   // 先获取真是的 dom 节点 event.target (就是指获取的是 input 标签)
    //   // event.target.value 指获取的是 input 文本框中输入的内容
    //   this.username = event.target.value;

    //   // console.log(this);  //这的this 指的是整个 vue 组件
    //   // console.log(event.target.value);
    // },
    handleClick() {
      console.log(this.username, this.password, this.text);
    },
    handleClick1() {
      console.log("单选状态----", this.singleCheck);
      console.log("复选结果----", this.likeHeros);
      console.log("复选结果----", this.goodsArr);
    },
    handleClick2() {
      console.log(this.sex);
      console.log(this.word);
    },
  },
};
</script>

<style></style>
