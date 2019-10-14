import Vue from 'vue';
import Router from 'vue-router';
import store from './store';

Vue.use(Router);

// 公共路由
export const commonRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('./views/login'),
  },
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

router.beforeEach(async (to, from, next) => {
  if (to.name !== 'login') {
    if (store.state.token) {
      console.log('role: ', store.getters.role);
      if (store.getters.role && store.getters.role.length > 0) {
        next();
      } else {
        try {
          const response = await store.dispatch('getUser');
          const { role } = response.data.data;
          console.log(role);
          next({ ...to, replace: true });
        } catch (error) {
          console.log(error, 123);
        }
      }
    } else {
      next({
        name: 'login',
        query: {
          redirect: to.fullPath,
        },
      });
    }
  } else {
    next();
  }
});

export default router;
