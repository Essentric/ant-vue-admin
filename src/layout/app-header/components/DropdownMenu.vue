<template>
  <a-dropdown placement="bottomCenter" :trigger="['click']">
    <div class="user-name" href="#">
      <span>admin</span>
      <img class="user-pic" src="../../../assets/user1.jpg" alt="user" />
    </div>
    <a-menu slot="overlay">
      <a-menu-item key="0">
        <a href="http://www.alipay.com/"><a-icon type="setting" /> 首 页</a>
      </a-menu-item>
      <a-menu-item key="1" @click="handleToPersonal">
        <a href="javascript:;"><a-icon type="user" />个人中心</a>
      </a-menu-item>
      <a-menu-divider />
      <a-menu-item key="3" @click="handleLogout"><a-icon type="logout" />退 出</a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'DropdownMenu',
  methods: {
    ...mapMutations('auth', ['LOG_OUT']),
    handleLogout() {
      this.LOG_OUT();
      this.$router.push({ name: 'login' });
    },
    handleToPersonal() {
      console.log(12312);
      this.$router.push({
        name: 'Personal',
      });
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
