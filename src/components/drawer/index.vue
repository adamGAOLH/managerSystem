<template>
  <div class="">
    <el-drawer
      v-model="isShow"
      size="16%"
      direction="rtl"
      :before-close="handleClose"
    >
      <template #title>
        <h3>设置</h3>
      </template>
      <template #default>
        <div>
          <VSystemSeting />
        </div>
      </template>
    </el-drawer>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import VSystemSeting from "@/components/setform/systemSeting.vue";
export default defineComponent({
  name: "VDrawer",
  components: {
    VSystemSeting,
  },
  setup() {
    const store = useStore();
    const isShow = computed(() => store.state.isShow);
    const handleClose = () => {
      store.commit("handleDrawer", false);
    };
    return {
      isShow,
      handleClose,
    };
  },
});
</script>
