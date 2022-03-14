<!--
 * @Description:
 * @Version: 1.0
 * @Author: Gao
 * @Date: 2022-03-10 16:10:51
 * @LastEditors: Gao
 * @LastEditTime: 2022-03-11 10:05:01
-->
<template>
  <el-switch
    v-model="ishows"
    class="ml-2"
    inline-prompt
    active-color="#13ce66"
    inactive-color="#ff4949"
    active-text="Y"
    inactive-text="N"
    @change="changeSwith"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Vswitch",
  props: {
    ishow: Boolean,
  },
  setup(props, content) {
    const ishows = ref(props.ishow);
    const changeSwith = (val: any) => {
      content.emit("checkIshow", val);
    };
    return {
      ishows,
      changeSwith,
    };
  },
});
</script>
<style lang=""></style>
