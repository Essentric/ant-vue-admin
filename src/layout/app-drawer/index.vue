<template>
  <div>
    <div :class="['app-drawer', { 'app-drawer-open': visible }]" @click="showDrawer">
      <a-icon :type="visible ? 'close' : 'setting'"></a-icon>
    </div>
    <a-drawer
      title="Basic Drawer"
      placement="right"
      :closable="false"
      @close="onClose"
      :visible="visible"
    >
      <p>固定顶栏：<a-switch v-model="header" /></p>
      <p>固定侧栏：<a-switch v-model="sider" /></p>
    </a-drawer>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'AppDrawer',
  data() {
    return {
      visible: false,
    };
  },
  computed: {
    ...mapState(['headerFixed', 'siderFixed']),
    header: {
      get() {
        return this.headerFixed;
      },
      set(val) {
        this.SET_HEADER_FIXED(val);
      },
    },
    sider: {
      get() {
        return this.siderFixed;
      },
      set(val) {
        this.SET_SIDER_FIXED(val);
      },
    },
  },
  methods: {
    ...mapMutations(['SET_HEADER_FIXED', 'SET_SIDER_FIXED']),
    showDrawer() {
      this.visible = !this.visible;
    },
    onClose() {
      this.visible = false;
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
