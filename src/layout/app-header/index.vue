<template>
  <a-layout-header style="background: #fff; padding: 0">
    <div class="header-wrap">
      <div class="header-l">
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
  </a-layout-header>
</template>

<script>
import SidebarCollapse from './components/SidebarCollapse';
import DropdownMenu from './components/DropdownMenu';

export default {
  name: 'AppHeader',
  components: {
    SidebarCollapse,
    DropdownMenu,
  },
};
</script>
