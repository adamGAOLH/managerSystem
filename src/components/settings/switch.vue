<!--
 * @Description:
 * @Version: 1.0
 * @Author: Gao
 * @Date: 2022-03-10 16:10:51
 * @LastEditors: Gao
 * @LastEditTime: 2022-03-10 17:59:08
-->
<template>
  <el-switch
    v-model="ore"
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
// import { useStore } from "vuex";

// import { Initdata } from "@/type/components";
export default defineComponent({
  name: "Vswitch",
  props: {
    ishow: Boolean,
  },
  setup(props, content) {
    const ore = ref(props.ishow);
    const changeSwith = (val: boolean) => {
      console.log(val);

      content.emit("checkIshow", val);
    };
    return {
      ore,
      changeSwith,
    };
  },
});
</script>
<style lang=""></style>
