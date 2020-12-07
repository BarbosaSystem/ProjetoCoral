<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1 class="text-center">Relação membros dos inscritos</h1>
    </section>
    <!-- Main content -->
    <section class="content container">
      <div class="col-sm-12" v-if="loadedUsuarios.length > 0">
        <data-tabela></data-tabela>
        <!-- <data-table class="table table-bordered" :comments="filteredComments" :titulo="cabecalho"/> -->
        <!-- <table id="example2" class="table table-bordered table-hover" v-once>
          <thead>
            <tr>
              <th class="text-center">Nome</th>
              <th class="text-center">Nascimento</th>
              <th class="text-center">Telefone</th>
              <th class="text-center"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="items in loadedUsuarios" :key="items.id">
              <td class="text-center">{{ items.Nome }}</td>
              <td class="text-center">{{ items.Nascimento }}</td>
              <td class="text-center">{{ items.TelCelular }}</td>
              <td class="text-center">
                <router-link :to="'/profile/' + items.id">
                  <button class="btn btn-info">
                    <i class="fa fa-info-circle"></i>
                  </button>
                </router-link>
              </td>
            </tr>
          </tbody>
        </table> -->
      </div>
      <div class="col-xs-12" v-if="loadedUsuarios.length < 1">
        <div class="box">
          <div class="box-body">
            <h5 class="text-center">Nenhum Registro econtrado!</h5>
          </div>
        </div>
      </div>
      <div class="col-sm-12" v-if="loading">
        <div class="text-center">
          <img src="../../assets/spinner.gif" alt="" class="img-responsive" />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import tabela from '../../components/Tabela.vue'
export default {
  components: {
    'data-tabela' : tabela
  },
  methods: {
    ...mapActions({
      Carregar: "loadUsuarios",
    }),
  },
  created() {
    this.Carregar()
  },
  computed: {
    ...mapGetters(["loadedUsuarios", "loading"]),
  },
  mounted() {
    /* $("#example2").DataTable({
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
          next: "Próximo",
        },
        info: "Mostrando _PAGE_ de _PAGES_ página(s)",
      },
    }); */
  },
  data() {
    return {
      datatable: null,
      search: "",
      comments: [],
    };
  },
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
