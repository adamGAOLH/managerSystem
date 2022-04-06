<template>
  <div class="tables">
    <el-row>
      <el-col :span="6">
        <el-input
          v-model="filename"
          placeholder="Please input"
          class="w-50 m-2"
          size="large"
      /></el-col>
      <el-col :span="12">
        <el-button
          style="margin: 0 0 20px 20px"
          type="primary"
          icon="el-icon-document"
          size="large"
          @click="handleDownload"
        >
          导出excel
        </el-button></el-col
      >
    </el-row>
    <dragTable @change="changeTable"></dragTable>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";
import { exportJson2Excel } from "@/utils/excel";
import dragTable from "../drag/dragTable.vue";
import { formatJson } from "@/utils/index";
export default defineComponent({
  name: "index",
  components: { dragTable },
  setup() {
    const table = ref([]);
    const state = reactive({
      filename: "",
      autoWidth: true,
      bookType: "xlsx",
    });
    const changeTable = (val: any) => {
      console.log(val());

      table.value = val();
    };
    const handleDownload = () => {
      const thHearder = [
        "Id",
        "Date",
        "Name",
        "State",
        "City",
        "Address",
        "Zip",
        "Tag",
      ];
      const filterVal = [
        "id",
        "date",
        "name",
        "state",
        "city",
        "address",
        "zip",
        "tag",
      ];
      const data = formatJson(filterVal, table.value);
      exportJson2Excel(
        thHearder,
        data,
        state.filename !== "" ? state.filename : undefined,
        undefined,
        undefined,
        state.autoWidth,
        state.bookType
      );
    };
    return {
      table,
      ...toRefs(state),
      changeTable,
      handleDownload,
    };
  },
});
</script>
