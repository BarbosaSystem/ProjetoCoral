<template>
  <div class="modal fade in" id="modal-default" style="display: block; padding-right: 17px;">
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span></button>
                <h4 class="modal-title">Default Modal</h4>
        </div>-->
        <div class="modal-body">
          <page size="A4">
            <div class="formulario">
              <div class="cabecalho">
                <!-- <div class="cabecalho-bloco">
                  <img class="imagem" src="/imagens/download.jpg" alt>
                </div>-->
                <div class="cabecalho-bloco">
                  <p class="titulo-principal">Paróquia Santo Antônio</p>
                  <p class="subtitulo">Coral Infantil</p>
                </div>
                <div class="cabecalho-bloco">
                  <p class="perfil">{{usuario.Nome}}</p>
                </div>
              </div>
              <div class="ficha">
                <h2 class="ficha-grupo">
                  <span></span>
                  Data de Nascimento: {{usuario.Nascimento}}
                </h2>
              </div>
              <div class="ficha-65">
                <h2 class="ficha-grupo">
                  <span></span>
                  Endereço: {{usuario.Endereco}}
                </h2>
              </div>
              <div class="ficha-35">
                <h2 class="ficha-grupo">
                  <span></span>
                  Bairro: {{usuario.Bairro}}
                </h2>
              </div>
              <div class="ficha-50">
                <h2 class="ficha-grupo">
                  <span></span>
                  Telefone: {{usuario.TelFixo}}
                </h2>
              </div>
              <div class="ficha-50">
                <h2 class="ficha-grupo">
                  <span></span>
                  Telefone Celular: {{usuario.TelCelular}}
                </h2>
              </div>
              <div class="ficha-20">
                <h2 class="ficha-grupo">
                  <span></span>
                  Série: {{usuario.Serie}}
                </h2>
              </div>
              <div class="ficha-80">
                <h2 class="ficha-grupo">
                  <span></span>
                  Escola: {{usuario.Escola}}
                </h2>
              </div>
              <div class="ficha-50">
                <h2 class="ficha-grupo">
                  <span></span>
                  Pai: {{usuario.Pai}}
                </h2>
              </div>
              <div class="ficha-50">
                <h2 class="ficha-grupo">
                  <span></span>
                  Telefone: {{usuario.TelefonePai}}
                </h2>
              </div>
              <div class="ficha-50">
                <h2 class="ficha-grupo">
                  <span class="barra"></span>
                  Mãe: {{usuario.Mae}}
                </h2>
              </div>
              <div class="ficha-50">
                <h2 class="ficha-grupo">
                  <span></span>
                  Telefone: {{usuario.TelefoneMae}}
                </h2>
              </div>
              <div class="ficha-40">
                <h2 class="ficha-grupo">
                  <span></span>
                  Frequenta a catequese: {{usuario.FrequentaCat}}
                </h2>
              </div>
              <div class="ficha-60">
                <h2 class="ficha-grupo">
                  <span></span>
                  Qual Etapa? {{usuario.Etapa}}
                </h2>
              </div>

              <div class="opcao hidden-print">
                <button class="btn btn-primary" @click="print()">
                  <i class="fa fa-print"></i> Imprimir
                </button>
                <!-- <p class="visible-print-block">{{MostrarData}}</p> -->
                <router-link :to="'/profile/' + usuario.id">
                  <button class="btn btn-default">
                    <i class="fa fa-mail-reply-all"></i>
                  </button>
                </router-link>
              </div>
            </div>
          </page>
        </div>
        <!-- <div class="modal-footer">
          <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>-->
      </div>
      <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
  </div>
</template>
<script>
export default {
  props: ["id"],
  methods: {
    print() {
      window.print();
    }
  },
  computed: {
    usuario() {
      return this.$store.getters.loadedUsuario(this.id);
    },
    MostrarData() {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1;
      var yyyy = today.getFullYear();
      if (dd < 10) {
        dd = "0" + dd;
      }
      if (mm < 10) {
        mm = "0" + mm;
      }
      return dd + "/" + mm + "/" + yyyy;
    }
  }
};
</script>


<style scoped>
.visible-data{
  visibility: hidden;
}
.btn-default {
  float: left;
}
.btn-primary {
  float: right;
}
@media print {
.visible-data{
  visibility: visible;
}
  .barra {
    display: inline-block;
    height: 100%;
    width: 0.3cm;
    background-color: #367fa9;
    position: absolute;
    left: 0;
    visibility: visible;
  }
  .modal-body {
    margin: -40px;
  }
  span {
    display: inline-block !important;
  }
}
.modal-body {
  padding: 0;
}
.opcao {
  margin: 10px auto;
  display: block;
  text-align: center;
}
body {
  background: rgb(204, 204, 204);
  font-size: 12px !important;
}
page {
  background: white;
  display: block;
  margin: 0 auto;
  margin-bottom: 0.5cm;
  box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
}
page[size="A4"] {
  width: 21cm;
  height: 29.7cm;
  padding: 1cm;
}
page[size="A4"][layout="landscape"] {
  width: 29.7cm;
  height: 21cm;
}
page[size="A3"] {
  width: 29.7cm;
  height: 42cm;
}
page[size="A3"][layout="landscape"] {
  width: 42cm;
  height: 29.7cm;
}
page[size="A5"] {
  width: 14.8cm;
  height: 21cm;
}
page[size="A5"][layout="landscape"] {
  width: 21cm;
  height: 14.8cm;
}

.cabecalho {
  width: 100%;
  /*   height: 7.7558cm; */
  display: table;
}
.cabecalho-bloco {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 2.5245cm !important;
}
.cabecalho-bloco .imagem {
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 2.36cm;
  height: 2.36cm;
}
.cabecalho-bloco .titulo-principal {
  text-align: center;
  font-size: 30px;
  font-weight: bold;
}
.cabecalho-bloco .subtitulo {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-size: 24px;
}
.cabecalho-bloco .perfil {
  text-align: center;
  font-size: 22px;
  margin-top: 0.8cm;
  text-transform: uppercase;
  font-weight: bold;
}

.ficha {
  display: inline;
}
.ficha-80 {
  width: 79.2%;
  margin: 0;
  display: inline-block;
}
.ficha-70 {
  width: 69.3%;
  margin: 0;
  display: inline-block;
}
.ficha-50 {
  width: 49.5%;
  margin: 0;
  display: inline-block;
}
.ficha-60 {
  width: 59.4%;
  margin: 0;
  display: inline-block;
}

.ficha-65 {
  width: 64.35%;
  margin: 0;
  display: inline-block;
}

.ficha-40 {
  width: 39.6%;
  margin: 0;
  display: inline-block;
}
.ficha-35 {
  width: 34.65%;
  margin: 0;
  display: inline-block;
}
.ficha-30 {
  width: 29.7%;
  margin: 0;
  display: inline-block;
}
.ficha-20 {
  width: 19.8%;
  margin: 0;
  display: inline-block;
}

.ficha-grupo {
  height: 1.119cm;
  margin: 0 0 1cm 0;
  font-size: 14px;
  position: relative;
  text-indent: 15px;
  line-height: 44px;
  font-weight: bold;
}

.ficha-grupo > span {
  display: inline-block;
  height: 100%;
  width: 0.3cm;
  background-color: #367fa9;
  position: absolute;
  left: 0;
}
/* 
.cabecalho-bloco .subtitulo{
  font-size: 20px;
  text-align: center;
  font-weight: bold;
}

.cabecalho-bloco .perfil{
  height: 100%;
  font-size: 22px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  border: 1px solid black;
} */
</style>

