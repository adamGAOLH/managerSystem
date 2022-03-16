<!--
 * @Description:
 * @Version: 1.0
 * @Author: Gao
 * @Date: 2022-03-07 11:45:04
 * @LastEditors: Gao
 * @LastEditTime: 2022-03-16 14:25:42
-->
<template>
  <el-container>
    <el-header>
      <v-headers />
    </el-header>
    <el-container>
      <el-aside :width="isCollapse ? '200px' : '64px'">
        <VMenu />
      </el-aside>
      <el-main>
        <VTageList v-if="ishows" />
        <div class="conter">
          <router-view />
        </div>
        <VDrawer />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, toRefs } from "vue";
import { api } from "@/api/demo";
import { demo } from "@/type/demo";
import { useStore } from "vuex";
import VHeaders from "@/components/header/index.vue";
import VMenu from "@/components/menu/index.vue";
import VTageList from "@/components/tagList/index.vue";
import VDrawer from "@/components/drawer/index.vue";
export default defineComponent({
  name: "Home",
  components: {
    VHeaders,
    VMenu,
    VTageList,
    VDrawer,
  },
  setup() {
    let data = reactive(new demo());
    const store = useStore();
    const ishows = computed(() => store.state.tagIshow);
    const isCollapse = computed(() => store.state.isCollapse);

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
      ishows,
      isCollapse,
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
.el-aside {
  margin-right: 20px;
  transition: width 0.4s;
  -webkit-transition: width 0.4s;
  -moz-transition: width 0.4s;
  -webkit-transition: width 0.4s;
  -o-transition: width 0.4s;
}
.el-main {
  padding: 0;
  overflow: hidden;
  height: 100vh;
  .conter {
    width: calc(100%-40px);
    height: 100%;
    padding: 20px;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
}
</style>
