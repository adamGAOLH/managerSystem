<!--
 * @Description:
 * @Version: 1.0
 * @Author: Gao
 * @Date: 2022-03-17 09:42:25
 * @LastEditors: Gao
 * @LastEditTime: 2022-03-18 15:43:53
-->
<template>
  <div class="board">
    <draggableNext
      :key="1"
      :list="list1"
      :group="group"
      title="todo"
      class="drag-next todo"
    ></draggableNext>
    <draggableNext
      :key="2"
      :list="list2"
      :group="group"
      title="working"
      class="drag-next working"
    ></draggableNext>
    <draggableNext
      :key="3"
      :list="list3"
      :group="group"
      title="done"
      class="drag-next done"
    ></draggableNext>
  </div>

  <div class="tables">
    <dragTable></dragTable>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import draggableNext from "@/components/drag/index.vue";
import dragTable from "./dragTable.vue";
import { InitDraggable } from "@/type/components";
export default defineComponent({
  name: "index",
  components: { draggableNext,dragTable },
  setup() {
    let state = reactive(new InitDraggable());
    state.list1= [
        { name: "Mission", id: 1 },
        { name: "Mission", id: 2 },
        { name: "Mission", id: 3 },
        { name: "Mission", id: 4 },
      ]
      state.group= "mission"
      state.list2= [
        { name: "Mission", id: 5 },
        { name: "Mission", id: 6 },
        { name: "Mission", id: 7 },
      ],
      state.list3= [
        { name: "Mission", id: 8 },
        { name: "Mission", id: 9 },
        { name: "Mission", id: 10 },
      ]
    return {
      ...toRefs(state),
    };
   }
});
</script>
<style lang="scss">
.board {
  width: 1000px;
  margin-left: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: flex-start;
}
.tables{
  width: 97%;
  margin:30px 0 0 20px;
}
.drag-next {
  &.todo {
    .drag-title {
      background: #4A9FF9;
    }
  }
  &.working {
    .drag-title {
      background: #f9944a;
    }
  }
  &.done {
    .drag-title {
      background: #2ac06d;
    }
  }
}

</style>
