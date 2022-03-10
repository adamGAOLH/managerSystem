/*
 * @Description:
 * @Version: 1.0
 * @Author: Gao
 * @Date: 2022-03-07 11:45:04
 * @LastEditors: Gao
 * @LastEditTime: 2022-03-10 14:42:16
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import i18n from "@/lang/index.ts"; //引入i18n组件
require("../mock");

createApp(App).use(ElementPlus).use(i18n).use(store).use(router).mount("#app");
