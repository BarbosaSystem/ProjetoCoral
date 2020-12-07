import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store'
import vueMask from 'vue-jquery-mask'
import '@/Scripts/index.js'
import AlertCmp from './components/Shared/Alerta.vue'
Vue.use(vueMask)

Vue.config.productionTip = false
Vue.component('app-alert', AlertCmp)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
