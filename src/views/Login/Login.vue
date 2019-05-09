<template>
  <div class="login-box">
    <div class="login-logo">
      <b>System</b>LTE
    </div>
    <!-- /.login-logo -->
    <div class="login-box-body">
      <p class="login-box-msg">Entre para iniciar sua sessão</p>

      <form @submit.prevent="onSignin()">
        <div class="form-group has-feedback">
          <input type="email" class="form-control" v-model="Email" placeholder="Email">
          <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input type="password" class="form-control" v-model="Password" placeholder="Password">
          <span class="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>
        <div class="row">
          <div class="col-xs-8">
            <!-- <div class="checkbox icheck">
              <label>
                <div
                  class="icheckbox_square-blue"
                  aria-checked="false"
                  aria-disabled="false"
                  style="position: relative;"
                >
                  <input
                    type="checkbox"
                    style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"
                  >
                  <ins
                    class="iCheck-helper"
                    style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"
                  ></ins>
                </div>Remember Me
              </label>
            </div>-->
          </div>
          <!-- /.col -->
          <div class="col-xs-4">
            <button
              type="submit"
              :disabled="!formValid"
              class="btn btn-primary btn-block btn-flat"
            >Entrar</button>
          </div>
          <!-- /.col -->
        </div>
      </form>
      <app-alert v-if="error" :mensagem="error"></app-alert>
      <a @click="RecuperarSenha()">Esqueci minha senha</a>
      <div v-if="mostrar" class="input-group input-group-sm">
        <input type="text" v-model="recuperarEmail" class="form-control">
        <span class="input-group-btn">
          <button type="button" class="btn btn-success btn-flat" @click="ResetPassword">
            <span class="fa fa-send"></span>
          </button>
        </span>
      </div>
      
      <br>
      <router-link to="/register">
        <a>Novo Usuário</a>
      </router-link>
    </div>
    <!-- /.login-box-body -->
    
  </div>
</template>
<script>

export default {
  
  methods: {
    RecuperarSenha() {
      this.mostrar = !this.mostrar;
    },
    ResetPassword() {
      if (this.recuperarEmail !== "") {
        if (
          confirm("Um e-mail será enviado para este e-mail, deseja prosseguir?")
        ) {
          this.$store.dispatch("ChangePassword", {
            email: this.recuperarEmail
          });
          this.RecuperarSenha();
        }
      }
    },
    onSignin() {
      this.$store.dispatch("signUserIn", {
        Email: this.Email,
        Password: this.Password
      });
    }
  },
  created() {
    if (this.user) {
      this.$router.push("/");
    }
  },
  data() {
    return {
      mostrar: false,
      recuperarEmail: "",
      Email: "",
      Password: ""
    };
  },
  computed: {
    formValid() {
      return (this.Email != "") & (this.Password.length >= 6);
    },
    /* comparePassowrds(){
      return this.Password !== this.confirmPassword ? 'invalid' : ''
    },
    formValid(){
      return this.Email !== '' && this.Nome !== '' && this.Password !== null &&
      this.confirmPassword !== '' && this.comparePassowrds === '' && this.AcceptTerms === true
    }, */
    user() {
      return this.$store.getters.user;
    },
    error() {
      return this.$store.getters.error;
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    }
  },
  mounted() {}
};
</script>

<style scoped>
.modal-body{
  padding: 0;
}
</style>
