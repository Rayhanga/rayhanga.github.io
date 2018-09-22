<template>
  <v-flex v-if="this.$vnode.key != 'length'" :xs12="full" :xs6="!full" pa-2>
      <v-card py-2 class="ContentItem">
        <v-card-title primary-title>
          <h1>{{ content.title }}</h1>
        </v-card-title>
        <v-card-text>
          <p v-if="!full" class="text-truncate">
            {{ content.text }}
          </p>
          <p v-else-if="full" class="text-no-wrap">
            {{ content.text }}
          </p>
        </v-card-text>
        <v-card-actions>
          <v-dialog
              v-model="postEdit"
              v-if="!signedOut"
              width="600"
          >
              <v-btn 
                  slot="activator"
              >Edit Post</v-btn>

              <v-form v-model="validPost" @submit="editPost">
                  <v-flex xs12 pa-2>
                      <v-text-field
                          v-model="newTitle"
                          :rules="editPostRules"
                          dark
                          required
                          label="New Post Title"
                      ></v-text-field>
                  </v-flex>
                  <v-flex xs12 pa-2>
                      <v-textarea
                          v-model="newText"
                          :rules="editPostRules"
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
                        >Confirm Edit</v-btn>
                  </v-flex>
              </v-form>
          </v-dialog>
          <v-btn
            v-if="!signedOut"
            @click="deletePost"
          >Delete Post</v-btn>
          <v-btn
            @click="full = !full"
          >
            <span v-if="!full">More</span>
            <span v-else-if="full">Less</span>
          </v-btn>
        </v-card-actions>
      </v-card>
  </v-flex>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'ContentItem',
  props: {
    content: {
      type: Object,
      required: true
    },
    postType: {
      type: String
    },
    key: {
      type: Object
    }
  },
  data () {
    return {
      signedOut: "",
      editPostRules:[
        v => !!v || "New statement can't be "+ v
      ],
      newText: "",
      newTitle: "",
      full: false
    }
  },
  created () {
    this.signedOut = !firebase.auth().currentUser;
    this.newText = this.content.text;
    this.newTitle = this.content.title;
  },
  methods: {
    editPost () {
      const editPostRef = firebase.database().ref().child(this.postType).child(this.$vnode.key);
      var editedPostData = {
        title: this.newTitle,
        text: this.newText
      }
      editPostRef.set(editedPostData, function (error){
        if (error){
          alert("Uh Oh! " + error)
        } else {
          alert("Post Edited Successfully")
        }
      })
    },
    deletePost () {
      const postRef = firebase.database().ref().child(this.postType).child(this.$vnode.key);
      postRef.remove()
    }
  }
}
</script>
