<!--
 * @Description:
 * @Version: 1.0
 * @Author: Gao
 * @Date: 2022-03-17 15:02:42
 * @LastEditors: Gao
 * @LastEditTime: 2022-03-18 09:38:24
-->
<template>
  <div class="drag">
    <div class="drag-title">
      {{ title }}
    </div>
    <draggable :list="list" v-bind="$attrs" class="drag-content">
      <div v-for="res in list" :key="res.id" class="drag-item">
        {{ res.name }} {{ res.id }}
      </div>
    </draggable>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
import { draggable } from "@/type/components";
export default defineComponent({
  name: "draggableNext",
  components: {
    draggable: VueDraggableNext,
  },
  props: {
    title: {
      type: String,
      default: "header",
    },
    list: {
      type: Array as PropType<draggable[]>,
      default: () => {
        return [];
      },
    },

    options: {
      type: Object,
      default: () => {
        return null;
      },
    },
  },
});
</script>
<style lang="scss" scoped>
.drag {
  min-width: 300px;
  min-height: 100px;
  height: auto;
  overflow: hidden;
  background: #f0f0f0;
  border-radius: 3px;
  .drag-title {
    height: 50px;
    line-height: 50px;
    overflow: hidden;
    padding: 0 20px;
    text-align: center;
    background: #333;
    color: #fff;
    border-radius: 3px 3px 0 0;
  }
  .drag-content {
    height: auto;
    overflow: hidden;
    border: 10px solid transparent;
    min-height: 60px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    .drag-item {
      cursor: pointer;
      width: 100%;
      height: 64px;
      margin: 5px 0;
      background-color: #fff;
      text-align: left;
      line-height: 54px;
      padding: 5px 10px;
      box-sizing: border-box;
      box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
© 2022 GitHub, Inc.
