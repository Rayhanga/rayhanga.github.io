<template>
	<v-container fluid>
		<v-layout row wrap>
		<ContentItem :key="content.id" v-for="content in contents" :content="content"/>
		</v-layout>
	</v-container>
</template>

<script>
import ContentItem from "./ContentItem.vue"
import contData from "../data/ctn.json"

export default {
	name: 'ContentContainer',
	components: {
		ContentItem
	},
	data () {
		return {
			contents: contData
		}
	}
}
</script>