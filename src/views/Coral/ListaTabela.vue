<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1 class="text-center">Relação membros dos inscritos</h1>
      <!-- <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Level</a></li>
        <li class="active">Here</li>
      </ol>-->
    </section>

    <!-- Main content -->
    <section class="content container">
      <div class="col-sm-12" v-if="usuarios.length > 0">
        <!-- <data-table class="table table-bordered" :comments="filteredComments" :titulo="cabecalho"/> -->
        <table id="example2" class="table table-bordered table-hover" v-once >
          <thead>
            <tr>
              <th class="text-center">Nome</th>
              <th class="text-center">Nascimento</th>
              <th class="text-center">Telefone</th>
              <th class="text-center"></th>
            </tr>
          </thead>
          <tbody >
            <tr v-for="items in usuarios" :key="items.id">
              <td class="text-center">{{items.Nome}}</td>
              <td class="text-center">{{items.Nascimento}}</td>
              <td class="text-center">{{items.TelCelular}}</td>
              <td class="text-center">
                <router-link :to="'/profile/' + items.id">
                  <button class="btn btn-info">
                    <i class="fa fa-info-circle"></i>
                  </button>
                </router-link>
              </td>
            </tr>
          </tbody>
          
        </table>
      </div>
      <div class="col-xs-12" v-if="usuarios.length < 1">
        <div class="box">
          <div class="box-body">
            <h5 class="text-center"> Nenhum Registro econtrado!</h5>
          </div>
        </div>
      </div>
      <div class="col-sm-12" v-if="loadlist">
        <div class="text-center">
            <img src="../../assets/spinner.gif" alt="" class="img-responsive">
          </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions({
      Carregar: "loadUsuarios"
    }),
    CarregarLista() {
      this.loadlist = true
      this.Carregar();
      this.loadlist = false;
      
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    }
  },
  created() {
    this.CarregarLista();
    /* this.$store.dispatch("loadUsuarios");
    this.usuarios = this.$store.getters.loadedUsuarios; */
  },
  computed: {
    usuarios() {
      return this.$store.getters.loadedUsuarios;
    }
  },
  mounted() {
    /* this.usuarios = this.$store.getters.loadedUsuarios;
    setTimeout(function() {
     
    }, 1000); */
    $("#example2").DataTable({
      /* columns: vm.headers,
      data: vm.rows, */
      searching: false,
      paging: true,
      info: true,
      sorting: false,
      bLengthChange: false,
      bFilter: true,
      destroy: true,
      language: {
        paginate: {
          previous: "Anterior",
          next: "Próximo"
        },
        info: "Mostrando _PAGE_ de _PAGES_ página(s)"
      }
    });
  },
  data() {
    return {
      loadlist: false,
      datatable: null,
      search: "",
      comments: []
    };
  }
  /* computed: {
    filteredComments: function() {
      let self = this;
      let search = self.search.toLowerCase();
      return self.comments.filter(function(comments) {
        return (
          comments.Nome.toLowerCase().indexOf(search) !== -1 ||
          comments.Nascimento.toLowerCase().indexOf(search) !== -1 ||
          comments.Telefone.toLowerCase().indexOf(search) !== -1
        );
      });
    }
  } */
};
</script>

<style scoped>
.box {
  margin-top: 20px;
}
table {
  width: 100% !important;
}
.content-wrapper {
  background-color: white;
}
</style>
