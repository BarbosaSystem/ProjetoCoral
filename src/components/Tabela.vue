<template>
  <div>
    <table id="example2" class="table table-bordered table-hover">
      <thead>
        <tr>
          <th class="text-center" v-for="item in cabecalho" :key="item.title">{{item.title}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="items in rows" :key="items.id">
          <td class="text-center">{{items.Nome}}</td>
          <td class="text-center">{{items.Nascimento}}</td>
          <td class="text-center">{{items.TelCelular}}</td>
          <td class="text-center">
            <button class="btn btn-warning">
              <i class="fa fa-edit"></i>
            </button>
            <router-link :to="'/profile/' + items.id">
              <button class="btn btn-info">
                <i class="fa fa-info-circle"></i>
              </button>
            </router-link>
            <!-- <button
              class="btn btn-info"
              type="button"
              data-toggle="modal"
              data-target="#modal-default" @click="exibir(items)"
            >
              <i class="fa fa-info-circle"></i>
            </button>-->
          </td>
        </tr>
      </tbody>
      <!-- <tfoot>
        <tr>
          <th>Rendering engine</th>
          <th>Browser</th>
          <th>Platform(s)</th>
          <th>Engine version</th>
        </tr>
      </tfoot>-->
    </table>
    
    <!-- Modal -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      usuario: []
    };
  },
  methods: {
    exibir(Info) {
      this.usuario = Info;
      this.mostrar = true;
    }
  },
  props: ["cabecalho", "rows"],
  /* beforeDestroy: function() {
    $(this.$el)
      .DataTable("hide").destroy()
  }, */
  mounted() {
    $("#example2").DataTable({
      searching: false,
      paging: true,
      info: true,
      sorting: false,
      bLengthChange: false,
      bFilter: true,
      language: {
        paginate: {
          previous: "Anterior",
          next: "Próximo"
        },
        info: "Mostrando _PAGE_ de _PAGES_ página(s)"
      }
    });
  }
};
</script>

<style scoped>
button {
  margin: 2px;
}
.modal-content {
  border-radius: 10px 10px 0px 0px;
}
</style>
