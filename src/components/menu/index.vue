<!--
 * @Description:
 * @Version: 1.0
 * @Author: Gao
 * @Date: 2022-03-07 15:58:17
 * @LastEditors: Gao
 * @LastEditTime: 2022-03-14 11:19:17
-->

<template>
  <div class="menu">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#495060"
      class="el-menu-vertical-demo"
      :default-active="Router"
      text-color="#fff"
      :collapse="!isCollapse"
      unique-opened
      router
    >
      <template v-for="res in routerList" :key="res.id">
        <el-sub-menu v-if="res.children" :index="res.path">
          <template #title>
            <el-icon><location /></el-icon>
            <span>{{ res.title }}</span>
          </template>
          <template v-for="(item, index) in res.children" :key="index">
            <el-sub-menu v-if="item.children" :index="item.path">
              <template #title>{{ item.title }}</template>
            </el-sub-menu>
            <el-menu-item v-else :index="item.path">
              <el-icon><icon-menu /></el-icon>
              <span>{{ item.title }}</span>
            </el-menu-item>
          </template>
        </el-sub-menu>
        <el-menu-item v-else :index="res.path">
          <el-icon><icon-menu /></el-icon>
          <span>{{ res.title }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { menuInit } from "@/type/components";
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
    const isCollapse = computed(() => store.state.isCollapse);
    const routerList: Array<menuInit> = [
      {
        id: "1",
        title: "系统首页",
        path: "/index",
      },
      {
        path: " ",
        title: "图表管理",
        id: "2",
        children: [
          {
            path: "/echarts",
            title: "柱狀图表",
            id: "2-1",
          },
          {
            path: "/lineChart",
            title: "折线图表",
            id: "2-2",
          },
        ],
      },
      {
        path: "/guide",
        title: "引导页",
        id: "3",
      },
      {
        path: "/drag",
        title: "拖拽",
        id: "4",
      },
      {
        path: "/excel",
        title: "Excel",
        id: "5",
      },
      {
        path: "/component",
        title: "组件",
        id: "4",
      },
    ];
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
