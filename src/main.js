import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import 'material-icons/iconfont/material-icons.css';
import 'vuetify/dist/vuetify.min.css'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBRklyYIHs9q3g-XICl8_lZ7gXlBxK3t8U",
  authDomain: "porto-web-data.firebaseapp.com",
  databaseURL: "https://porto-web-data.firebaseio.com",
  projectId: "porto-web-data",
  storageBucket: "porto-web-data.appspot.com",
  messagingSenderId: "288626834727"
};
firebase.initializeApp(config);

export const serverBus = new Vue();

Vue.use(Vuetify, {
  iconfont: 'fa'
})
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
