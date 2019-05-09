<template>
  <div class="register-box">
    <div class="register-logo">
      <b>System</b>LTE
    </div>

    <div class="register-box-body">
      <p class="login-box-msg">Registrar novo usuário</p>

      <form @submit.prevent="onSignup()">
        <div class="form-group has-feedback">
          <input type="text" class="form-control" v-model="Nome" placeholder="Nome completo">
          <span class="glyphicon glyphicon-user form-control-feedback"></span>
        </div>

        <!-- <div class="form-group has-feedback">
          <vue-mask
          class="form-control"
          v-model="Telefone"
          mask="(00) 00000-0000"
          :raw="false"
          :options="optionsTelCel"
        ></vue-mask>
        <span class="glyphicon glyphicon-phone form-control-feedback"></span>
        </div> -->

        <div class="form-group has-feedback">
          <input type="email" class="form-control" v-model="Email" placeholder="Email">
          <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input type="password" class="form-control" v-model="Password" placeholder="Password">
          <span class="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input
            type="password"
            class="form-control"
            :class="comparePassowrds"
            v-model="confirmPassword"
            placeholder="Confirme password"
          >
          <span class="glyphicon glyphicon-log-in form-control-feedback"></span>
        </div>
        <div class="row">
          <div class="col-xs-8">
            <label class="container-box">
              Eu aceito os termos
              <input type="checkbox" v-model="AcceptTerms">
              <span class="checkmark"></span>
            </label>
          </div>
          <!-- /.col -->
          <div class="col-xs-4">
            <button
              type="submit"
              :disabled="!formValid"
              class="btn btn-primary btn-block btn-flat"
            >Registrar</button>
          </div>
          <!-- /.col -->
        </div>
      </form>

      <!-- <div class="social-auth-links text-center">
        <p>- OR -</p>
        <a href="#" class="btn btn-block btn-social btn-facebook btn-flat">
          <i class="fa fa-facebook"></i> Sign up using
          Facebook
        </a>
        <a href="#" class="btn btn-block btn-social btn-google btn-flat">
          <i class="fa fa-google-plus"></i> Sign up using
          Google+
        </a>
      </div>-->

      <router-link to="/login">
        <a>Eu já sou membro</a>
      </router-link>
    </div>
    <!-- /.form-box -->
  </div>
</template>
<script>
export default {
  methods: {
    onSignup() {
      this.$store.dispatch("signUserUp", {
        Nome: this.Nome,
        /* Telefone: this.Telefone.replace(/[^0-9]/g,''), */
        Email: this.Email,
        Password: this.Password
      });
    }
  },
  data() {
    return {
      options: {},
      optionsTelCel: {
        placeholder: "(  )    -"
      },
      Email: "",
      Password: "",
      confirmPassword: "",
      Nome: "",
      /* Telefone:"", */
      AcceptTerms: false
    };
  },
  computed: {
    comparePassowrds() {
      return this.Password !== this.confirmPassword ? "invalid" : "";
    },
    formValid() {
      return (
        this.Email !== "" &&
        this.Nome !== "" &&
        this.Password !== null &&
        this.confirmPassword !== "" &&
        this.comparePassowrds === "" &&
        this.AcceptTerms === true
      );
    },
    user() {
      return this.$store.getters.user;
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
.invalid {
  border: 1px solid red;
}
</style>
