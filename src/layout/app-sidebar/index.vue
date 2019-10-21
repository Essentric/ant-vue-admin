<template>
  <div :class="['layout-sidebar', { 'layout-sidebar-fixed': siderFixed, 'sider-fixed-collapsed': siderFixed && collapse }]">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapse"
      :style="collapse ? null : sidebarStyle"
    >
      <div :class="['logo', { 'logo-collapsed': collapse }]">
        <a-icon :class="['logo-icon']" type="ant-design" />
        <h1 class="logo-text"> Vue-Ant</h1>
      </div>
      <a-menu
        :defaultSelectedKeys="['2.1']"
        :defaultOpenKeys="['2']"
        mode="inline"
        theme="dark"
        :inlineCollapsed="collapsed"
      >
        <template v-for="item in userRoutes">
          <a-menu-item v-if="!item.children" :key="item.name">
            <a-icon type="pie-chart" />
            <span>{{item.meta['title']}}</span>
          </a-menu-item>
          <sub-menu v-else :menu-info="item" :key="item.name"/>
        </template>
      </a-menu>
    </a-layout-sider>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import SubMenu from './components/SubMenu';

export default {
  name: 'AppSidebar',
  components: {
    SubMenu,
  },
  data() {
    return {
      // collapsed: false,
      list: [
        {
          key: '1',
          title: 'Option 1',
        }, {
          key: '2',
          title: 'Navigation 2',
          children: [
            {
              key: '2.1',
              title: 'Navigation 3',
              children: [
                {
                  key: '2.1.1',
                  title: 'Option 2.1.1',
                },
              ],
            },
          ],
        },
      ],
    };
  },
  computed: {
    ...mapState('auth', ['userRoutes']),
    ...mapState(['collapsed', 'siderFixed']),
    // vuex 对 v-model 的解决方案
    collapse: {
      get() {
        return this.collapsed;
      },
      set() {
        this.TOGGLE_SIDEBAR();
      },
    },
    sidebarStyle() {
      return {
        flex: '0 0 256px',
        maxWidth: '256px',
        minWidth: '256px',
        width: '256px',
      };
    },
  },
  methods: {
    ...mapMutations(['TOGGLE_SIDEBAR']),
    // toggleCollapsed() {
    //   this.collapsed = !this.collapsed;
    // },
  },
};
</script>
