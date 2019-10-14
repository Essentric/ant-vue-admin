import Vue from 'vue';
import Vuex from 'vuex';
import Axios from '@/libs/axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collapsed: false, // 侧边栏的显示/隐藏
    token: localStorage.getItem('token') || '',
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || null,
  },
  getters: {
    role: state => state.userInfo && state.userInfo.role,
  },
  mutations: {
    // 切换 collapsed 值
    TOGGLE_SIDEBAR(state) {
      state.collapsed = !state.collapsed;
    },
    // 保存 token
    SET_TOKEN_INFO(state, payload) {
      state.token = payload;
      localStorage.setItem('token', payload);
      console.log(state.token);
      console.log(localStorage.getItem('token'));
    },
    // 保存用户信息
    SET_USER_INFO(state, payload) {
      state.userInfo = { ...payload };
      localStorage.setItem('userInfo', JSON.stringify(payload));
    },
    // 登出
    LOG_OUT(state) {
      state.token = '';
      state.userInfo = null;
      localStorage.removeItem('token');
      localStorage.removeItem('userInfo');
    },
  },
  actions: {
    // 登录
    login({ commit }, loginForm = {}) {
      return new Promise((resolve, reject) => {
        Axios.post('proxy/auth/login', { ...loginForm })
          .then((response) => {
            console.log('Token:', response.data.data);
            commit('SET_TOKEN_INFO', response.data.data.token || '');
            resolve(response);
          }, response => reject(response));
      });
    },
    // 获取用户信息
    getUser({ commit }) {
      return new Promise((resolve, reject) => {
        Axios.get('proxy/auth/user')
          .then((response) => {
            commit('SET_USER_INFO', response.data.data || null);
            resolve(response);
          }, response => reject(response));
      });
    },
  },
});
