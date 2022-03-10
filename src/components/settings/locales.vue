<!--
 * @Description:
 * @Version: 1.0
 * @Author: Gao
 * @Date: 2022-03-10 14:45:12
 * @LastEditors: Gao
 * @LastEditTime: 2022-03-10 15:52:22
-->
<template>
  <div class="locles">
    <el-dropdown @command="handleCommand">
      <img style="width: 36px;" src="../../assets/multi-language.png" alt="" srcset="" />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :disabled="locle == 'zh'" command="zh"
            >{{t('setting.languageChinese')}}</el-dropdown-item
          >
          <el-dropdown-item :disabled="locle == 'en'" command="en"
            >{{t('setting.languageEenglish')}}</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";

import { ElMessage } from "element-plus";
export default defineComponent({
  name: "locales",
  setup() {
    const store = useStore();
    const { locale,t } = useI18n();
    const locle = computed(() => store.state.locale);

    const handleCommand = (val: string) => {
      locale.value = val;
      store.dispatch("changeLocale", val);
      ElMessage({
        message: "Switch Language Success",
        type: "success",
      });
    };
    return {
      locle,
      handleCommand,
      t
    };
  },
});
</script>
<style lang=""></style>
