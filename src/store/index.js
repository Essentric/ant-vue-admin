import Vue from 'vue';
import Vuex from 'vuex';

import auth from './auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collapsed: false, // 侧边栏的显示/隐藏
    headerFixed: false, // 固定头部
    siderFixed: false, // 固定侧栏
  },
  getters: {},
  mutations: {
    // 切换 collapsed 值
    TOGGLE_SIDEBAR(state) {
      state.collapsed = !state.collapsed;
    },
    SET_HEADER_FIXED(state, payload) {
      state.headerFixed = payload;
    },
    SET_SIDER_FIXED(state, payload) {
      state.siderFixed = payload;
    },
  },
  actions: {},
  modules: {
    auth,
  },
});
