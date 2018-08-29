<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      dark
      temporary
      app
    >
      <v-toolbar flat >
        <v-list>
          <v-list-tile >
            <v-list-tile-title class="title">
              {{title}}
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-spacer/>

      <v-list pa-1>
        <v-list-tile avatar tag="div" to="/">
          <v-list-tile-avatar>
            <v-icon medium>home</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list pa-1>
        <v-list-tile avatar tag="div" to="/blog">
          <v-list-tile-avatar>
            <v-icon medium>web</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Blog</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list pa-1>
        <v-list-tile avatar tag="div" to="/projects">
          <v-list-tile-avatar>
            <v-icon medium>assignment</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>My Projects</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      
      <v-list pa-1>
        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <v-icon medium>phone</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar 
      app
      color="grey darken-3 white--text"
      class="headline"
    >
      <v-toolbar-side-icon>
        <v-tooltip right>
          <v-btn slot="activator" icon @click.stop ="drawer = !drawer">
            <v-icon>menu</v-icon>
          </v-btn>
          <span>Click to Open Navigation Panel</span>
        </v-tooltip>
      </v-toolbar-side-icon>

      <v-spacer />

      <v-toolbar-items>
        <v-container fill-height class="font-weight-bold body-1">
          v.{{version}}
        </v-container>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
        <router-view></router-view>
    </v-content>

    <v-footer app color="grey darken-4 white--text">
      <v-flex class='caption font-weight-black' xs4 text-xs-left pa-2>
        Hosted with <a target="_BLANK" href="https://pages.github.com/">Github Pages</a>
      </v-flex>
      <v-flex class='caption font-weight-black' xs4 text-xs-center pa-2>
        Created with love &copy; {{new Date().getFullYear()}}
      </v-flex>
      <v-flex class='caption font-weight-black' xs4 text-xs-right pa-2>
        <a target="_BLANK" href="https://github.com/rayhanga/rayhanga.github.io/tree/develop">Source Code</a>
      </v-flex>
    </v-footer>
  </v-app>
</template>

<script>
import pkgData from '../package.json'
import VueRouter from 'vue-router'
import { serverBus } from './main.js'
import Showcase from './pages/Showcase.vue'
import Blog from './pages/Blog.vue'
import LandingPage from './pages/LandingPage.vue'

const routes = [
  { path: '/', component: LandingPage},
  { path: '/projects', component: Showcase},
  { path: '/blog', component: Blog }
]

const router = new VueRouter({routes})

export default {
  name: 'app',
  router: router,
  data () {
    return {
      title: "Rayhan Gusty Alif",
      version: pkgData.version,
      drawer: null
    }
  },
  created() {
    // Get drawer status from LandingPage via serverBus
    serverBus.$on('openDrawer', (drawer) => {
      this.drawer = drawer;
    });
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
