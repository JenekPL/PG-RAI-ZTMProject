<template>
  <div class="background">
    <b-form @submit="onSubmit" class="login-form">
      <h1 class="title">Welcome in</h1>
      <h2 class="mb-5 title">ZTM Gdańsk</h2>

      <b-form-group>
        <b-form-input
          id="username"
          v-model="username"
          required
          placeholder="Enter your username"
        />
      </b-form-group>

      <b-form-group>
        <b-form-input
          id="password"
          v-model="password"
          required
          type="password"
          placeholder="Enter your password"
        />
      </b-form-group>

      <b-button block type="submit" variant="primary">Login</b-button>
    </b-form>
  </div>
</template>

<script>

import store from "../store";

export default {
  mounted() { },
  data: () => ({ 
    username: null,
    password: null
  }),
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      store.dispatch('login', { username: this.username, password: this.password })
    },
  },
  components: { }
};
</script>

<style scoped>
.background {
  position:fixed;
  padding:0;
  margin:0;

  top:0;
  left:0;

  width: 100%;
  height: 100%;

  background-image: url("../assets/login-background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.login-form {
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.title {
  color: white;
  text-align: center;
}
</style>
