<template>
  <transition name="fade-page" mode="out-in">
    <keep-alive>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: 'transplate', minHeight: '280px' }">
        <router-view />
      </a-layout-content>
    </keep-alive>
  </transition>
</template>

<script>
export default {
  name: 'AppContent',
};
</script>
<style lang="scss" scoped>
  .fade-page-enter-active,
  .fade-page-leave-active {
    transition: all 0.5s;
  }
  .fade-page-enter {
    opacity: 0;
    transform: translateX(-30px);
  }
  .fade-page-leave-to {
    opacity: 0;
    transform: translateX(-30px);
  }
</style>
