/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import Axios from '@/libs/axios';

const state = {
  token: localStorage.getItem('token') || '',
  userInfo: null,
  userRoutes: null,
};

const getters = {
  role: state => state.userInfo && state.userInfo.role,
};

const mutations = {
  // 保存 token
  SET_TOKEN_INFO(state, payload) {
    state.token = payload;
    localStorage.setItem('token', payload);
  },
  // 保存用户信息
  SET_USER_INFO(state, payload) {
    state.userInfo = { ...payload };
    // localStorage.setItem('userInfo', JSON.stringify(payload));
  },
  // 保存当前用户能访问的路由表
  SER_ASYNC_ROUTE(state, payload) {
    state.userRoutes = [...payload];
  },
  // 登出
  LOG_OUT(state) {
    state.token = '';
    state.userInfo = null;
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
  },
};

const actions = {
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
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
