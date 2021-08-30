<template>
  <Tasks v-if="isLoggedIn" />
  <Login v-else @onLogIn="logIn" />
  <Footer />
</template>

<script>
import Footer from "./components/Footer.vue"
import Tasks from "./views/Tasks.vue"
import Login from "./views/Login.vue"

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
    }
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
