import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import VueTruncate from 'vue-truncate-filter'
import firebase from 'firebase'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import 'material-icons/iconfont/material-icons.css';
import 'vuetify/dist/vuetify.min.css'

// Initialize Firebase
let config = {
  apiKey: "AIzaSyBRklyYIHs9q3g-XICl8_lZ7gXlBxK3t8U",
  authDomain: "porto-web-data.firebaseapp.com",
  databaseURL: "https://porto-web-data.firebaseio.com",
  projectId: "porto-web-data",
  storageBucket: "porto-web-data.appspot.com",
  messagingSenderId: "288626834727"
};

firebase.initializeApp(config);

let app;

export const serverBus = new Vue();

Vue.use(Vuetify, {
  iconfont: 'fa'
})

Vue.use(VueRouter)

Vue.use(VueTruncate)

Vue.config.productionTip = false

firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    app = new Vue({
        render: h => h(App)
      }).$mount('#app')
  }
})