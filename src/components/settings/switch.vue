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
    v-model="switchishow.ishow"
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
import { computed, defineComponent, reactive, toRefs, watch } from "vue";
import { useStore } from "vuex";

import { Initdata } from "@/type/components";
export default defineComponent({
  name: "Vswitch",
  props: {
    ishow: Boolean,
  },
  setup(props, content) {
    const { ishow } = props;
    const data = reactive(new Initdata());
    // data.switchishow.ishow = ishow;
    const store = useStore();
    const tagIsow = computed(() => store.state.tagIshow);
    watch(tagIsow, (val: boolean) => {
    //   data.switchishow.ishow = val;
    });
    const changeSwith = (val: any) => {
      content.emit("checkIshow", val);
    };
    return {
      tagIsow,
      ...toRefs(data),
      changeSwith,
    };
  },
});
</script>
<style lang=""></style>
