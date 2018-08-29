import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router';
import App from './App.vue'
import colors from 'vuetify/es5/util/colors'
import 'material-icons/iconfont/material-icons.css';
import 'vuetify/dist/vuetify.min.css'


Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
