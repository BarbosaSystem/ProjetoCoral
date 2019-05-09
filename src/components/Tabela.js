import Vue from 'vue'

Vue.component('data-table', {
    render: function (createElement) {
      return createElement(
        "table", null, []
        )
    },
    props: ['comments', 'titulo'],
    data() {
      return {
        headers: this.titulo,
        rows: [] ,
        dtHandle: null
      }
    },
    watch: {
      comments(val, oldVal) {
        let vm = this;
        vm.rows = [];
        val.forEach(function (item) {
          let row = [];
          row.push(item.Nome);
          row.push(item.Nascimento)
          /* row.push('<a href="mailto://' + item.email + '">' + item.email + '</a>'); */
          row.push(item.Telefone);
          row.push("<button class='btn btn-warning'> " +
          "<i class='fa fa-edit'> </i> </button> <button class='btn btn-info' @click='mostrar(item.id)'> <i class='fa fa-info'> </i> </button>")
          vm.rows.push(row);
        });
        vm.dtHandle.clear();
        vm.dtHandle.rows.add(vm.rows);
        vm.dtHandle.draw();
      }
    },
    mounted() {
      let vm = this;
      vm.dtHandle = $(this.$el).DataTable({
        columns: vm.headers,
        data: vm.rows,
        searching: false,
        paging: true,
        info: false,
        sorting: false,
        bLengthChange: false,
        bFilter: true,
        language: {
            "paginate": {
              "previous": "Anterior",
              "next": "Próximo"
            }
          }
      });
    }  
  });