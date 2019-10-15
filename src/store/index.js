import Vue from 'vue';
import Vuex from 'vuex';

import auth from './auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collapsed: false, // 侧边栏的显示/隐藏
  },
  getters: {},
  mutations: {
    // 切换 collapsed 值
    TOGGLE_SIDEBAR(state) {
      state.collapsed = !state.collapsed;
    },
  },
  actions: {},
  modules: {
    auth,
  },
});
