<template>
  <div class="wrap">
    <div id="digital"></div>
  </div>
</template>

<script>
// 引入 ECharts 主模块
import echarts from "echarts/lib/echarts";
// 引入柱状图
import "echarts/lib/chart/bar";
import "echarts/lib/chart/pie";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";
export default {
  name: "DigitalCityDemo",
  data() {
    return {
      positions: [
        {
          city: "杭州",
          positionNums: 855,
        },
        {
          city: "长春",
          positionNums: 875,
        },
        {
          city: "成都",
          positionNums: 941,
        },
        {
          city: "武汉",
          positionNums: 1144,
        },
        {
          city: "广州",
          positionNums: 1271,
        },
        {
          city: "深圳",
          positionNums: 1690,
        },
        {
          city: "北京",
          positionNums: 1792,
        },
        {
          city: "上海",
          positionNums: 3603,
        },
      ],
      salarys: [
        { value: 100, name: "4K-6K" },
        { value: 150, name: "6K-8K" },
        { value: 200, name: "8K-10K" },
        { value: 250, name: "10K-15K" },
        { value: 300, name: "15K-20K" },
        { value: 350, name: "20K-30K" },
      ],
    };
  },
  computed: {
    sum() {
      return this.salarys.reduce((res, ele) => res + ele.value, 0)
    },
    // xx() {
    //   return this.salarys.map((ele) => {
    //     return { x: ele.value, y: ele.name }
    //   })
    // }
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById("digital"));

    // 绘制图表
    myChart.setOption({
      tooltip: {
          extraCssText:'text-align:center;'
      },
      // 横坐标
      xAxis: [
        {
          show: false,
        },
      ],
      grid: [
        {
          width: "30%",
          height: "40%",
        },
      ],
      //
      yAxis: [
        {
          type: "category",
          // data: ['杭州', '长春', '成都', '武汉', '广州', '深圳','北京','上海']
          data: this.positions.map((ele) => ele.city),
          axisLine: {
            length: 5,
            lineStyle: {
              shadowOffsetX: 5,
            },
          },
        },
        {
          type: "category",
          // data: ['杭州', '长春', '成都', '武汉', '广州', '深圳','北京','上海']
          data: this.positions.map((ele) => ele.positionNums + "职位"),
          offset: -20,
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
      ],
      legend: {
        orient: "vertical",
        right: 250,
        bottom: 100,
        data: this.salarys.map((ele) => ele.name),
        // align:'right'
      },
      series: [
        {
          // 图片系列的名称 用于 tootip 的显示
          // 设置图标类型 bar 柱状图
          type: "bar",
          name: '测试 tootip',
          data: this.positions.map((ele) => ele.positionNums),
          itemStyle: {
            color: function(params) {
              // console.log(params)
              const colorList = [
                "#C33531",
                "#EFE42A",
                "#64BD3D",
                "#EE9201",
                "#29AAE3",
                "#00b3d4",
                "#007fff",
                "pink",
              ];
              return colorList[params.dataIndex];
            },
          },
        },
        // 饼图
        {
          type: "pie",
          name:'薪资待遇',
          radius: ["30%", "50%"],
          center: ["60%", "30%"],
          data: this.salarys.map((ele) => {
            // console.log(this.sum)
            const newEle = { ...ele }
            newEle.value = ((newEle.value / this.sum) * 100).toFixed(1) * 1
            return newEle
          }),
        },
      ],
    });
  },
};
</script>

<style>
#digital {
  height: 400px;
}
</style>
