<template>
  <v-layout wrap>
    <ContentContainer/>
    <v-flex text-xs-center>
      <router-link to="/test">Go To Test Page</router-link>
    </v-flex>
  </v-layout>
</template>

<script>
import ContentContainer from '../components/ContentContainer.vue'

export default {
  name: 'Home',
  components: {
    ContentContainer
  }
}
</script>
