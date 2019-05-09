<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1 class="text-center">Inscrição para o Coral Infantil da Catedral de Santo Antônio - 2019</h1>
      <!-- <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Level</a></li>
        <li class="active">Here</li>
      </ol>-->
    </section>

    <!-- Main content -->
    <section class="content container">
      <form @submit.prevent="onEditUsuario()">
        <div class="col-xs-12 col-sm-8 espaco">
          <div class="form-group">
            <label for>Nome:</label>
            <input type="text" required v-model="cadastro.Nome" class="form-control">
          </div>
        </div>
        <div class="col-xs-12 col-sm-4 espaco">
          <label for>Nascimento:</label>
          <div class="input-group">
            <div class="input-group-addon">
              <i class="fa fa-calendar"></i>
            </div>
            <vue-mask
              class="form-control"
              v-model="cadastro.Nascimento"
              mask="99/99/9999"
              :raw="false"
            ></vue-mask>
            <!-- <appdate @update-date="updateDate" :data="cadastro.Nascimento" dateFormat="dd/mm/yy" v-once/> -->
          </div>

          <!-- <div class="form-group">
            <label for>Nascimento:</label>
            <appdate @update-date="updateDate" dateFormat="dd/mm/yy" v-once/>
          </div>-->
        </div>
        <div class="col-xs-12 col-sm-8 espaco">
          <div class="form-group">
            <label for>Endereço:</label>
            <input type="text" v-model="cadastro.Endereco" class="form-control">
          </div>
        </div>
        <div class="col-xs-12 col-sm-4 espaco">
          <div class="form-group">
            <label for>Bairro:</label>
            <input type="text" v-model="cadastro.Bairro" class="form-control">
          </div>
        </div>

        <div class="col-xs-12 col-sm-3 espaco">
          <div class="form-group">
            <label for>Telefone Fixo:</label>

            <div class="input-group">
              <div class="input-group-addon">
                <i class="fa fa-phone"></i>
              </div>

              <vue-mask
                class="form-control"
                v-model="cadastro.TelFixo"
                mask="(00) 0000-0000"
                :raw="false"
              ></vue-mask>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-3 espaco">
          <div class="form-group">
            <label for>Telefone Celular:</label>

            <div class="input-group">
              <div class="input-group-addon">
                <i class="fa fa-phone"></i>
              </div>

              <vue-mask
                class="form-control"
                v-model="cadastro.TelCelular"
                mask="(00) 00000-0000"
                :raw="false"
                :options="optionsTelCel"
              ></vue-mask>
            </div>

            <!-- <input type="text" v-model="cadastro.TelCelular" class="form-control"> -->
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 espaco">
          <div class="form-group">
            <label for>E-mail:</label>

            <div class="input-group">
              <div class="input-group-addon">
                <i class="fa fa-envelope-o"></i>
              </div>

              <input type="email" v-model="cadastro.Email" class="form-control">
            </div>

            <!-- <input type="text" v-model="cadastro.TelCelular" class="form-control"> -->
          </div>
        </div>
        <div class="col-xs-12 col-sm-4">
          <div class="form-group">
            <label for>Série escolar:</label>
            <input type="text" v-model="cadastro.Serie" class="form-control">
          </div>
        </div>
        <div class="col-xs-12 col-sm-8">
          <div class="form-group">
            <label for>Escola:</label>
            <input type="text"  v-model="cadastro.Escola" class="form-control">
          </div>
        </div>
        <div class="col-xs-12 col-sm-8 espaco">
          <div class="form-group">
            <label for>Pai:</label>
            <input type="text" v-model="cadastro.Pai" class="form-control">
          </div>
        </div>
        <div class="col-xs-12 col-sm-4 espaco">
          <div class="form-group">
            <label for>Telefone:</label>

            <div class="input-group">
              <div class="input-group-addon">
                <i class="fa fa-phone"></i>
              </div>

              <vue-mask
                class="form-control"
                v-model="cadastro.TelefonePai"
                mask="(00) 00000-0000"
                :raw="false"
                :options="optionsTelCel"
              ></vue-mask>
            </div>

            <!-- <input type="text" v-model="cadastro.TelCelular" class="form-control"> -->
          </div>

          <!-- <input type="text" v-model="cadastro.TelCelular" class="form-control"> -->
        </div>
        <div class="col-xs-12 col-sm-8 espaco">
          <div class="form-group">
            <label for>Mãe:</label>
            <input type="text" v-model="cadastro.Mae" class="form-control">
          </div>
        </div>
        <div class="col-xs-12 col-sm-4 espaco">
          <div class="form-group">
            <label for>Telefone:</label>

            <div class="input-group">
              <div class="input-group-addon">
                <i class="fa fa-phone"></i>
              </div>

              <vue-mask
                class="form-control"
                v-model="cadastro.TelefoneMae"
                mask="(00) 00000-0000"
                :raw="false"
                :options="optionsTelCel"
              ></vue-mask>
            </div>

            <!-- <input type="text" v-model="cadastro.TelCelular" class="form-control"> -->
          </div>
        </div>
        <div class="col-xs-12 col-sm-4 espaco">
          <div class="form-group">
            <label>Frequenta a catequese?</label>
            <select class="form-control" v-model="cadastro.FrequentaCat">
              <option disabled value="">Selecione um item</option>
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>
        </div>
        <div class="col-xs-12 col-sm-8 espaco" v-if="cadastro.FrequentaCat === 'Sim'">
          <div class="form-group">
            <label for="">Qual etapa?</label>
            <input type="text" v-model="cadastro.Etapa" class="form-control">
          </div>
        </div>
        <div class="col-xs-12 espaco text-justify" style="margin-top: 10px">
          <p></p>
          <label class="container-box">
            Confirmo a atualização dos dados acima.
            <input
              type="checkbox"
              v-model="cadastro.AcceptTerms"
            >
            <span class="checkmark"></span>
          </label>
        </div>

        <div class="col-xs-4 col-xs-offset-4">
          <button
            type="submit"
            :disabled="!cadastro.AcceptTerms"
            class="btn btn-block btn-flat"
            :class="{'btn-primary' : !cadastro.AcceptTerms, 'btn-success': cadastro.AcceptTerms}"
          >
            <i v-if="cadastro.AcceptTerms" class="fa fa-check"></i>
            Confirmar
          </button>
        </div>
      </form>
      <!--------------------------
        | Your Page Content Here |
      -------------------------->
    </section>

    <!-- /.content -->
  </div>
</template>
<script>
/* import Appdate from "@/components/Data.vue"; */

export default {
  /* components: {
    Appdate
  }, */
  methods: {

    onEditUsuario() {
      if (!this.formValid) {
        return;
      }
      if(this.cadastro.FrequentaCat == "Não"){
        this.cadastro.Etapa = ""
      }

      

      const usuario = {
        id: this.cadastro.id,
        Nome: this.cadastro.Nome,
        Endereco: this.cadastro.Endereco,
        Nascimento: this.cadastro.Nascimento,
        Bairro: this.cadastro.Bairro,
        TelFixo: this.cadastro.TelFixo,
        TelCelular: this.cadastro.TelCelular,
        Email: this.cadastro.Email,
        Pai: this.cadastro.Pai,
        Mae: this.cadastro.Mae,
        TelefoneMae: this.cadastro.TelefoneMae,
        TelefonePai: this.cadastro.TelefonePai,
        Serie: this.cadastro.Serie,
        Escola: this.cadastro.Escola,
        FrequentaCat: this.cadastro.FrequentaCat,
        Etapa: this.cadastro.Etapa
      };
      this.$store.dispatch("UpdateUsuario", usuario);
      this.$router.push("/");
    },
  },
  data() {
    return {
      options: {},
      optionsTelFixo: {
        placeholder: "(  )    -"
      },
      optionsTelCel: {
        placeholder: "(  )     -"
      },
      TermosAceito: false,
      cadastro: {
        Nome: "",
        Nascimento: "",
        Endereco: "",
        Bairro: "",
        TelFixo: "",
        TelCelular: "",
        Pai: "",
        Mae: "",
        TelefonePai: "",
        TelefoneMae: "",
        AcceptTerms: false
      }
    };
  },
  props: ["id"],
  created() {
    this.cadastro = this.usuarioCarregados;
    this.date = this.cadastro.date;
  },
  computed: {
    usuarioCarregados() {
      return this.$store.getters.loadedUsuario(this.id);
    },
    formValid() {
      return ((this.cadastro.AcceptTerms != false) && !(this.cadastro.FrequentaCat == 'Sim' && this.cadastro.Etapa == ''))
    }
  }
};
</script>
<style scoped>
</style>

