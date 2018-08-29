<template>
  <v-app dark color="white--text">
    <v-toolbar app color="grey darken-3" class="headline">
      <v-flex text-xs-center>
        <router-link to='/' class='clear'>
        <h1>{{ title }}</h1>
        </router-link>
      </v-flex>
    </v-toolbar>
    <v-content>
      <v-container fluid pa-5>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app color="grey darken-4">
      <v-flex class='caption font-weight-black' text-xs-left pa-2>
        Hosted with <a target="_BLANK" href="https://pages.github.com/">Github Pages</a>
      </v-flex><v-flex class='caption font-weight-black' text-xs-center pa-2>
        Created with love © 2018
      </v-flex>
      <v-flex class='caption font-weight-black' text-xs-right pa-2>
        <a target="_BLANK" href="https://github.com/rayhanga/rayhanga.github.io/tree/develop">Source Code</a>
      </v-flex>
    </v-footer>
  </v-app>
</template>

<script>
import VueRouter from 'vue-router'
import ContentContainer from './components/ContentContainer.vue'
import Home from './pages/Home.vue'
import TestPage from './pages/TestPage.vue'
import LandingPage from './pages/LandingPage.vue'

const routes = [
  { path: '/', component: LandingPage},
  { path: '/home', component: Home},
  { path: '/test', component: TestPage }
]

const router = new VueRouter({routes})

export default {
  name: 'app',
  router:router,
  components: {
    ContentContainer, Home
  },
  data () {
    return {
      title: "Rayhan Gusty Alif"
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.clear{
  text-decoration: none;
  color: white;
}

.clean{
  text-decoration: none;
}
</style>
