<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1 class="text-center">{{usuario.Nome}}</h1>
      <div class="text-center">
        <router-link :to="'/editar/'+usuario.id">
          <button class="btn btn-warning">
            <i class="fa fa-edit"></i> Editar
          </button>
        </router-link>
        <router-link :to="'/print/'+usuario.id">
          <button class="btn btn-default">
            <i class="fa fa-print"></i> Imprimir
          </button>
        </router-link>
      </div>
    </section>

    <!-- Main content -->
    <section class="content container">
      <div class="col-sm-12">
        <div class="nav-tabs-custom">
          <ul class="nav nav-tabs">
            <li class="active">
              <a href="#activity" data-toggle="tab" aria-expanded="true">Dados</a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane active" id="activity">
              <div class="row">
                <div class="col-xs-12 col-sm-9">
                  <h4 class="blue">
                    <span class="label label-purple arrowed-in-right">
                      <i class="ace-icon fa fa-circle smaller-80 align-middle"></i>
                      online
                    </span>
                  </h4>

                  <div class="profile-user-info">
                    <div class="profile-info-row">
                      <div class="profile-info-name">Nascimento:</div>

                      <div class="profile-info-value">
                        <span>
                          <i class="fa fa-calendar"></i>
                          {{usuario.Nascimento}}
                        </span>
                      </div>
                    </div>

                    <div class="profile-info-row">
                      <div class="profile-info-name">Endereço:</div>

                      <div class="profile-info-value">
                        <span>{{usuario.Endereco}}, {{usuario.Bairro}}</span>
                      </div>
                    </div>
                     <div class="profile-info-row">
                      <div class="profile-info-name">Telefone Fixo:</div>

                      <div class="profile-info-value">
                        <span>{{usuario.TelFixo}}</span>
                      </div>
                    </div>
                    <div class="profile-info-row">
                      <div class="profile-info-name">Telefone Celular:</div>

                      <div class="profile-info-value">
                        <span>{{usuario.TelCelular}}</span>
                      </div>
                    </div>

                    <div class="profile-info-row" v-if="usuario.Pai !== '' ">
                      <div class="profile-info-name">Pai:</div>

                      <div class="profile-info-value">
                        <span>{{usuario.Pai}}</span>
                      </div>
                    </div>
                    <div class="profile-info-row" v-if="usuario.TelefonePai">
                      <div class="profile-info-name">Telefone:</div>

                      <div class="profile-info-value">
                        <span>{{usuario.TelefonePai}}</span>
                      </div>
                    </div>
                    <div class="profile-info-row" v-if="usuario.Mae">
                      <div class="profile-info-name">Mãe:</div>

                      <div class="profile-info-value">
                        <span>{{usuario.Mae}}</span>
                      </div>
                    </div>
                    <div class="profile-info-row" v-if="usuario.TelefoneMae">
                      <div class="profile-info-name">Telefone:</div>

                      <div class="profile-info-value">
                        <span>{{usuario.TelefoneMae}}</span>
                      </div>
                    </div>
                    <div class="profile-info-row" v-if="usuario.Serie">
                      <div class="profile-info-name">Série:</div>

                      <div class="profile-info-value">
                        <span>{{usuario.Serie}}</span>
                      </div>
                    </div>
                    <div class="profile-info-row" v-if="usuario.Escola">
                      <div class="profile-info-name">Escola:</div>

                      <div class="profile-info-value">
                        <span>{{usuario.Escola}}</span>
                      </div>
                    </div>
                    <div class="profile-info-row" v-if="usuario.FrequentaCat">
                      <div class="profile-info-name">Frequenta a catequese?</div>

                      <div class="profile-info-value">
                        <span>{{usuario.FrequentaCat}}</span>
                      </div>
                    </div>
                    <div class="profile-info-row" v-if="usuario.FrequentaCat != 'Não'">
                      <div class="profile-info-name">Etapa:</div>

                      <div class="profile-info-value">
                        <span>{{usuario.Etapa}}</span>
                      </div>
                    </div>
                  </div>
                  <!-- Em geral, após a inscrição, você pode criar uma árvore de nós para a imagem do usuário. Em seguida, 
                  
                  você pode obter as informações com a chave do usuário que pode obter chamando o FirebaseUser. Espero que ajude. 
                  Se você tiver alguma dúvida me avise.-->
                </div>
                <div class="col-xs-12">
                  <router-link to="/relacao">
                    <button class="btn btn-default">
                      <i class="fa fa-mail-reply-all"></i> Voltar
                    </button>
                  </router-link>
                </div>
                <!-- /.col -->
              </div>
              <!-- /.row -->
            </div>
            <!-- /.tab-pane -->
          </div>
          <!-- /.tab-content -->
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  props: ["id"],
  computed: {
    usuario() {
      return this.$store.getters.loadedUsuario(this.id);
    }
  }
};
</script>

<style scoped>
.btn {
  color: black;
  margin: 2px;
}
.content-header > h1 {
  margin: 20px 0 10px 0;
}
</style>
