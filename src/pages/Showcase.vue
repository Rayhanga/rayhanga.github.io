<template>
  <v-layout wrap>
    <ContentContainer v-if="aData.length != 0" :contents="aData"/>
		<v-flex pa-2 text-xs-center v-else>
			<h1 class="title">Please Wait...</h1>
		</v-flex>
  </v-layout>
</template>

<script>
import ContentContainer from '../components/ContentContainer.vue'

export default {
  name: 'Showcase',
  components: {
    ContentContainer
  },
  data () {
    return {
      aData: null
    }
  }
}
</script>
