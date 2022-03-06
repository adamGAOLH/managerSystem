<template>
  <el-container>
    <el-header>
      <v-headers />
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import { api } from "@/api/demo";
import { demo } from "@/type/demo";
import VHeaders from "@/components/header/index.vue";
export default defineComponent({
  name: "Home",
  components: {
    VHeaders,
  },
  setup() {
    let data = reactive(new demo());
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
</style>
