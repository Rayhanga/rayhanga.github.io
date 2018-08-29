<template>
  <v-layout wrap>
    <ContentContainer v-if="aData.length != 0" :contents="aData"/>
		<v-flex pa-2 text-xs-center v-else>
			<h1 class>Nothing Is Here Yet :(</h1>
		</v-flex>
  </v-layout>
</template>

<script>
import ContentContainer from '../components/ContentContainer.vue'
import jsonData from "../data/projects.json"

export default {
  name: 'Showcase',
  components: {
    ContentContainer
  },
  data () {
    return {
      aData: jsonData
    }
  }
}
</script>
