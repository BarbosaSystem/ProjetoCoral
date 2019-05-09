<template>
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar Menu -->
      <ul class="sidebar-menu" data-widget="tree" v-for="item in menuItems" :key="item.icon">
        <!-- <li class="header">HEADER</li> -->
        <!-- Optionally, you can add icons to the links -->

        <router-link tag="li" :to="item.link">
          <a>
            <i class="fa" :class="item.icon"></i>
            <span>{{item.title}}</span>
          </a>
        </router-link>
        <!-- <li>
          <a :href="item.link">
            <i class="fa" :class="item.icon"></i>
            <span>{{item.title}}</span>
          </a>
        </li>-->

        <!-- <router-link tag="li" to="/cadastro">
          <a>
            <i class="fa fa-plus-square"></i>
            <span>Coral Infantil</span>
          </a>
        </router-link>

        <router-link tag="li" to="/relacao">
          <a>
            <i class="fa fa-list"></i>
            <span>Lista</span>
          </a>
        </router-link>-->
        <!-- <router-link tag="li" to="/registro">
          <a>
            <i class="fa fa-key"></i>
            <span>Registro</span>
          </a>
        </router-link>-->
      </ul>
      <ul class="sidebar-menu" data-widget="tree" v-if="userIsAuthenticated">
        <li>
          <a @click="onLogout()" class="logout">
            <i class="fa fa-unlock"></i>
            <span>Sair do sistema</span>
          </a>
        </li>
      </ul>
      <!-- /.sidebar-menu -->
    </section>
    <!-- /.sidebar -->
  </aside>
</template>
<script>
export default {
  methods: {
    onLogout() {
      if (confirm("Deseja sair?")) {
        this.$store.dispatch("logout");
        this.$router.push("/login");
      }
    }
  },
  computed: {
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    },
    menuItems() {
      let menuItems = [
        { icon: "fa-plus-square", title: "Coral Infantil", link: "/cadastro" }
      ];
      if (this.userIsAuthenticated) {
        menuItems = [
          {
            icon: "fa-plus-square",
            title: "Coral Infantil",
            link: "/cadastro"
          },
          { icon: "fa-list", title: "Lista", link: "/relacao" }
          /* { icon: "fa-unlock", title: "Sair", link: "/logout" } */
        ];
      }
      return menuItems;
    }
  }
};
</script>


<style scoped>
.logout {
  cursor: pointer;
}
</style>

