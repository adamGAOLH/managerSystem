<!--
 * @Description:
 * @Version: 1.0
 * @Author: Gao
 * @Date: 2022-03-17 09:42:25
 * @LastEditors: Gao
 * @LastEditTime: 2022-03-17 10:48:05
-->
<template>
  <div class="guide">
    <el-descriptions title="引导页">
      <el-descriptions-item label="driver">
        使用driver.js进行引导描述

        <a href=" https://kamranahmed.info/driver.js/">
          https://kamranahmed.info/driver.js/</a
        >
      </el-descriptions-item>
    </el-descriptions>
    <el-button type="primary" @click.prevent.stop="guidFun">引导页</el-button>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Driver from "driver.js";
import "driver.js/dist/driver.min.css";
import steps from "./steps";
export default defineComponent({
  name: "guide",
  setup() {
    let dirvier: Driver | null = null;
    onMounted(() => {
      dirvier = new Driver({
        allowClose: false,
      });
    });
    const guidFun = () => {
      if (dirvier) {
        dirvier.defineSteps(steps);
        dirvier.start();
      }
    };
    return {
      guidFun,
    };
  },
});
</script>
