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

// 需动态添加的路由
export const asyncRoutes = [
  {
    path: '/list',
    name: 'list',
    component: () => import('./views/list'),
    meta: { title: '列表', icon: 'ordered-list' },
    children: [
      {
        path: 'sampleList',
        name: 'sampleList',
        component: () => import('./views/list/sampleList'),
        meta: { title: '简单列表', icon: 'ordered-list' },
      },
    ],
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('./views/form'),
    redirect: 'sampleForm',
    meta: { title: '表单', icon: 'form' },
    children: [
      {
        path: 'sampleForm',
        name: 'sampleForm',
        component: () => import('./views/form/sampleForm'),
        meta: { title: '简略表单', icon: 'form' },
      },
    ],
  },
  {
    path: 'personal',
    name: 'Personal',
    component: () => import('./views/personal'),
    meta: { title: '个人中心', icon: 'user' },
  },
];

// export const async

// 创建路由
const createRouter = () => new Router({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes: commonRoutes,
});

const router = createRouter(asyncRoutes);

const resetRouter = () => {
  const Router = createRouter();
  router.matcher = Router.matcher;
  router.addRoutes([
    {
      path: '/',
      name: 'home',
      component: () => import('./layout'),
      meta: { title: '首页', icon: 'home' },
      children: [
        ...asyncRoutes,
        {
          path: '*', name: '*', redirect: '/404', hidden: true,
        },
      ],
    },
  ]);
};

router.beforeEach(async (to, from, next) => {
  if (to.name !== 'login') {
    if (store.state.auth.token) {
      console.log('role: ', store.getters['auth/role']);
      if (store.getters['auth/role'] && store.getters['auth/role'].length > 0) {
        next();
      } else {
        try {
          const response = await store.dispatch('auth/getUser');
          const { role } = response.data.data;
          console.log(role);
          console.log(store);
          store.commit('auth/SER_ASYNC_ROUTE', asyncRoutes);
          resetRouter(store.state.auth.userRoutes);
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
