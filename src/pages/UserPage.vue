<template>
    <v-layout wrap>
        <v-flex xs12 pa-3 text-xs-center>
            <h1>Welcome <br/> {{Uname}}</h1>
        </v-flex>

        <v-flex xs6 pa-3 text-xs-center>
            <v-dialog
            v-model="manageBlog"
            width="600"
            >
                <v-btn 
                    slot="activator"
                >See Raw Blog Page Data</v-btn>

                <v-flex pt-4 xs12 text-xs-center class="title">
                    Raw Data:
                </v-flex>

                <v-flex pt-1 xs12 text-xs-center class="caption">
                    {{currentPosts}}
                </v-flex>

                <v-flex xs12 pa-2>
                    <Blog />
                </v-flex>

            </v-dialog>
        </v-flex>

        <v-flex xs6 pa-3 text-xs-center>
            <h1>Add New Project</h1>
        </v-flex>

        <v-flex xs6 pa-3 text-xs-center>
            <v-dialog
            v-model="tryNewProfession"
            width="600"
            >
                <v-btn 
                    slot="activator"
                >Change Profession</v-btn>
                <v-flex pt-4 xs12 text-xs-center class="title">
                    Current Profession: {{currentProfession}}
                </v-flex>
                <v-form v-model="validProfession" @submit="changeProfession">
                    <v-flex xs12 pa-2>
                        <v-text-field
                            v-model="newProfession"
                            :rules="newProfessionlRules"
                            dark
                            label="New Profession"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 pa-2 text-xs-right>
                        <v-btn
                            type="submit"
                            :disabled="!validProfession"
                            dark
                            pa-2
                        >Submit</v-btn>
                    </v-flex>
                </v-form>
            </v-dialog>
        </v-flex>

        <v-flex xs12 pa-3 text-xs-center>
            <v-btn @click="logout">
                Logout
            </v-btn>
        </v-flex>

    </v-layout>
</template>

<script>
import firebase from 'firebase'
import App from '../App.vue'
import Blog from './Blog.vue'

export default {
    name: "UserPage",
    data () {
        return {
            Uname: firebase.auth().currentUser.email,
            currentProfession: "",
            newProfession: "",
            newProfessionlRules: [
                v => !!v || "New profession can't be blank!"
            ],
            currentPosts: []
        }
    },
    methods: {
        logout: function() {
            firebase.auth().signOut().then(function() {
                App.router.replace('/')
            }, function(err) {
                alert("Uh Oh! " + err.message)
            });
        },
        changeProfession: function() {
            const professionRef = firebase.database().ref('status').child('profession')
            professionRef.set(this.newProfession)
        }
    },
    created() {
        const professionRef = firebase.database().ref('status').child('profession')
        professionRef.on('value', snapshot => {
            this.currentProfession = snapshot.val();
        })
        const postsRef = firebase.database().ref('posts')
        postsRef.on('value', snapshot => {
            this.currentPosts = snapshot.val();
        })
        
    }
}
</script>

<style>

</style>
