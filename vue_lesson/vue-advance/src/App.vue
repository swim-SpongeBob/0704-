<template>
  <div>
    <h1>vue 的进阶阶段</h1>
    <hr />
    <MixinDemo />
    <MixinDemo1 />
    <hr />
    <CustomDirective />
    <hr />
    <FilterDemo />
    <hr />
    <UseDemo />
    <hr />
    <Head :level="1">hello world</Head>
    <hr />
    <Title :level="2">hello world</Title>
    <br />
    <Title1 :level="1">
      hello world11111
    </Title1>
    <hr />
    <ScopedSlotDemo>
      <template v-slot:default="{ obj }">
        <!-- 父组件内使用 v-slot:default='slotProps' -->
        <!-- slotProps 接收子组件传递的插槽属性  -->
        <span>{{ obj.name }}</span>
      </template>
    </ScopedSlotDemo>
    <!-- <ScopedSlotDemo>
      <template v-slot:default="slotProps">
        <span>{{ slotProps.obj.name }}</span>
      </template>
    </ScopedSlotDemo> -->
    <!-- 独占默认插槽简写 -->
    <!-- <ScopedSlotDemo v-slot:default="slotProps">
        <span>{{slotProps.obj.name}}</span>
    </ScopedSlotDemo> -->

    <hr />
    <br />
    <h3>render函数方式创建自定义列表内容</h3>
    <List :arr="['香蕉', '苹果', '大鸭梨']" :render="render" />
    <!-- render(h,item){
      return <h1>{item}</h1>
    } -->
    <hr />
    <h3>作用于插槽方式创建自定义列表内容</h3>
    <List2 :data="['香蕉', '苹果', '大鸭梨']">
      <template v-slot="{ item }">
        <span>{{ item }}</span>
      </template>
    </List2>
  </div>
</template>

<script>
import MixinDemo from "./components/MixinDemo";
import MixinDemo1 from "./components/MixinDemo1";
import CustomDirective from "./components/CustomDirective";
import FilterDemo from "./components/FilterDemo";
import Head from "./components/Head";
// import Title from './components/Title'
// import Title from './components/title'
import ScopedSlotDemo from "./components/ScopedSlotDemo";
import Title1 from "./components/titleComponents1";
import List from "./components/List";
import List2 from "./components/List2";
export default {
  name: "App",
  components: {
    MixinDemo,
    MixinDemo1,
    CustomDirective,
    FilterDemo,
    Head,
    // Title
    ScopedSlotDemo,
    Title1,
    List,
    List2,
  },
  methods: {
    render(h, item) {
      // 下面是 jsx 语法默认不支持 因为不是函数组件内部的 render 函数,所以需要函数组件内传递过来 h
      return <span>{item}</span>;
    },
  },
};
</script>

<style></style>
