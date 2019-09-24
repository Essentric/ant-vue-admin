import Vue from 'vue';

import App from './App.vue';
import router from './router';
import store from './store/index';
import Antd from './libs/antd-component';
import './style/index.scss';

Vue.config.productionTip = false;

Vue.use(Antd); // 引入 antd 组件

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
