import Vue from 'vue';
import Vuex from 'vuex';
import Axios from '@/libs/axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collapsed: false, // 侧边栏的显示/隐藏
    userInfo: null,
  },
  mutations: {
    // 切换 collapsed 值
    TOGGLE_SIDEBAR(state) {
      state.collapsed = !state.collapsed;
    },
  },
  actions: {
    login({ commit }, loginForm = {}) {
      return new Promise((resolve, reject) => {
        Axios.post('/login', { ...loginForm })
          .then((response) => {
            resolve(response);
            commit('GET_USER_INFO', response);
          }, ({ response }) => reject(response));
      });
    },
  },
});
