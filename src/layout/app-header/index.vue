<template>
<!--  layout-header-fixed -->
  <div :class="['layout-header', { 'layout-header-fixed': headerFixed, 'header-fixed-collapsed': headerFixed && collapsed }]">
    <div class="header-bread">
      <sidebar-collapse />
      面包屑
    </div>
    <ul class="header-menu">
      <li class="menu-item" @click="toggleFullscreen">
        <a-icon v-if="isFullscreen" type="fullscreen-exit" />
        <a-icon v-else type="fullscreen" />
      </li>
      <li class="menu-item">
        <a-badge count="15" :offset="[0, -2]">
          <a-icon class="bell-icon" type="bell" />
        </a-badge>
      </li>
      <li class="menu-item user-info">
        <dropdown-menu style="height:100%" />
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
  data() {
    return {
      isFullscreen: false,
    };
  },
  methods: {
    // 切换全屏
    toggleFullscreen() {
      const el = document.documentElement;
      const fullScreen = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;
      // eslint-disable-next-line
      const exitScreen = document.exitFullscreen || document.mozCancelFullScreen || document.webkitCancelFullScreen || document.msExitFullscreen;
      if (!this.isFullscreen) {
        if (fullScreen) {
          fullScreen.call(el);
          this.isFullscreen = true;
        } else if (window.ActiveXObject) {
          // 万恶的IE
          const wscript = new window.ActiveXObject('WScript.Shell');
          wscript.SendKeys('{F11}');
        }
      } else {
        exitScreen.call(document);
        this.isFullscreen = false;
      }
    },
  },
};
</script>
