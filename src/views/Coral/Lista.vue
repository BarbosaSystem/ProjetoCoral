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
      <div class="col-sm-12">
        <!-- <data-table class="table table-bordered" :comments="filteredComments" :titulo="cabecalho"/> -->
        <!-- <tabela :cabecalho="cabecalho" :rows="usuarios" v-if="usuarios !== null" v-once/> -->
      </div>
          
    </section>
  </div>
</template>
<script>
/* import tabela from "@/components/Tabela.vue"; */

export default {
  /* components: {
    tabela
  }, */
   methods: {
    mostrar() {
      alert('ola')
    },
    /* usuariosData (){
      this.usuarios = this.$store.getters.loadedUsuarios
    } */
  },
  watch:{
    user(value){
      if (value !== null && value !== undefined){
        this.$router.push('/')
      }
    }
  },
  created () {
    /* this.$store.dispatch("loadUsuarios");
    this.usuariosData(); */
  },
  computed:{
    
  },
  mounted() {
    /* let vm = this;

    for (let i = 0; i < vm.usuario.length; i++) {
      setTimeout(function() {
        vm.comments.push(
          vm.usuario[
            i
          ] 
        );
      });
    } */
  },
  data() {
    return {
      usuarios: null,
      cabecalho: [
        {
          title: "Nome"
        },
        {
          title: "Nascimento"
        },
        {
          title: "Telefone"
        },
        {
          tittle: ""
        }
      ],
      /* usuario: [
        {
          Id: 1,
          Nome: "Leonardo Barbosa de Oliveira",
          Nascimento: "17/10/1988",
          Telefone: "(33) 98701-3525"
        },
        {
          Id: 2,
          Nome: "Matheus Barbosa de Oliveira",
          Nascimento: "17/10/1988",
          Telefone: "(33) 98701-3525"
        },
        {
          Id: 3,
          Nome: "Isabela Barbosa de Oliveira",
          Nascimento: "17/10/1988",
          Telefone: "(33) 98701-3525"
        },
        {
          Id: 4,
          Nome: "Jadson Barbosa de Oliveira",
          Nascimento: "17/10/1988",
          Telefone: "(33) 98701-3525"
        },
        {
          Id: 5,
          Nome: "Leonardo Barbosa de Oliveira",
          Nascimento: "17/10/1988",
          Telefone: "(33) 98701-3525"
        },
        {
          Id: 6,
          Nome: "Leonardo Barbosa de Oliveira",
          Nascimento: "17/10/1988",
          Telefone: "(33) 98701-3525"
        },
        {
          Id: 7,
          Nome: "Leonardo Barbosa de Oliveira",
          Nascimento: "17/10/1988",
          Telefone: "(33) 98701-3525"
        },
        {
          Id: 8,
          Nome: "Leonardo Barbosa de Oliveira",
          Nascimento: "17/10/1988",
          Telefone: "(33) 98701-3525"
        },
        {
          Id: 9,
          Nome: "Leonardo Barbosa de Oliveira",
          Nascimento: "17/10/1988",
          Telefone: "(33) 98701-3525"
        },
        {
          Id: 10,
          Nome: "Leonardo Barbosa de Oliveira",
          Nascimento: "17/10/1988",
          Telefone: "(33) 98701-3525"
        },
        {
          Id: 11,
          Nome: "Leonardo Barbosa de Oliveira",
          Nascimento: "17/10/1988",
          Telefone: "(33) 98701-3525"
        },
        {
          Id: 12,
          Nome: "Leonardo Barbosa de Oliveira",
          Nascimento: "17/10/1988",
          Telefone: "(33) 98701-3525"
        }
      ], */
      search: "",
      comments: []
    };
  },
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
table {
  width: 100% !important;
}
.content-wrapper {
  background-color: white;
}
</style>
