<template>
	<v-container fluid>
		<v-layout row wrap>
			<ContentItem 
				v-for="content in contents"
				:content="content"
				v-bind:key="content.key"
			/>
		</v-layout>
	</v-container>
</template>

<script>
import ContentItem from "./ContentItem.vue"

export default {
	name: 'ContentContainer',
	components: {
		ContentItem
	},
	props: {
		contents: {
			type: Array,
			required: true
		}
	}
}
</script>