<template>
  <div class="login-wrap">
    <div class="form-wrap">
      <ul class="form-content">
        <li class="form-item input-fill">
          <input v-model="loginForm.username" class="input" type="text" placeholder="Username">
          <label class="label">Username</label>
        </li>
        <li class="form-item input-fill">
          <input v-model="loginForm.password" class="input" type="password" placeholder="password">
          <label class="label">Password</label>
        </li>
        <li class="form-item">
          <button
            :style="{ 'cursor': loading ? 'not-allowed' : 'pointer' }"
            :disabled="loading"
            class="login-button"
            @click="handleLogin"
          >
            <a-icon v-show="loading" type="sync" :spin="loading" /> Login
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      loading: false,
      loginForm: {
        username: 'Essentric',
        password: '123',
      },
    };
  },
  methods: {
    ...mapActions('auth', ['login']),
    handleLogin() {
      const { username, password } = this.loginForm;
      if (!username || !password) {
        this.$message.warning('请输入用户名或密码');
        return;
      }
      this.loading = true;
      this.login(this.loginForm)
        .then((response) => {
          console.log(1);
          this.$message.success(response.data.msg, 1.5, () => {
            this.loading = false;
            this.$router.push({ name: 'home' });
          });
        }, () => this.$message.error('登录失败'));
      // .finally(() => { this.loading = false; });
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
