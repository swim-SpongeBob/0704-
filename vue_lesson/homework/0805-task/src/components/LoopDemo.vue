<template>
  <div>
    <div class="wrap">
      <div class="container" :style="`margin-left : ${ind * -820}px;`">
        <img
          src="https://ossweb-img.qq.com/upload/adw/image/20200814/18012dfa6cf22ae1cf02d524310f9b80.jpeg"
          alt=""
        />
        <img
          src="https://ossweb-img.qq.com/upload/adw/image/20200811/9e4d56ba9e78f61cd2d59d5c23c6b919.jpeg"
          alt=""
        />
        <img
          src="https://ossweb-img.qq.com/upload/adw/image/20200816/ea7cf9538b4a51ef586927e796d79802.jpeg"
          alt=""
        />
        <img
          src="https://ossweb-img.qq.com/upload/adw/image/20200807/60a6ba105f313ca9b4f66d6705b80d54.jpeg"
          alt=""
        />
        <img
          src="https://ossweb-img.qq.com/upload/adw/image/20200810/602f7c6dba91e95846dcdad17d2c799a.jpeg"
          alt=""
        />
      </div>
      <div class="list">
        <!-- <span @mouseenter="change(0)" :class="ind === 0 ? 'active' : ''"
        >阿卡丽的黑金商</span
      >
      <span @mouseenter="change(1)" :class="ind === 1 ? 'active' : ''"
        >绽灵花开之礼</span
      >
      <span @mouseenter="change(2)" :class="ind === 2 ? 'active' : ''"
        >8月16日LPL赛程</span
      >
      <span @mouseenter="change(3)" :class="ind === 3 ? 'active' : ''"
        >灵魂莲华 小小英雄</span
      >
      <span @mouseenter="change(4)" :class="ind === 4 ? 'active' : ''"
        >盛夏季.盟牙有礼</span
      > -->

        <!-- 事件修饰符 .native  的作用是直接给组件的根元素 dom 节点绑定事件 -->
        <!-- 其实一般来说直接写在组件标签的内部都当作 props -->
        <!-- 组件的标签属性 -->
        <!-- 1.props -->
        <!-- 2.自定义事件 -->
        <!-- <Span
        @mouseenter.native="change(0)"
        :class="ind === 0 ? 'active' : ''"
        text="阿卡丽的黑金商"
      />
      <Span
        @mouseenter.native="change(1)"
        :class="ind === 1 ? 'active' : ''"
        text="绽灵花开之礼"
      />
      <Span
        @mouseenter.native="change(2)"
        :class="ind === 2 ? 'active' : ''"
        text="8月16日LPL赛程"
      />
      <Span
        @mouseenter.native="change(3)"
        :class="ind === 3 ? 'active' : ''"
        text="灵魂莲华 小小英雄"
      />
      <Span
        @mouseenter.native="change(4)"
        :class="ind === 4 ? 'active' : ''"
        text="盛夏季.盟牙有礼"
      /> -->

        <!-- 使用 v-on 传递函数，该做法称为自定义事件，事件名随便定义 -->

        <Span
          v-for="(item, index) in 5"
          :key="item"
          :isActive="ind === index"
          @change="change(index)"
          :text="textList[index]"
        />
        <!-- 子组件想要修改父组件的 data -->
        <!-- data 只能在自己的组件内使用 this.dataName 修改，想要让其他人修改自己的组件的 data， 
      那么需要先在自己组件内定义好修改的方案，然后将该方法传递给其他组件去执行 -->
      </div>
    </div>
    <!-- 列表渲染  将数组类型的数组循环渲染到页面上 -->
    <!-- 使用 v-for 指令，必须加上 key 属性，该属性的属性值在当前的 for 内必须唯一 -->
    <!--  -->
    <ul>
      <li v-for="(item, index) in arr" :key="item">
        {{ item }} --- {{ index }}
      </li>
    </ul>
    <ul>
      <li v-for="item in 5" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import Span from "./Span";
export default {
  name: "LoopDemo",
  components: {
    Span,
  },
  data: function() {
    return {
      // 一个 data 可以控制多个地方
      // 为什么设置一个 data 不设置两个
      // 因为只要定义了一个 data 那么 vue 就由针对这个 data 做一套虚拟 dom 流程
      ind: 0,
      arr: [1, 2, 3, 4, 5],
      textList: [
        "阿卡丽的黑金商",
        "绽灵花开之礼",
        "8月16日LPL赛程",
        "灵魂莲华 小小英雄",
        "盛夏季.盟牙有礼",
      ],
    };
  },
  methods: {
    change(index) {
      this.ind = index;
    },
  },
};
</script>

<style>
.wrap {
  width: 820px;
  height: 390px;
  overflow: hidden;
}
.container {
  width: calc(820px * 5);
  transition: margin-left 0.5s;
}
.container img {
  display: block;
  float: left;
}
/* .list span {
  display: block;
  width: calc(820px / 5);
  float: left;
  height: 40px;
  text-align: center;
  outline: none;
  border: 0;
  background-color: #e3e2e2;
  line-height: 40px;
  font-size: 14px;
}
.list .active {
  color: #ab8e66;
  background-color: #f7f6f6;
  border-bottom: 2px #cea861 solid;
} */
</style>
