<template>
  <h1>Login</h1>
  
  <label for="password">
    When do you want it?
  </label>
  <br>
  <input
    type="password"
    id="password"
    @keydown="(e) => {
      if (e.keyCode === 13) {
        logIn();
      } else {
        this.logInMessage = '';
      }
    }"/>
  <button @click="logIn()">Log In</button>

  <p>{{logInMessage}}</p>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        logInMessage: ""
      }
    },
    methods: {
      logIn() {
        if (document.getElementById("password").value === "NOW!") {
          this.$emit('onLogIn', true);
        } else {
          this.logInMessage = "Incorrect Password"
        }
      }
    }
  }
</script>

<style scoped>
  label {
    display: block;
  }
</style>
