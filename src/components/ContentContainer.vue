<template>
	<v-container fluid>
		<v-layout row wrap>
			<ContentItem
				v-for="(value, key) in contents"
				:content="value"
				:postType="postType"
				:key="key"
			/>
			<v-flex xs12 text-xs-center>
				<v-dialog
					v-model="postAdd"
					v-if="!signedOut"
					width="600"
				>
					<v-btn
						slot="activator"
					>Add Post</v-btn>
					
					<v-form v-model="validPost" @submit="addPost">
						<v-flex xs12 pa-2>
							<v-text-field
								v-model="newTitle"
								:rules="addPostRules"
								dark
								required
								label="New Post Title"
							></v-text-field>
						</v-flex>
						<v-flex xs12 pa-2>
							<v-textarea
								v-model="newText"
								:rules="addPostRules"
								dark
								required
								label="New Post Text"
							></v-textarea>
						</v-flex>
						<v-flex xs12 pa-2 text-xs-right>
								<v-btn
									type="submit"
									:disabled="!validPost"
									dark
									pa-2
								>Create New Post</v-btn>
						</v-flex>
					</v-form>

				</v-dialog>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import firebase from 'firebase'
import ContentItem from "./ContentItem.vue"

export default {
	name: 'ContentContainer',
	components: {
		ContentItem
	},
	props: {
		contents: {
			type: Array
		},
		postType: {
			type: String
		}
	},
	data () {
		return {
			addPostRules:[
				(v) => !!v || "New statement can't be "+ v
			],
			newText: "",
			newTitle: ""
		}
	},
	created () {
		this.signedOut = !firebase.auth().currentUser;
	},
	methods: {
		addPost () {
			const postRef = firebase.database().ref().child(this.postType);
			var newPostData = {
				title: this.newTitle,
				text: this.newText
			}
			postRef.push(newPostData, function(error) {
				if (error){
					alert("Uh Oh! "+ error)
				} else {
					alert("Post Added Successfully")
				}
			})
		}
	}
}
</script>