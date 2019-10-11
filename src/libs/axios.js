import Axios from 'axios';

const axios = Axios.create({
  // 设置超时时间
  timeout: 30000,
  // 基础url，会在请求url中自动添加前置链接
  baseURL: 'https://www.easy-mock.com/mock/5d9f4405cda1720dffee5eba/essentric/api',
});

export default axios;
