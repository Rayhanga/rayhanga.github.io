<template>
  <v-layout wrap>
    <ContentContainer :contents="aData"/>
  </v-layout>
</template>

<script>
import ContentContainer from '../components/ContentContainer.vue'
import projectData from "../data/projects.json"

export default {
  name: 'Showcase',
  components: {
    ContentContainer
  },
  data () {
    return {
      aData: projectData
    }
  }
}
</script>
