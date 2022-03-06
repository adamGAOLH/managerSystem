import { createStore } from "vuex";

export default createStore({
  state: {
    show: false,
    fullscreen: false,
  },
  mutations: {
    handleShow(stata, data) {
      stata.show = data;
    },
    handleFullscreen(state, data) {
      state.fullscreen = data;
    },
  },
  actions: {},
  modules: {},
});
