<template>
  <div class="sys-seting">
    <h4>系统设置</h4>
    <div class="settingli">
      <span>主题</span>
      <span>设置</span>
    </div>
    <div class="settingli"><span>语言</span><span>语言</span></div>
    <div class="settingli"><span>Targe-View</span><span>Targe-View</span></div>
    <div class="settingli"><span>固定header</span><span>固定header</span></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "VSystemSeting",
});
</script>

<style lang="scss" scoped>
.sys-seting {
  width: 100%;
  h4 {
    margin-bottom: 20px;
  }
  .settingli {
    display: flex;
    height: 40px;
    font-size: 12px;
    align-items: center;
    justify-content: space-between;
    span {
      color: rgba(0, 0, 0, 0.65);
      font-size: 14px;
    }
  }
}
</style>
