<template>
  <Tasks v-if="isLoggedIn" />
  <Login v-else @onLogIn="logIn" />
  <Footer />
</template>

<script>
import Footer from "./components/Footer.vue"
import Tasks from "./views/Tasks.vue"
import Login from "./views/Login.vue"

import { useCookie } from 'vue-cookie-next'

export default {
  name: "App",
  components: {
    Footer,
    Tasks,
    Login
  },
  data() {
      return {
        isLoggedIn: false
      }
  },
  methods: {
    logIn(value) {
      this.isLoggedIn = value;
      this.$cookie.setCookie(
        "task-planner-cookie",
        true, {
          expire: '1d'
        }
      );
    }
  },
  created() {
    this.isLoggedIn = this.$cookie.isCookieAvailable("task-planner-cookie");
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  position: relative;
  min-height: calc(100vh - 30px);
}

main {
  padding-bottom: 25px;
}
</style>
