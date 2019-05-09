<template>
  <div id="app">
    <app-header />
    <app-side />
    <router-view />
    <!--Main Header -->
    <!-- <loading v-if="user" /> -->
    <loading v-if="user"/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>-->
    <complet v-if="completo"/>
  </div>
</template>
<script>
import AppHeader from "@/Layouts/AppHeader.vue";
import AppSide from "@/Layouts/AppSideBar.vue";
import Loading from "@/components/Loading.vue";
import Complet from "@/components/Shared/Complete.vue";

export default {
  components: {
    AppHeader,
    AppSide,
    Loading,
    Complet
  },
  computed: {
    print (){
      return this.$store.getters.print
    },
    user() {
      return this.$store.getters.loading;
    },
    completo() {
      return this.$store.getters.getConcluido;
    }
  }
};
</script>

<style>
@import "Styles/index.css";
a {
  cursor: pointer;
}
</style>
