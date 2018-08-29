import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router';
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import 'material-icons/iconfont/material-icons.css';
import 'vuetify/dist/vuetify.min.css'

export const serverBus = new Vue();

Vue.use(Vuetify, {
  iconfont: 'fa'
})
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
