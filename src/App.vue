<template>
  <div id="app">
    <app-header />
    <app-side />
    <router-view />
    <!--Main Header -->
    <loading v-if="user"/>

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
  },
  created() {
    this.$store.dispatch("Action_VerificarEstado")
  },
};
</script>

<style>
@import "Styles/index.css";
a {
  cursor: pointer;
}
</style>
