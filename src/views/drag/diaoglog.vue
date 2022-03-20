<template>
  <div class="">
    <el-dialog v-model="dialogVisible" title="Tips" width="30%" draggable>
      <span>It's a draggable Dialog</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="chanDialog">Cancel</el-button>
          <el-button type="primary" @click="chanDialog">Confirm</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "diaoglog",
  props: {
    dialogVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup(prop, content) {
    const chanDialog = () => {
      content.emit("changedia", false);
    };
    return {
      chanDialog,
    };
  },
});
</script>
