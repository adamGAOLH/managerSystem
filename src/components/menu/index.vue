<!--
 * @Description:
 * @Version: 1.0
 * @Author: Gao
 * @Date: 2022-03-07 15:58:17
 * @LastEditors: Gao
 * @LastEditTime: 2022-03-08 11:22:52
-->

<template>
  <div class="menu">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      :default-active="Router"
      text-color="#fff"
      :collapse="!isCollapse"
      unique-opened
      router
    >
      <template v-for="res in routerList[0].children" :key="res.meta.index">
        <el-sub-menu v-if="res.children" :index="res.path">
          <template #title>
            <el-icon><location /></el-icon>
            <span>{{ res.meta.title }}</span>
          </template>
          <template v-for="(item, index) in res.children" :key="index">
            <el-sub-menu v-if="item.childen" :index="item.path">
              <template #title>{{ item.meta.title }}</template>
            </el-sub-menu>
            <el-menu-item v-else :index="item.path">
              <el-icon><icon-menu /></el-icon>
              <span>{{ item.meta.title }}</span>
            </el-menu-item>
          </template>
        </el-sub-menu>
        <el-menu-item v-else :index="res.path">
          <el-icon><icon-menu /></el-icon>
          <span>{{ res.meta.title }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import {
  Location,
  // Document,
  Menu as IconMenu,
  // Setting,
} from "@element-plus/icons-vue";
export default defineComponent({
  name: "v-menu",
  components: { Location, IconMenu },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const isCollapse = computed(() => store.state.isCollapse);
    const routerList: any = router.currentRoute.value.matched;
    const Router = computed(() => {
      return route.path;
    });

    return {
      isCollapse,
      Router,
      routerList,
    };
  },
});
</script>
<style lang="scss" scoped>
.menu {
  display: block;
  position: absolute;
  left: 0;
  top: 60px;
  bottom: 0;
  overflow-y: scroll;
  transition: width 0.25s;
  -webkit-transition: width 0.25s;
  -moz-transition: width 0.25s;
  -webkit-transition: width 0.25s;
  -o-transition: width 0.25s;

  & > ul {
    height: 100%;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }
}
.menu::-webkit-scrollbar {
  width: 0;
}
</style>
