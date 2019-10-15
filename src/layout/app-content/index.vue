<template>
  <transition name="fade-page" mode="out-in">
    <keep-alive>
      <router-view />
    </keep-alive>
  </transition>
</template>

<script>
export default {
  name: 'AppContent',
};
</script>
<style lang="scss" scoped>
</style>
