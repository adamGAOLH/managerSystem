<template>
  <div class="guide">
    <el-descriptions title="引导页">
      <el-descriptions-item label="">
        使用driver.js进行引导描述
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
      dirvier = new Driver();
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
