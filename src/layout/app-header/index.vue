<template>
<!--  layout-header-fixed -->
  <div :class="['layout-header', { 'layout-header-fixed': headerFixed, 'header-fixed-collapsed': headerFixed && collapsed }]">
    <div class="header-bread">
      <sidebar-collapse />
      面包屑
    </div>
    <ul class="header-menu">
      <li class="menu-item">
        <a-icon class="fullscreen-icon" type="fullscreen" />
        <!-- <a-icon type="fullscreen-exit" /> -->
      </li>
      <li class="menu-item">
        <a-badge count="15" :offset="[0, -2]">
          <a-icon class="bell-icon" type="bell" />
        </a-badge>
      </li>
      <li class="menu-item user-info">
        <dropdown-menu />
      </li>
      <li class="menu-item">
        <a-icon type="global" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SidebarCollapse from './components/SidebarCollapse';
import DropdownMenu from './components/DropdownMenu';

export default {
  name: 'AppHeader',
  components: {
    SidebarCollapse,
    DropdownMenu,
  },
  computed: {
    ...mapState(['headerFixed', 'collapsed']),
  },
};
</script>
