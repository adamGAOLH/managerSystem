<!--
 * @Description:
 * @Version: 1.0
 * @Author: Gao
 * @Date: 2022-03-09 09:37:18
 * @LastEditors: Gao
 * @LastEditTime: 2022-03-10 17:56:34
-->
<template>
  <div class="sys-seting">
    <h4>{{ t("setting.systemSettings") }}</h4>
    <div class="settingli">
      <span>{{ t("setting.theme") }}</span>
      <themeColorPickerVue @change="changeColor" />
    </div>
    <div class="settingli" style="margin: 0">
      <span>{{ t("setting.language") }}</span
      ><locales />
    </div>
    <div class="settingli">
      <span>Targe-View</span
      ><Vswitch :ishowaa="tageIS" @checkIshow="checkIshow" />
    </div>
    <div class="settingli">
      <span>{{ t("setting.fixedHeader") }}</span
      ><span>固定header</span>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import themeColorPickerVue from "./themeColorPicker.vue";
import locales from "./locales.vue";
import Vswitch from "./switch.vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
export default defineComponent({
  name: "VSystemSeting",
  components: { themeColorPickerVue, locales, Vswitch },
  setup() {
    const store = useStore();
    const tageIS = computed(() => store.state.tagIshow);
    const { t } = useI18n();
    const changeColor = (value: string) => {
      store.dispatch("changeColor", value);
    };
    const checkIshow = (val: string) => {
      store.dispatch("changeTage", val);
    };
    return {
      tageIS,
      changeColor,
      checkIshow,
      t,
    };
  },
});
</script>

<style lang="scss" scoped>
.sys-seting {
  width: 100%;
  h4 {
    margin-bottom: 20px;
  }
  .settingli {
    display: flex;
    height: 40px;
    font-size: 12px;
    align-items: center;
    justify-content: space-between;
    margin-right: 4px;
    span {
      color: rgba(0, 0, 0, 0.65);
      font-size: 14px;
    }
  }
}
</style>
