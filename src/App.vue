<template>
	<!-- Conditionally display view depending on login status -->
  <main>
    <Tasks v-if="isLoggedIn" />
    <Login v-else @onLogIn="logIn" />
  </main>
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
		return {	// Initial login status
			isLoggedIn: false
		}
  },
  methods: {
    logIn(value) {	// Update state and set cookie when successful log in
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
		/* On app creation, set log in status based on cookie
		For persistent sessions */
    this.isLoggedIn = this.$cookie.isCookieAvailable("task-planner-cookie");
  }
}
</script>

<style>
	/* Default styling from Vue */
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;

		position: relative;
		min-height: calc(100vh - 30px);
	}

	/* Padding for footer */
	main {
		padding-bottom: 25px;
	}
</style>
