/*
 * @Description:
 * @Version: 1.0
 * @Author: Gao
 * @Date: 2022-03-07 11:45:04
 * @LastEditors: Gao
 * @LastEditTime: 2022-03-10 16:27:07
 */
import { createStore } from "vuex";
import elementVariable from "@/styles/element-variable.scss";
export default createStore({
  state: {
    isCollapse: true,
    fullscreen: false,
    isShow: false,
    theme: localStorage.getItem("theme") || elementVariable.theme,
    locale: localStorage.getItem("lang") || "zh",
    tagIshow: true,
  },
  mutations: {
    handleisCollapse(stata, data) {
      stata.isCollapse = data;
    },
    handleFullscreen(state, data) {
      state.fullscreen = data;
    },
    handleDrawer(state, data) {
      state.isShow = data;
    },
    handleColor(state, data) {
      state.theme = data;
      localStorage.setItem("theme", data);
    },
    handleLocale(state, data) {
      state.locale = data;
    },
    handleTag(state, data) {
      state.tagIshow = data;
    },
  },
  actions: {
    changeColor({ commit }, paylod: string) {
      commit("handleColor", paylod);
    },
    changeLocale({ commit }, paylod: string) {
      commit("handleLocale", paylod);
    },
    changeTage({ commit }, paylod: string) {
      commit("handleTag", paylod);
    },
  },
  modules: {},
});
