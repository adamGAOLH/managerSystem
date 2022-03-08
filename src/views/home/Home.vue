<!--
 * @Description:
 * @Version: 1.0
 * @Author: Gao
 * @Date: 2022-03-07 11:45:04
 * @LastEditors: Gao
 * @LastEditTime: 2022-03-08 11:24:15
-->
<template>
  <el-container>
    <el-header>
      <v-headers />
    </el-header>
    <el-container>
      <el-aside width="200px">
        <VMenu />
      </el-aside>
      <el-main>
        <VTageList />
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import { api } from "@/api/demo";
import { demo } from "@/type/demo";
import VHeaders from "@/components/header/index.vue";
import VMenu from "@/components/menu/index.vue";
import VTageList from "@/components/tagList/index.vue";
export default defineComponent({
  name: "Home",
  components: {
    VHeaders,
    VMenu,
    VTageList,
  },
  setup() {
    let data = reactive(new demo());
    onMounted(() => {
      api.mocs
        .lists()
        .then((res: any) => {
          data.arr = res.data.row;
        })
        .catch((err) => {
          console.log(err);
        });
    });

    return {
      ...toRefs(data),
    };
  },
});
</script>
<style lang="scss" scoped>
.el-header {
  margin: 0;
  padding: 0;
}
.el-main {
  padding: 0;
}
</style>
