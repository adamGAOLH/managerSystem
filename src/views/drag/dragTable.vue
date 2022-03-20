<!--
 * @Description:
 * @Version: 1.0
 * @Author: Gao
 * @Date: 2022-03-18 14:16:34
 * @LastEditors: Gao
 * @LastEditTime: 2022-03-18 16:36:08
-->

<template>
  <el-table :data="tableData" border style="width: 100%" row-key="id">
    <el-table-column prop="date" label="Date" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="state" label="State" />
    <el-table-column prop="city" label="City" />
    <el-table-column prop="address" label="Address" />
    <el-table-column prop="zip" label="Zip" />
    <el-table-column label="Operations">
      <template #default>
        <el-button type="text" size="small" @click="handleClick"
          >Detail</el-button
        >
        <el-button type="text" size="small">Edit</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, nextTick, onMounted } from "vue";
import Sortable from "sortablejs";
import { InitDraggable } from "@/type/components";
export default defineComponent({
  name: "dragTable",
  setup() {
    const state = reactive(new InitDraggable());
    state.tableData = [
      {
        id: 1,
        date: "2016-05-03",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
        tag: "Home",
      },
      {
        id: 2,
        date: "2016-05-02",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
        tag: "Office",
      },
      {
        id: 3,
        date: "2016-05-04",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
        tag: "Home",
      },
      {
        id: 4,
        date: "2016-05-01",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
        tag: "Office",
      },
      {
        id: 5,
        date: "2016-05-03",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
        tag: "Home",
      },
      {
        id: 6,
        date: "2016-05-02",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
        tag: "Office",
      },
      {
        id: 7,
        date: "2016-05-04",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
        tag: "Home",
      },
      {
        id: 8,
        date: "2016-05-01",
        name: "Tom",
        state: "California",
        city: "Los Angeles",
        address: "No. 189, Grove St, Los Angeles",
        zip: "CA 90036",
        tag: "Office",
      },
    ];
    const handleClick = () => {
      console.log("click");
    };
    onMounted(() => {
      drag();
    });
    const drag = () => {
      // 首先获取需要拖拽的dom节点
      const el1 = document
        .querySelectorAll(".tables .el-table__body-wrapper")[0]
        .querySelectorAll("table > tbody")[0];
      Sortable.create(el1, {
        disabled: false, // 是否开启拖拽
        ghostClass: "sortable-ghost", //拖拽样式
        animation: 150, // 拖拽延时，效果更好看
        group: {
          // 是否开启跨表拖拽
          pull: false,
          put: false,
        },
        onEnd: (e: any) => {
          // 这里主要进行数据的处理，拖拽实际并不会改变绑定数据的顺序，这里需要自己做数据的顺序更改
          let arr = state.tableData; // 获取表数据
          arr.splice(e.newIndex, 0, arr.splice(e.oldIndex, 1)[0]); // 数据处理
          nextTick(function () {
            state.tableData = arr;
          });
        },
      });
    };
    return {
      ...toRefs(state),
      handleClick,
    };
  },
});
</script>
<style lang=""></style>
