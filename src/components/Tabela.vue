<template>
  <table id="example2" class="table table-bordered table-hover" v-once>
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

          <button class="btn btn-danger" @click="RemoverCrianca(items.id)">
            <i class="fa fa-times"></i>
          </button>

        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  computed : {
    ...mapGetters(["loadedUsuarios"])
  },
  created() {
    $(this.$el).DataTable({
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
    });
  },
  methods: {
    ...mapActions(["RemoverCrianca"])
  },
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
