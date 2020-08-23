<template>
  <div>
    <h2>图片展示</h2>
    <!-- 数据没有来的时候展示等待动画 -->
    <!-- 数据来了循环显示数据 -->

    <!--  -->
    <!-- <div :style="`display : ${isHas ? 'none' : 'black'}`">
      <img src="https://www.17qq.com/img_biaoqing/12848853.jpeg" alt="" />
    </div>
    <div :style="`display : ${isHas ? 'black' : 'none'}`">显示很多图片</div> -->

    <!-- 需要借助我们的 vue 的条件渲染(出现和消失) -->
    <!-- 样式 ： v-show -->
    <!-- 结构 ： v-if  v-else  v-else-if  -->
    <!-- 消失出现次数比较频繁使用 show -->
    <!-- 消失出现次数比较少用 if -->

    <!-- <div v-show="!isHas">
      <img src="https://www.17qq.com/img_biaoqing/12848853.jpeg" alt="" />
    </div>
    <div v-show="isHas">显示很多图片</div> -->

    <!-- <div v-if="!isHas">
      <img src="https://www.17qq.com/img_biaoqing/12848853.jpeg" alt="" />
    </div>
    <div v-else>显示很多图片</div> -->

    <button @click="getImages">模拟请求后台的图片数据</button>
    <div v-if="!imgList.length">
      <img src="https://lol.qq.com/download.shtml?ADTAG=lolweb.v3" alt="" />
    </div>
    <div v-else>
      <div v-for="item in imgList" :key="item.id">
        <!-- 如果图片的 src 地址写成了 js 相关的值 ，那么图片不会解析到浏览器上 -->
        <!-- 解决方案 -->
        <!-- 1.换成网络地址  推荐 -->
        <!-- 2.将 js 生成的图片地址使用 require(js地址) ，只能在下面的 script 标签中使用 -->

        <!-- 以后我们自己做项目的话，会用到一些图片，这些图片写成本地的话不太好，怎么办呢 -->
        <!-- 方法：将我们的图片上传到github,腾讯云，或者其它免费网站 -->
        <img :src="item.src" alt="" />
        <span>{{ item.info }}</span>
      </div>
    </div>

    <!-- 需要注意 if else elseif 使用的时候必须紧跟着中间不允许出现其他元素，而且该指令对应的元素都是兄弟元素 -->
    <div>
      <span v-if="num === 1">1</span>
      <span v-else-if="num === 2">2</span>
      <span v-else-if="num === 3">3</span>
      <span v-else-if="num === 4">4</span>
      <span v-else>5</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Showimg",
  data: function() {
    return {
      // isHas: false,
      imgList: [],
      num: 3,
    };
  },
  methods: {
    getImages() {
      // 假装发请求获取数据然后更新 data imgList
      setTimeout(() => {
        this.imgList = [
          {
            id: "123",
            src:
              "https://shp.qpic.cn/cms_pic/2520240876/2f16159bb2551fec8f352ba8c1ff2931/258",
            info: "dasd",
          },
          {
            id: "12",
            src:
              "https://shp.qpic.cn/cms_pic/2560526365/cb848f9e74fcc25dbee94864c488fb2e/258",
            info: "dasd",
          },
          {
            id: "13",
            src:
              "https://shp.qpic.cn/cms_pic/2640842277/04cde5d68bb4dd5972aa9219089dcbc7/258",
            info: "dasd",
          },
        ];
      }, 1000);
    },
  },
};
</script>

<style></style>
