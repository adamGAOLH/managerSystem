<!--
 * @Description:
 * @Version: 1.0
 * @Author: Gao
 * @Date: 2022-03-14 11:11:33
 * @LastEditors: Gao
 * @LastEditTime: 2022-03-16 16:18:20
-->

<template>
  <div><ECharts :style="style" /></div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { InitEcharts } from "@/type/components";
import ECharts from "@/components/echarts/index.vue";
export default defineComponent({
  name: "lineChart",
  components: { ECharts },
  setup() {
    const state = reactive(new InitEcharts());
    state.style = {
      width: "100%",
      height: "100vh",
    };
    // state.opt?
    return {
      ...toRefs(state),
    };
  },
});
</script>
<style lang=""></style>
