<template>
  <v-layout wrap>
    <ContentContainer :postType="'posts'" :contents="aData"/>
		<v-flex pa-2 text-xs-center v-if="aData.length = 0">
			<h1 class="title">Please Wait...</h1>
		</v-flex>
  </v-layout>
</template>

<script>
import ContentContainer from '../components/ContentContainer.vue'
import firebase from 'firebase'

export default {
  name: 'Blog',
  components: {
    ContentContainer
  },
  data () {
    return {
      aData: []
    }
  },
  created () {
    const postsRef = firebase.database().ref('posts')
    postsRef.on('value', snapshot => {
      this.aData= snapshot.val();
    })
  },
	props: {
		extData: {
			type: Array
		}
	}
}
</script>