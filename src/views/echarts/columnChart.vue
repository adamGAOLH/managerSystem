<!--
 * @Description:
 * @Version: 1.0
 * @Author: Gao
 * @Date: 2022-03-14 11:11:33
 * @LastEditors: Gao
 * @LastEditTime: 2022-03-16 16:18:20
-->

<template>
  <div><ECharts :style="style" :series="series" /></div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { InitEcharts } from "@/type/components";
import ECharts from "@/components/echarts/index.vue";
export default defineComponent({
  name: "barChart",
  components: { ECharts },
  setup() {
    let state = reactive(new InitEcharts());
    state = {
      style: {
        width: "100%",
        height: "600px",
      },
      series: [
        {
          name: "Email",
          type: "bar",
          stack: "Total",
          smooth: true,
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: "Union Ads",
          type: "bar",
          smooth: true,
          stack: "Total",
          data: [220, 182, 191, 234, 290, 330, 310],
        },
      ],
    };
    // state.opt?=
    return {
      ...toRefs(state),
    };
  },
});
</script>
<style lang=""></style>
