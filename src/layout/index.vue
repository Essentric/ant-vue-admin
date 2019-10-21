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
    <AppDrawer />
  </div>
</template>


<script>

import AppHeader from './app-header';
import AppContent from './app-content';
import AppSidebar from './app-sidebar';
import AppDrawer from './app-drawer';


export default {
  name: 'layout',
  components: {
    AppHeader,
    AppContent,
    AppSidebar,
    AppDrawer,
  },
};
</script>
