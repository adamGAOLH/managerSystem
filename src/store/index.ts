/*
 * @Description:
 * @Version: 1.0
 * @Author: Gao
 * @Date: 2022-03-07 11:45:04
 * @LastEditors: Gao
 * @LastEditTime: 2022-03-07 16:17:27
 */
import { createStore } from "vuex";

export default createStore({
  state: {
    isCollapse: true,
    fullscreen: false,
  },
  mutations: {
    handleisCollapse(stata, data) {
      stata.isCollapse = data;
    },
    handleFullscreen(state, data) {
      state.fullscreen = data;
    },
  },
  actions: {},
  modules: {},
});
