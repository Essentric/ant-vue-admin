<template>
  <div class="layout-main">
    <transition name="fade-page" mode="out-in">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AppContent',
};
</script>
<style lang="scss" scoped>
  .fade-page-enter-active,
  .fade-page-leave-active {
    transition: all 0.35s;
  }
  .fade-page-enter,
  .fade-page-leave-to {
    opacity: 0;
    transform: translateX(-30px);
  }
</style>
