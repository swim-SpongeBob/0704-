<template>
  <div>
    <div v-if="fruits.length">
      <div id="main"></div>
      <!-- 点击更新数据获取洗的 fruits 数组，展示对应的柱状图 -->
      <button @click="update">更新数据</button>
    </div>
    <div v-else class="loading">请稍等，精彩稍后继续</div>
  </div>
</template>

<script>
// 引入 ECharts 主模块
import echarts from "echarts/lib/echarts";
// 引入柱状图
import "echarts/lib/chart/bar";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";

export default {
  name: "EchartsDemo",
  data() {
    return {
      fruits: [],
    };
  },
  created() {
    setTimeout(() => {
      this.fruits = [
        {
          name: "香蕉",
          num: 300,
        },
        {
          name: "苹果",
          num: 100,
        },
        {
          name: "葡萄",
          num: 120,
        },
        {
          name: "草莓",
          num: 700,
        },
        {
          name: "西柚",
          num: 400,
        },
      ];
    }, 1000);
  },
  updated() {
    // 基于准备好的dom，初始化echarts实例
    if(!this.myChart){
        var myChart = echarts.init(document.getElementById("main")); 
    }
   
    // 绘制图表
    myChart.setOption({
      title: {
        text: "ECharts 入门示例",
      },
      tooltip: {},
      // 横坐标
      xAxis: {
        // [{name:a,num:1},{name:b,num:2},{name:c,num:3}]   ===>   [a,b,c]
        data: this.fruits.map((item) => item.name),
      },
      //
      yAxis: {},
      //
      series: [
        {
          // 图片系列的名称 用于 tootip 的显示
          name: "销量",
          // 设置图标类型 bar 柱状图
          type: "bar",
          // 图表的数据 一般来说式 y 轴展示数值
          data: this.fruits.map((item) => item.num),
        },
      ],
    });
  },
  methods: {
    update() {
      this.fruits = [
        {
          name: "西瓜",
          num: 500,
        },
        {
          name: "橙子",
          num: 600,
        },
        {
          name: "哈密瓜",
          num: 90,
        },
        {
          name: "火龙果",
          num: 190,
        },
        {
          name: "提子",
          num: 500,
        },
      ];
    },
  },
};
</script>

<style scoped>
#main {
  width: 600px;
  height: 700px;
}
</style>
