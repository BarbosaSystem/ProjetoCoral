import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store'
import vueMask from 'vue-jquery-mask'
import * as Firebase from 'firebase'
import '@/Scripts/index.js'
import AlertCmp from './components/Shared/Alerta.vue'
Vue.use(vueMask)

Vue.config.productionTip = false
Vue.component('app-alert', AlertCmp)

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    Firebase.initializeApp({
      apiKey: "AIzaSyBsvKpSEiydvlQIsQ_iJSG7e2j6r5zrdqY",
      authDomain: "coralprojeto.firebaseapp.com",
      databaseURL: "https://coralprojeto.firebaseio.com",
      projectId: "coralprojeto",
      storageBucket: "coralprojeto.appspot.com",
      messagingSenderId: "107703547822"
    })
    //No caso do F5 recarregamento de pagina
    Firebase.auth().onAuthStateChanged( (user) => {
      if(user){
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadUsuarios')
    
  }
}).$mount('#app')
