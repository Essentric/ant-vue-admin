<template>
  <a-icon
    class="trigger"
    :type="collapsed ? 'menu-unfold' : 'menu-fold'"
    @click="TOGGLE_SIDEBAR"
  />
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'SidebarCollapse',
  computed: {
    ...mapState(['collapsed']),
  },
  methods: {
    ...mapMutations(['TOGGLE_SIDEBAR']),
  },
};
</script>
<style lang="scss" scoped>
</style>
