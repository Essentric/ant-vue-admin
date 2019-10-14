import Axios from 'axios';

const axios = Axios.create({
  // 设置超时时间
  timeout: 30000,
  // 基础url，会在请求url中自动添加前置链接
  // baseURL: '/api',
});

export default axios;
