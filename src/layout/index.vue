<template>
  <a-layout id="container">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapse"
    >
      <div class="logo" />
      <app-sidebar />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <app-header />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <app-content />
      </a-layout-content>
    </a-layout>
  </a-layout>
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
    collapse: {
      get() {
        return this.collapsed;
      },
      set() {
        this.TOGGLE_SIDEBAR();
      },
    },
  },
  methods: {
    ...mapMutations(['TOGGLE_SIDEBAR']),
  },
};
</script>
