import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collapsed: false, // 侧边栏的显示/隐藏
  },
  mutations: {
    // 切换 collapsed 值
    TOGGLE_SIDEBAR(state) {
      state.collapsed = !state.collapsed;
    },
  },
});
