<template>
  <div class="header">
    <el-row class="header-row" :gutter="24">
      <el-col :span="10" class="header-row-left">
        <div class="header-row-left-span" @click="change">
          <el-icon v-if="!isCollapse"><expand /></el-icon>
          <el-icon v-else><fold /></el-icon>
        </div>

        <div @click="nextTo">{{ t("root.title") }}</div>
      </el-col>
      <el-col :span="10"></el-col>
      <el-col :span="4" class="header-row-right">
        <div class="header-row-right-div" @click="Isfull">
          <el-tooltip
            class="box-item"
            effect="dark"
            :content="
              fullscreen ? t('root.closeFullScreen') : t('root.fullScreen')
            "
            placement="bottom"
          >
            <el-icon><rank /></el-icon>
          </el-tooltip>
        </div>
        <div class="header-row-right-div" style="margin-top: 5px">
          <el-tooltip
            class="box-item"
            effect="dark"
            :disabled="header.msg < 1"
            :content="`您有${header.msg}条消息`"
            placement="bottom"
          >
            <el-badge :hidden="header.msg < 1" :value="header.msg" class="item">
              <el-icon><bell /></el-icon>
            </el-badge>
            span
          </el-tooltip>
        </div>
        <el-avatar
          style="margin-right: 15px"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
        <el-dropdown>
          <el-button type="text">
            Join
            <el-icon><caret-bottom /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="openDrawer">{{
                t("root.setting")
              }}</el-dropdown-item>
              <el-dropdown-item>{{ t("root.loginout") }}</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUnmounted,
  computed,
  reactive,
  toRefs,
} from "vue";
import { useStore } from "vuex";
import screenfull from "screenfull";
import { Fold, Expand, Bell, Rank, CaretBottom } from "@element-plus/icons-vue";
import { Initdata } from "@/type/components";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
export default defineComponent({
  name: "v-header",
  components: { Fold, Expand, Bell, Rank, CaretBottom },
  setup() {
    const data = reactive(new Initdata());
    const store = useStore();
    const router = useRouter();
    const { t } = useI18n();
    const isCollapse = computed(() => store.state.isCollapse);
    const fullscreen = computed(() => store.state.fullscreen);
    onMounted(() => {
      if (document.body.clientWidth < 1500) {
        change();
      }
      if (screenfull.isEnabled) {
        screenfull.on("change", checkFullScreen);
      }
    });
    onUnmounted(() => {
      if (screenfull.isEnabled) {
        screenfull.off("change", checkFullScreen);
      }
    });
    const openDrawer = () => {
      store.commit("handleDrawer", true);
    };
    // 左侧菜单隐藏
    const change = () => {
      store.commit("handleisCollapse", !isCollapse.value);
    };

    //回到首页
    const nextTo = () => {
      router.push("/");
    };
    const checkFullScreen = () => {
      store.commit("handleFullscreen", screenfull.isFullscreen);
    };
    const Isfull = () => {
      if (screenfull.isEnabled) {
        screenfull.toggle();
      } else {
        ElMessage.warning({
          message: "抱歉，当前浏览器不支持全屏功能，可尝试升级",
          center: true,
        });
      }
    };
    return {
      ...toRefs(data),
      change,
      isCollapse,
      nextTo,
      fullscreen,
      Isfull,
      checkFullScreen,
      openDrawer,
      t,
    };
  },
});
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100%;
  background: #2d8cf0;
  .header-row {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 10px;
    .header-row-left {
      font-size: 30px;
      display: flex;
      div {
        color: #fff;
        font-size: 22px;
        display: flex;
        align-items: center;
      }
      .header-row-left-span {
        margin-right: 10px;
      }
      // justify-content: start;
    }
    .header-row-right {
      display: flex;
      align-items: center;
      justify-items: end;
      .header-row-right-div {
        display: flex;
        align-items: center;
        margin-right: 30px;
        font-size: 22px;
        color: #fff;
      }
      .el-button--text {
        color: #fff;
        &:hover {
          color: #fff;
        }
      }
    }
  }
}
</style>
