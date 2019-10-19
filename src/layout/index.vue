<template>
  <!-- <a-layout id="container">
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
      <app-sidebar />
    </a-layout-sider>
    <a-layout>
      <AppHeader />
      <AppContent />
    </a-layout>
  </a-layout> -->
  <div class="layout-container">
    <AppSidebar />
    <div class="layout-content">
      <AppHeader />
      <AppContent />
    </div>
  </div>
</template>


<script>
import { mapState, mapMutations } from 'vuex';

import AppHeader from './app-header';
import AppContent from './app-content';
import AppSidebar from './app-sidebar';

export default {
  name: 'layout',
  components: {
    AppHeader,
    AppContent,
    AppSidebar,
  },
  computed: {
    ...mapState(['collapsed']),
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
  },
};
</script>
