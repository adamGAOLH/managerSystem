<template>
  <div class="">
    <el-dialog
      v-model="dialogVisible"
      title="Tips"
      width="30%"
      draggable
      close-on-click-modal
      :before-close="chanDialog"
    >
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
import { defineComponent, ref, watch } from "vue";
export default defineComponent({
  name: "diaoglog",
  props: {
    flag: Boolean,
  },
  setup(prop, content) {
    const dialogVisible = ref(false);
    const chanDialog = () => {
      content.emit("changedia", false);
    };
    watch(prop, () => {
      dialogVisible.value = prop.flag;
    });
    return {
      dialogVisible,
      chanDialog,
    };
  },
});
</script>
