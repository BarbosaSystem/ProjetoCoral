<template>
  <div class="wrapper">
    <header class="main-header">
      <!-- Logo -->
      <a href="#" class="logo">
        <!-- mini logo for sidebar mini 50x50 pixels -->
        <span class="logo-mini">
          <b>SyS</b>
        </span>
        <!-- logo for regular state and mobile devices -->
        <span class="logo-lg">
          <b>System</b>LTE
        </span>
      </a>

      <!-- Header Navbar -->
      <nav class="navbar navbar-static-top" role="navigation">
        <!-- Sidebar toggle button-->
        <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
          <span class="sr-only">Toggle navigation</span>
        </a>
        <!-- Navbar Right Menu -->
        <div class="navbar-custom-menu">
          <ul class="nav navbar-nav">
            <!-- Messages: style can be found in dropdown.less-->

            <router-link tag="li" to="/login" v-if="!userIsAuthenticated">
              <a>
                <i class="fa fa-gears"></i> Acesso Restrito
              </a>
            </router-link>
            <router-link tag="li" to="/" v-if="userIsAuthenticated">
              <a>
                <i class="fa fa-user"></i> {{user.Nome}}
              </a>
            </router-link>

            <!-- /.messages-menu -->

            <!-- Notifications Menu -->
          </ul>
        </div>
      </nav>
    </header>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(["user"]),
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    },
  }
};
</script>
<style>
</style>

