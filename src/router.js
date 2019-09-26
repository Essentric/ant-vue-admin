import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// 公共路由
export const commonRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./layout'),
    meta: { title: '首页', icon: 'home' },
  },
];

// export const async

// 创建路由
const createRouter = () => new Router({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes: commonRoutes,
});

const router = createRouter();

export default router;
