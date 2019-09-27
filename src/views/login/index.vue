<template>
  <div class="login-wrap">
    <div class="form-wrap">
      <ul class="form-content">
        <li class="form-item input-fill">
          <input class="input" type="text" placeholder="Username">
          <label class="label">Username</label>
        </li>
        <li class="form-item input-fill">
          <input class="input" type="password" placeholder="password">
          <label class="label">Password</label>
        </li>
        <li class="form-item">
          <button class="login-button">Login</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
};
</script>
<style lang="scss" scoped>
</style>
