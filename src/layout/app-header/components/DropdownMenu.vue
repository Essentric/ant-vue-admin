<template>
  <a-dropdown placement="bottomCenter" :trigger="['hover']">
    <div class="user-name" href="#">
      <span>admin</span>
      <img class="user-pic" src="../../../assets/user1.jpg" alt="user" />
    </div>
    <a-menu slot="overlay">
      <a-menu-item key="0">
        <a href="http://www.alipay.com/"><a-icon type="setting" />首页</a>
      </a-menu-item>
      <a-menu-item key="1">
        <a href="http://www.taobao.com/"><a-icon type="user" />个人主页</a>
      </a-menu-item>
      <a-menu-divider />
      <a-menu-item key="3"><a-icon type="logout" />退 出</a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
export default {
  name: 'DropdownMenu',
};
</script>
<style lang="scss" scoped>
</style>
