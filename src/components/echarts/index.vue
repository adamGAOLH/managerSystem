<!--
 * @Description:
 * @Version: 1.0
 * @Author: Gao
 * @Date: 2022-03-14 11:20:24
 * @LastEditors: Gao
 * @LastEditTime: 2022-03-16 16:04:08
-->
<template>
  <div>
    <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
    <div ref="echart" :style="style"></div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  onMounted,
  PropType,
  reactive,
  ref,
  toRefs,
  watch,
} from "vue";
import * as echarts from "echarts";
import { echartsInit, echartsStyle } from "@/type/components";
export default defineComponent({
  name: "index",
  props: {
    series: {
      type: Array as PropType<echartsInit[]>,
      require: false,
    },
    style: {
      type: Object as PropType<echartsStyle>,
      default: () => {
        return {
          width: "600px",
          height: "400px",
        };
      },
    },
  },
  setup(props) {
    const state = reactive({
      echart: ref(),
      style: props.style,
      series: props.series,
    });
    const echartsInit = () => {
      const myChart = echarts.init(state.echart);
      let option = {
        title: {
          text: "Stacked Line",
        },
        color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
        backgroundColor: "#100C2A",
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
          textStyle: {
            color: "red",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: false,
          },
        },
        series: state.series,
      };
      myChart.setOption(option);
      setTimeout(() => {
        window.onresize = () => {
          myChart.resize();
        };
      }, 200);
    };
    onMounted(() => {
      echartsInit();
    });
    // TODO:为了简写方便 没有严格使用数据模式，后续使用请更改！
    // 同时这个组件是可封装的 可复用， 由于只是简单的demo所以没有做太多的封装
    watch(state, (newValue) => {
      console.log(newValue);
    });
    return {
      ...toRefs(state),
      echartsInit,
    };
  },
});
</script>
<style lang=""></style>
